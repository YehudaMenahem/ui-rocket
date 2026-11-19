import { METRICS } from './metrics.generated';

export type NavGroup = {
  title: string;
  items: { id: string; label: string; path: string; badge?: string }[];
};

export const NAV_GROUPS: NavGroup[] = [
  {
    title: 'Getting started',
    items: [
      { id: 'intro', label: 'Introduction', path: '/' },
      { id: 'install', label: 'Installation', path: '/docs/installation' },
      { id: 'theming', label: 'Theming', path: '/theming' },
      { id: 'dark', label: 'Dark mode', path: '/docs/dark-mode' },
    ],
  },
  {
    title: 'Inputs',
    items: [
      { id: 'button', label: 'Button', path: '/ButtonPage' },
      { id: 'input', label: 'Input', path: '/InputFieldPage' },
      { id: 'checkbox', label: 'Checkbox', path: '/CheckboxPage' },
      { id: 'radio', label: 'Radio', path: '/RadioPage' },
      {
        id: 'toggle',
        label: 'Toggle',
        path: '/ToggleButtonPage',
        badge: 'NEW',
      },
      { id: 'select', label: 'Select', path: '/SelectFieldPage' },
      { id: 'textbox', label: 'Textbox', path: '/TextboxPage' },
    ],
  },
  {
    title: 'Media',
    items: [
      { id: 'icon', label: 'Icon', path: '/IconPage' },
      { id: 'img', label: 'Img', path: '/ImgPage' },
    ],
  },
  {
    title: 'Utilities',
    items: [
      { id: 'tabs', label: 'Tabs', path: '/TabsPage' },
      { id: 'form', label: 'Form', path: '/FormPage' },
      { id: 'modal', label: 'Modal', path: '/ModalPage' },
      { id: 'toaster', label: 'Toaster', path: '/ToasterPage' },
    ],
  },
];

export type ComponentMeta = {
  id: keyof typeof METRICS.perComponent;
  name: string;
  path: string;
  group: string;
  oneLiner: string;
  aria: string;
  prev?: { label: string; path: string };
  next?: { label: string; path: string };
  toc: { id: string; label: string; sub?: boolean }[];
};

function testsLabel(id: keyof typeof METRICS.perComponent) {
  return METRICS.perComponent[id].testsLabel;
}

