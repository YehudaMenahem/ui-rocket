export type NavGroup = {
  title: string;
  items: { id: string; label: string; path: string; badge?: string }[];
};

export const NAV_GROUPS: NavGroup[] = [
  {
    title: 'Getting started',
    items: [
      { id: 'intro', label: 'Introduction', path: '/' },
      { id: 'install', label: 'Installation', path: '/ButtonPage' },
      { id: 'theming', label: 'Theming', path: '/ButtonPage' },
      { id: 'dark', label: 'Dark mode', path: '/ButtonPage' },
    ],
  },
  {
    title: 'Inputs',
    items: [
      { id: 'button', label: 'Button', path: '/ButtonPage' },
      { id: 'input', label: 'Input', path: '/InputFieldPage' },
      { id: 'checkbox', label: 'Checkbox', path: '/CheckboxPage' },
      { id: 'radio', label: 'Radio', path: '/RadioPage' },
      { id: 'toggle', label: 'Toggle', path: '/ToggleButtonPage', badge: 'NEW' },
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
  id: string;
  name: string;
  path: string;
  group: string;
  oneLiner: string;
  gzip: string;
  tests: string;
  aria: string;
  prev?: { label: string; path: string };
  next?: { label: string; path: string };
  toc: { id: string; label: string; sub?: boolean }[];
};

export const COMPONENTS: ComponentMeta[] = [
  {
    id: 'button',
    name: 'Button',
    path: '/ButtonPage',
    group: 'Inputs',
    oneLiner:
      'Triggers an action or event — submitting a form, opening a dialog, or launching a rocket.',
    gzip: '1.1 kB gzip',
    tests: '24 tests',
    aria: 'WAI-ARIA Button',
    prev: { label: 'Dark mode', path: '/' },
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
    oneLiner: 'Collect short text from the user with labels, hints and validation.',
    gzip: '1.4 kB gzip',
    tests: '12 tests',
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
    gzip: '0.9 kB gzip',
    tests: '10 tests',
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
    gzip: '1.0 kB gzip',
    tests: '8 tests',
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
    gzip: '0.8 kB gzip',
    tests: '9 tests',
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
    gzip: '2.3 kB gzip',
    tests: '11 tests',
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
    gzip: '1.2 kB gzip',
    tests: '7 tests',
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
    gzip: '0.4 kB gzip',
    tests: '6 tests',
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
    oneLiner: 'Responsive images with thick navy frames and hard shadows.',
    gzip: '0.7 kB gzip',
    tests: '5 tests',
    aria: 'Requires alt text',
    prev: { label: 'Icon', path: '/IconPage' },
    next: { label: 'Tabs', path: '/TabsPage' },
    toc: [
      { id: 'usage', label: 'Usage' },
      { id: 'installation', label: 'Installation' },
      { id: 'examples', label: 'Examples' },
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
    gzip: '1.3 kB gzip',
    tests: '9 tests',
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
    gzip: '1.6 kB gzip',
    tests: '8 tests',
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
    gzip: '1.8 kB gzip',
    tests: '10 tests',
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
    gzip: '1.5 kB gzip',
    tests: '8 tests',
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

export function getComponentByPath(path: string) {
  return COMPONENTS.find((c) => c.path === path);
}

export const SEARCHABLE = COMPONENTS.map((c) => ({
  label: c.name,
  path: c.path,
  group: c.group,
  keywords: `${c.name} ${c.oneLiner}`.toLowerCase(),
}));
