/**
 * axe-core accessibility smoke against a locally served production build.
 * Fails on serious/critical violations. Does not disable axe rules.
 */
import { createServer } from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { extname, join, normalize, resolve } from 'node:path';
import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';

const ROOT = resolve(process.cwd(), 'apps/site/build');
const HOST = '127.0.0.1';
const PORT = Number(process.env.A11Y_PORT || 4173);

const ROUTES = [
  '/',
  '/docs/installation',
  '/ButtonPage',
  '/ImgPage',
  '/theming',
];

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
  '.map': 'application/json',
};

function send(res, status, body, type = 'text/plain; charset=utf-8') {
  res.writeHead(status, { 'Content-Type': type });
  res.end(body);
}

function resolveFile(urlPath) {
  const clean = decodeURIComponent(urlPath.split('?')[0].split('#')[0]);
  const candidate = normalize(join(ROOT, clean === '/' ? 'index.html' : clean));
  if (!candidate.startsWith(ROOT)) return null;

  if (existsSync(candidate) && statSync(candidate).isFile()) {
    return candidate;
  }

  // SPA fallback for client-side routes
  const index = join(ROOT, 'index.html');
  if (existsSync(index)) return index;
  return null;
}

function startServer() {
  if (!existsSync(join(ROOT, 'index.html'))) {
    throw new Error(
      `Missing ${ROOT}/index.html — run \`pnpm build\` before a11y.`
    );
  }

  const server = createServer((req, res) => {
    const file = resolveFile(req.url || '/');
    if (!file) {
      send(res, 404, 'Not found');
      return;
    }
    const type = MIME[extname(file).toLowerCase()] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': type });
    createReadStream(file).pipe(res);
  });

  return new Promise((resolvePromise, reject) => {
    server.once('error', reject);
    server.listen(PORT, HOST, () => resolvePromise(server));
  });
}

function summarize(violations) {
  return violations.map((v) => ({
    id: v.id,
    impact: v.impact,
    help: v.help,
    helpUrl: v.helpUrl,
    nodes: v.nodes.length,
    targets: v.nodes.slice(0, 5).map((n) => n.target.join(' ')),
  }));
}

async function scanRoute(page, path) {
  const url = `http://${HOST}:${PORT}${path}`;
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60_000 });
  // Give lazy routes a beat to paint
  await page.waitForTimeout(300);

  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();

  const blocking = results.violations.filter(
    (v) => v.impact === 'serious' || v.impact === 'critical'
  );
  const other = results.violations.filter(
    (v) => v.impact !== 'serious' && v.impact !== 'critical'
  );

  return { path, blocking, other, passes: results.passes.length };
}

async function main() {
  const server = await startServer();
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-gpu'],
  });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
  });
  const page = await context.newPage();

  const reports = [];
  try {
    for (const path of ROUTES) {
      process.stdout.write(`a11y: scanning ${path} … `);
      const report = await scanRoute(page, path);
      reports.push(report);
      console.log(
        `${report.blocking.length} serious/critical, ${report.other.length} other, ${report.passes} passes`
      );
    }
  } finally {
    await context.close();
    await browser.close();
    await new Promise((r) => server.close(r));
  }

  const blocking = reports.flatMap((r) =>
    r.blocking.map((v) => ({ route: r.path, ...summarize([v])[0] }))
  );
  const other = reports.flatMap((r) =>
    r.other.map((v) => ({ route: r.path, ...summarize([v])[0] }))
  );

  if (other.length) {
    console.log('\nNon-blocking violations (informational):');
    console.log(JSON.stringify(other, null, 2));
  }

  if (blocking.length) {
    console.error('\nSerious/critical axe violations:');
    console.error(JSON.stringify(blocking, null, 2));
    process.exitCode = 1;
    return;
  }

  console.log('\nNo serious/critical axe violations on scanned routes.');
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
