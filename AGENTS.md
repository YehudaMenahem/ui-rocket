# Agent guide — Rocket UI

## Stack & workflow

See always-on Cursor rules:

- `.cursor/rules/stack.mdc` — React/Vite/Sass/pnpm monorepo constraints
- `.cursor/rules/workflow.mdc` — commits, branches, verification
- `.cursor/rules/ui-quality.mdc` — **interaction, playground, parity, a11y, and visual QA standards** (must follow on every UI change)

## Working rules for agents

- Several agents may work on this repo at the same time. Always work in your own git worktree, on a new branch from up-to-date main. Never switch branches, stash, or commit in the main folder.
- Only touch files the task needs. If you need to change a shared file outside the task's scope (package.json, lockfile, CI, global styles, layout), stop and ask first.
- Don't add dependencies without asking.
- One logical change per PR, one self-contained commit per step. Conventional Commits.
- Before opening a PR: lint, typecheck and build must pass.
- Everything in the repo is in English.

## UI quality summary (mandatory)

1. Pointer cursor + hover/active/`focus-visible` on every interactive control; short reduced-motion-safe micro-interactions.
2. No dead links/buttons — fix overlays/`z-index`/`pointer-events`; create pages instead of leaving stubs.
3. Playground controls must bind to real props and visibly update the preview; expose only supported props.
4. When refactoring, preserve original props/variants unless the PR documents an intentional drop.
5. Copy actions need success feedback + `aria-live`.
6. Color playgrounds: presets + free picker via CSS variables.
7. Centered, width-stable, on-brand loaders.
8. Fix illustration layering; remove stray strokes.
9. Screenshot light/dark + desktop/mobile for touched pages; exercise controls before finishing.
10. a11y: labels, roles, keyboard, contrast, live regions.
11. **No fabricated metrics** — test counts, gzip sizes, stars, component counts, etc. must be generated from the repo/API (`metrics.generated.ts`) or removed; never hard-code numbers that can drift.
