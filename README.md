# UI Rocket 🚀

A React component library with a 90s DOS-game aesthetic, built with TypeScript and modern tooling.

## Project Structure

This is a **pnpm workspace monorepo** with the following structure:

```
ui-rocket/
├── packages/
│   └── rocket/           # Component library (published as @ui-rocket/rocket)
│       ├── src/          # Component source code
│       ├── dist/         # Built library output
│       └── package.json
├── apps/
│   └── site/             # Showcase website
│       ├── src/          # Site source code
│       ├── build/        # Production build output
│       └── package.json
├── package.json          # Root workspace config
└── pnpm-workspace.yaml   # pnpm workspace definition
```

## Tech Stack

### Core
- **React 19** - Latest React with modern hooks
- **TypeScript** - Strict mode, full type safety
- **pnpm** - Fast, efficient package manager with workspace support
- **Vite** - Lightning-fast build tool

### Library (`packages/rocket`)
- Built with **Vite library mode**
- ESM + CJS outputs with TypeScript declarations
- Proper `exports` map for tree-shaking
- SCSS for styling

### Site (`apps/site`)
- **React Router v7** - Modern routing
- Consumes library via workspace protocol
- Demonstrates all components

### Tooling
- **ESLint 9** - Flat config with typescript-eslint, react-hooks, jsx-a11y
- **Prettier** - Code formatting
- **Vitest** - Fast unit testing with Testing Library
- **GitHub Actions** - CI pipeline (typecheck, lint, test, build)

## Getting Started

### Prerequisites
- Node.js >= 18
- pnpm >= 8

### Installation

```bash
pnpm install
```

### Development

```bash
# Start the showcase site (runs on http://localhost:3000)
pnpm dev

# Build the library in watch mode
cd packages/rocket && pnpm dev
```

### Scripts

All scripts can be run from the root using pnpm's workspace commands:

```bash
# Development
pnpm dev              # Start showcase site
pnpm start            # Alias for dev

# Build
pnpm build            # Build all packages

# Quality checks
pnpm typecheck        # TypeScript type checking
pnpm lint             # ESLint
pnpm test             # Run all tests
pnpm format           # Format code with Prettier
pnpm format:check     # Check formatting

# Per-package commands
pnpm --filter @ui-rocket/rocket build
pnpm --filter @ui-rocket/site dev
```

## Components

The library includes the following components:

- **Button** - Solid, outline, and text variants with loading states
- **InputField** - Text inputs with validation
- **Checkbox** - Multiple icon styles (check, heart, star)
- **RadioButton** - Single selection from options
- **ToggleButton** - Switch between states
- **SelectField** - Dropdown selection (mobile-friendly)
- **Textbox** - Multi-line text input
- **Tabs** - Organize content into separate views
- **Modal** - Dialog overlays
- **Toaster** - Temporary notifications
- **Form** - Form wrapper with validation
- **Icon** - Icon wrapper component
- **Img** - Image component

All components are fully typed with TypeScript and export their prop types.

## Architecture Decisions

### Monorepo Structure
- **Why**: Separates library from showcase while keeping them in sync
- Library can be published independently
- Site always tests against latest library code via workspace protocol

### TypeScript
- **Strict mode enabled** for maximum type safety
- Converted from prop-types to proper TypeScript interfaces
- All components fully typed with exported types

### State Management
- **Removed Redux** - Global state (modals, toasters) moved to React local state in App
- Simpler, less boilerplate, easier to understand
- Components remain pure and reusable

### React 19 + Router v7
- Latest React features and performance improvements
- Modern React Router with data APIs
- Removed deprecated patterns

### Build & Bundle
- Vite library mode produces optimized ESM + CJS
- Proper `sideEffects` configuration for tree-shaking
- TypeScript declarations generated with `vite-plugin-dts`

### Testing
- Vitest for speed and Vite integration
- Testing Library for component tests
- Tests focus on user behavior, not implementation

## Removed Dependencies

The following dependencies were removed during the refactor:
- **Redux + react-redux** - Replaced with React local state
- **axios** - Can use native `fetch` for API calls
- **faker** - Can be added back if needed for demos
- **emailjs-com** - Was used only in FormPage; can be re-added if form submission is needed
- **prop-types** - Replaced with TypeScript

## Next Steps

This PR establishes the foundation. Future PRs will:

1. **Design System** - Implement the "Segfault" 90s DOS aesthetic
   - 16-color EGA palette
   - Fat pixels, 4px grid, zero border radius
   - Beveled buttons, hard shadows
   - VT323/Pixelify Sans/IBM Plex Mono fonts

2. **Accessibility** - WAI-ARIA patterns, full keyboard support

3. **Storybook** - Component documentation and visual testing

4. **Testing & Quality** - axe a11y tests, bundle-size budget, Lighthouse CI

5. **Deployment** - Vercel for previews and production (replacing Firebase)

## Contributing

1. Create a feature branch off `main`
2. Make your changes
3. Ensure all checks pass: `pnpm typecheck && pnpm lint && pnpm test && pnpm build`
4. Open a PR against `main`
5. CI must pass before merging

## License

MIT