export const COMPONENTS: ComponentMeta[] = [
  {
    id: 'button',
    name: 'Button',
    path: '/ButtonPage',
    group: 'Inputs',
    oneLiner:
      'Triggers an action or event — submitting a form, opening a dialog, or launching a rocket.',
    aria: 'WAI-ARIA Button',
    prev: { label: 'Dark mode', path: '/docs/dark-mode' },
    next: { label: 'Input', path: '/InputFieldPage' },
    toc: [
      { id: 'usage', label: 'Usage' },
      { id: 'installation', label: 'Installation' },
      { id: 'examples', label: 'Examples' },
      { id: 'variants', label: 'Variants', sub: true },
      { id: 'sizes', label: 'Sizes', sub: true },
      { id: 'icons', label: 'Icons & loading', sub: true },
      { id: 'props', label: 'Props' },
      { id: 'accessibility', label: 'Accessibility' },
    ],
  },
  {
    id: 'input',
    name: 'Input',
    path: '/InputFieldPage',
    group: 'Inputs',
    oneLiner:
      'Collect short text from the user with labels, hints and validation.',
    aria: 'WAI-ARIA Textbox',
    prev: { label: 'Button', path: '/ButtonPage' },
    next: { label: 'Checkbox', path: '/CheckboxPage' },
    toc: [
      { id: 'usage', label: 'Usage' },
      { id: 'installation', label: 'Installation' },
      { id: 'examples', label: 'Examples' },
      { id: 'props', label: 'Props' },
      { id: 'accessibility', label: 'Accessibility' },
    ],
  },
  {
    id: 'checkbox',
    name: 'Checkbox',
    path: '/CheckboxPage',
    group: 'Inputs',
    oneLiner: 'Binary choices for lists, forms and confirmation states.',
    aria: 'WAI-ARIA Checkbox',
    prev: { label: 'Input', path: '/InputFieldPage' },
    next: { label: 'Radio', path: '/RadioPage' },
    toc: [
      { id: 'usage', label: 'Usage' },
      { id: 'installation', label: 'Installation' },
      { id: 'examples', label: 'Examples' },
      { id: 'props', label: 'Props' },
      { id: 'accessibility', label: 'Accessibility' },
    ],
  },
  {
    id: 'radio',
    name: 'Radio',
    path: '/RadioPage',
    group: 'Inputs',
    oneLiner: 'Pick exactly one option from a small set.',
    aria: 'WAI-ARIA Radio Group',
    prev: { label: 'Checkbox', path: '/CheckboxPage' },
    next: { label: 'Toggle', path: '/ToggleButtonPage' },
    toc: [
      { id: 'usage', label: 'Usage' },
      { id: 'installation', label: 'Installation' },
      { id: 'examples', label: 'Examples' },
      { id: 'props', label: 'Props' },
      { id: 'accessibility', label: 'Accessibility' },
    ],
  },
  {
    id: 'toggle',
    name: 'Toggle',
    path: '/ToggleButtonPage',
    group: 'Inputs',
    oneLiner: 'Instant on/off control for settings and thrusters.',
    aria: 'WAI-ARIA Switch',
    prev: { label: 'Radio', path: '/RadioPage' },
    next: { label: 'Select', path: '/SelectFieldPage' },
    toc: [
      { id: 'usage', label: 'Usage' },
      { id: 'installation', label: 'Installation' },
      { id: 'examples', label: 'Examples' },
      { id: 'props', label: 'Props' },
      { id: 'accessibility', label: 'Accessibility' },
    ],
  },
  {
    id: 'select',
    name: 'Select',
    path: '/SelectFieldPage',
    group: 'Inputs',
    oneLiner: 'Choose from a longer list without crowding the layout.',
    aria: 'WAI-ARIA Listbox',
    prev: { label: 'Toggle', path: '/ToggleButtonPage' },
    next: { label: 'Textbox', path: '/TextboxPage' },
    toc: [
      { id: 'usage', label: 'Usage' },
      { id: 'installation', label: 'Installation' },
      { id: 'examples', label: 'Examples' },
      { id: 'props', label: 'Props' },
      { id: 'accessibility', label: 'Accessibility' },
    ],
  },
  {
    id: 'textbox',
    name: 'Textbox',
    path: '/TextboxPage',
    group: 'Inputs',
    oneLiner: 'Multi-line text for notes, manifests and mission logs.',
    aria: 'WAI-ARIA Textbox',
    prev: { label: 'Select', path: '/SelectFieldPage' },
    next: { label: 'Icon', path: '/IconPage' },
    toc: [
      { id: 'usage', label: 'Usage' },
      { id: 'installation', label: 'Installation' },
      { id: 'examples', label: 'Examples' },
      { id: 'props', label: 'Props' },
      { id: 'accessibility', label: 'Accessibility' },
    ],
  },
  {
    id: 'icon',
    name: 'Icon',
    path: '/IconPage',
    group: 'Media',
    oneLiner: 'Small stroke icons that share the Retro Launch outline weight.',
    aria: 'Decorative or labelled',
    prev: { label: 'Textbox', path: '/TextboxPage' },
    next: { label: 'Img', path: '/ImgPage' },
    toc: [
      { id: 'usage', label: 'Usage' },
      { id: 'installation', label: 'Installation' },
      { id: 'examples', label: 'Examples' },
      { id: 'props', label: 'Props' },
      { id: 'accessibility', label: 'Accessibility' },
    ],
  },
  {
    id: 'img',
    name: 'Img',
    path: '/ImgPage',
    group: 'Media',
    oneLiner:
      'Responsive retro game screenshots with picture/srcset, navy frames, and hard shadows.',
    aria: 'Meaningful alt or empty for decorative',
    prev: { label: 'Icon', path: '/IconPage' },
    next: { label: 'Tabs', path: '/TabsPage' },
    toc: [
      { id: 'usage', label: 'Usage' },
      { id: 'installation', label: 'Installation' },
      { id: 'examples', label: 'Examples' },
      { id: 'responsive', label: 'Responsive' },
      { id: 'aspect-ratios', label: 'Aspect ratios' },
      { id: 'lazy-loading', label: 'Lazy loading' },
      { id: 'fallback', label: 'Fallback' },
      { id: 'props', label: 'Props' },
      { id: 'accessibility', label: 'Accessibility' },
    ],
  },
  {
    id: 'tabs',
    name: 'Tabs',
    path: '/TabsPage',
    group: 'Utilities',
    oneLiner: 'Switch between related panels without leaving the page.',
    aria: 'WAI-ARIA Tabs',
    prev: { label: 'Img', path: '/ImgPage' },
    next: { label: 'Form', path: '/FormPage' },
    toc: [
      { id: 'usage', label: 'Usage' },
      { id: 'installation', label: 'Installation' },
      { id: 'examples', label: 'Examples' },
      { id: 'props', label: 'Props' },
      { id: 'accessibility', label: 'Accessibility' },
    ],
  },
  {
    id: 'form',
    name: 'Form',
    path: '/FormPage',
    group: 'Utilities',
    oneLiner: 'Compose labelled fields into a coherent launch checklist.',
    aria: 'Native form semantics',
    prev: { label: 'Tabs', path: '/TabsPage' },
    next: { label: 'Modal', path: '/ModalPage' },
    toc: [
      { id: 'usage', label: 'Usage' },
      { id: 'installation', label: 'Installation' },
      { id: 'examples', label: 'Examples' },
      { id: 'props', label: 'Props' },
      { id: 'accessibility', label: 'Accessibility' },
    ],
  },
  {
    id: 'modal',
    name: 'Modal',
    path: '/ModalPage',
    group: 'Utilities',
    oneLiner: 'Focused overlays for confirmations and pre-flight checks.',
    aria: 'WAI-ARIA Dialog',
    prev: { label: 'Form', path: '/FormPage' },
    next: { label: 'Toaster', path: '/ToasterPage' },
    toc: [
      { id: 'usage', label: 'Usage' },
      { id: 'installation', label: 'Installation' },
      { id: 'examples', label: 'Examples' },
      { id: 'props', label: 'Props' },
      { id: 'accessibility', label: 'Accessibility' },
    ],
  },
  {
    id: 'toaster',
    name: 'Toaster',
    path: '/ToasterPage',
    group: 'Utilities',
    oneLiner: 'Transient status messages that stay out of the way.',
    aria: 'role=status',
    prev: { label: 'Modal', path: '/ModalPage' },
    next: { label: 'Button', path: '/ButtonPage' },
    toc: [
      { id: 'usage', label: 'Usage' },
      { id: 'installation', label: 'Installation' },
      { id: 'examples', label: 'Examples' },
      { id: 'props', label: 'Props' },
      { id: 'accessibility', label: 'Accessibility' },
    ],
  },
];

/** Real Vitest count for a component id (from generated metrics). */
export function componentTestsLabel(id: ComponentMeta['id']) {
  return testsLabel(id);
}

export function getComponentByPath(path: string) {
  return COMPONENTS.find((c) => c.path === path);
}

export const SEARCHABLE = [
  ...COMPONENTS.map((c) => ({
    label: c.name,
    path: c.path,
    group: c.group,
    keywords: `${c.name} ${c.oneLiner}`.toLowerCase(),
  })),
  {
    label: 'Installation',
    path: '/docs/installation',
    group: 'Docs',
    keywords: 'install pnpm npm yarn',
  },
  {
    label: 'Theming',
    path: '/theming',
    group: 'Docs',
    keywords: 'theme tokens css variables',
  },
  {
    label: 'Dark mode',
    path: '/docs/dark-mode',
    group: 'Docs',
    keywords: 'dark theme',
  },
  {
    label: 'Components',
    path: '/components',
    group: 'Docs',
    keywords: 'index catalog',
  },
];
