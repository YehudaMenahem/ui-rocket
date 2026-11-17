import { chromium } from 'playwright';
import { createRequire } from 'module';
import fs from 'node:fs';
import path from 'node:path';

const require = createRequire(import.meta.url);
const axeSource = fs.readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8');

const BASE = process.env.AUDIT_BASE || 'http://127.0.0.1:3001';
const OUT = '/opt/cursor/artifacts';
fs.mkdirSync(OUT, { recursive: true });

const routes = [
  '/',
  '/docs',
  '/docs/installation',
  '/docs/dark-mode',
  '/components',
  '/theming',
  '/playground',
  '/blog',
  '/ButtonPage',
  '/InputFieldPage',
  '/FormPage',
  '/IconPage',
  '/ImgPage',
  '/SelectFieldPage',
  '/ModalPage',
];

async function axePage(page) {
  await page.addScriptTag({ content: axeSource });
  return page.evaluate(async () => {
    const results = await window.axe.run(document, {
      runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'best-practice'] },
    });
    return {
      violations: results.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        nodes: v.nodes.length,
        help: v.help,
        targets: v.nodes.slice(0, 5).map((n) => n.target.join(' ')),
      })),
      serious: results.violations.filter((v) => v.impact === 'serious' || v.impact === 'critical')
        .length,
      moderate: results.violations.filter((v) => v.impact === 'moderate' || v.impact === 'minor')
        .length,
    };
  });
}

async function overflow(page) {
  return page.evaluate(() => {
    const doc = document.documentElement;
    return {
      scrollWidth: doc.scrollWidth,
      clientWidth: doc.clientWidth,
      overflow: doc.scrollWidth - doc.clientWidth,
    };
  });
}

const browser = await chromium.launch({ headless: true });
const summary = { base: BASE, routes: {}, screenshots: [] };

const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

for (const route of routes) {
  const res = await page.goto(`${BASE}${route}`, { waitUntil: 'networkidle' });
  const axe = await axePage(page);
  const ov = await overflow(page);
  const h1 = await page.locator('h1').first().textContent().catch(() => null);
  const main = await page.locator('main').count();
  summary.routes[route] = {
    status: res?.status(),
    h1: h1?.trim() || null,
    main,
    overflow: ov.overflow,
    axeSerious: axe.serious,
    axeModerate: axe.moderate,
    violations: axe.violations,
  };
}

// Specific checks
await page.goto(`${BASE}/ButtonPage`, { waitUntil: 'networkidle' });
const chips = await page.locator('.meta .chip').allTextContents();
summary.buttonChips = chips.map((c) => c.trim());

await page.locator('input[type="color"]').evaluate((el) => {
  const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
  setter.call(el, '#2f6f4e');
  el.dispatchEvent(new Event('input', { bubbles: true }));
  el.dispatchEvent(new Event('change', { bubbles: true }));
});
await page.waitForTimeout(300);
const code = await page.locator('.demo pre.code').first().textContent();
summary.customColorCode = Boolean(code?.includes('#2f6f4e') || code?.includes('2f6f4e'));
summary.customColorSnippet = code?.slice(0, 280);

await page.screenshot({ path: path.join(OUT, 'verify-button-chips.png'), fullPage: false });
summary.screenshots.push('verify-button-chips.png');

// Playground custom color code visible
await page.locator('.demo-bar button', { hasText: 'Code' }).click().catch(() => {});
await page.screenshot({
  path: path.join(OUT, 'verify-playground-custom-color.png'),
  fullPage: false,
});
summary.screenshots.push('verify-playground-custom-color.png');

// Home screenshots
await page.setViewportSize({ width: 1280, height: 800 });
await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
await page.screenshot({ path: path.join(OUT, 'verify-home-desktop.png'), fullPage: false });
summary.screenshots.push('verify-home-desktop.png');

await page.setViewportSize({ width: 768, height: 900 });
await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
summary.overflow768 = await overflow(page);
await page.screenshot({ path: path.join(OUT, 'verify-home-768.png'), fullPage: false });
summary.screenshots.push('verify-home-768.png');

await page.setViewportSize({ width: 375, height: 812 });
await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
summary.overflow375 = await overflow(page);
await page.screenshot({ path: path.join(OUT, 'verify-home-375.png'), fullPage: false });
summary.screenshots.push('verify-home-375.png');

await page.setViewportSize({ width: 1280, height: 800 });
await page.goto(`${BASE}/components`, { waitUntil: 'networkidle' });
await page.screenshot({ path: path.join(OUT, 'verify-components-index.png'), fullPage: false });
summary.screenshots.push('verify-components-index.png');

// Form toast
await page.goto(`${BASE}/FormPage`, { waitUntil: 'networkidle' });
await page.locator('#pg-callsign').fill('Eagle');
await page.locator('#pg-go').check();
await page.getByRole('button', { name: 'Submit' }).first().click();
await page.waitForTimeout(400);
const toastVisible = await page.locator('.toaster, [class*="toaster"], [role="status"]').count();
summary.formToast = toastVisible > 0;
await page.screenshot({ path: path.join(OUT, 'verify-form-toast.png'), fullPage: false });
summary.screenshots.push('verify-form-toast.png');

// Getting started links
await page.goto(`${BASE}/ButtonPage`, { waitUntil: 'networkidle' });
const gs = await page.locator('.side a').evaluateAll((els) =>
  els
    .filter((a) => ['Installation', 'Theming', 'Dark mode'].includes(a.textContent?.trim()))
    .map((a) => ({ text: a.textContent.trim(), href: a.getAttribute('href') }))
);
summary.gettingStartedLinks = gs;

// Input show error alone
await page.goto(`${BASE}/InputFieldPage`, { waitUntil: 'networkidle' });
const errToggle = page.getByRole('switch', { name: /error/i });
await errToggle.click();
await page.waitForTimeout(100);
summary.inputErrorShown = (await page.locator('.error').count()) > 0;

fs.writeFileSync(path.join(OUT, 'verify-audit.json'), JSON.stringify(summary, null, 2));
console.log(JSON.stringify(summary, null, 2));
await browser.close();
