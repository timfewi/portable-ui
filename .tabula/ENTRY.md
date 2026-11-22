# Project context

portable-ui is a React component library for team work tools (Kanban boards,
chat rooms, charts, maps), themed with the Portable palette from the dotfiles
repository's `themes/portable.json`. Bun is the whole toolchain: package
manager, playground dev server, test runner and bundler. The library ships an
ESM bundle, TypeScript declarations and one plain CSS file; React is a peer
dependency.

## Source entrypoints

- [Public API](../src/index.ts) lists every exported component, type and token.
- [Stylesheet](../src/portable-ui.css) holds the `--pui-*` tokens for both modes and all `pui-` classes.
- [Palette in TypeScript](../src/theme/tokens.ts) exports the same values as `palette` and `cssVar`.
- [Tokens test](../test/tokens.test.ts) keeps the stylesheet and the TypeScript palette in sync.
- [Theme provider](../src/theme/ThemeProvider.tsx) sets `data-pui-theme`; `system` follows the OS setting.
- [Core controls](../src/core/Selection.tsx) share `useControllable` for controlled or uncontrolled state.
- [Kanban](../src/kanban/Kanban.tsx) reports moves through `onMoveIssue` and never mutates issues.
- [Chat](../src/chat/Chat.tsx) provides channel lists, messages and the composer.
- [Charts](../src/charts/Charts.tsx) use labelled buttons as hover targets so values reach keyboards and screen readers.
- [Maps](../src/map/Map.tsx) place markers by frame fractions, independent of any map library.
- [Shell](../src/shell/Shell.tsx) wraps the sidebar above content on narrow screens.
- [Build](../scripts/build.ts) bundles with `Bun.build`, emits declarations with `tsc` and copies the CSS.
- [Dist check](../scripts/check-dist.ts) rebuilds the committed `dist/` and fails when it differs from Git, because GitHub installs use it unbuilt.
- [Playground](../playground/main.tsx) shows every component; `bun run dev` serves it on port 5173.
- [Checks](../.project-checks.json) run format, lint, Nix lint, typecheck, tests and the dist freshness check in the fast gate.
- [Toolchain](../devenv.nix) and [recipes](../Justfile) declare the development environment.

## Design rules

Chart series colors are derived from Portable's hues with more chroma; they
are not part of the theme file. Status, priority, presence and map markers use
shape as well as color. Interactive surfaces are real buttons, links or
inputs.

## Local table

Run `just tabula-view` with a Tabula version that supports `view` to regenerate
and open `.tabula/index.html` in a browser. Generated HTML and receipts stay
outside Git.
