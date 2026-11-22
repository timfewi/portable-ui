# Project instructions

Read the repository's README and check manifest before changing code. Inspect
the working tree and preserve existing changes. Keep credentials, personal
data and generated runtime files outside version control.

Document setup and usage in a short README. Keep the source links in
`.tabula/ENTRY.md` current when project structure or behavior changes.
Run the checks that exercise the change and report which commands passed.

## Development

Declare development tools in `devenv.nix` and enter the Linux toolchain
with `devenv shell`. In Git, stage only reviewed source files when authorized.
Run `nix flake lock` and review the lock before running the Git-backed Nix
checks. Keep runtime data outside the source tree because `path:.` also copies
ignored files.

Run `just hooks` once per clone. Use `just fmt-check` for read-only formatting
and `just check` for the fast gate. The hook runs the same gate. Run
`just verify` when the full build workload is authorized. Wire the start,
test and build recipes to real commands and verify test discovery.

For dependency upgrades, verify the supported stable or LTS release and keep
exact pins and lockfiles together. Keep formatter ownership in
`.project-format.py`, with project-specific tools for unsupported file types.

Use Bun and the locked Biome and TypeScript versions. Run `just setup` before
formatting. Keep the package manifest and lock in sync. Configure the package
scripts for the framework and point `.visual-qa.config.json` at its dev server.
