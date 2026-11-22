set shell := ["bash", ".just-shell"]
set positional-arguments

# Show available recipes.
default:
    @just --list

# Refresh the local Tabula table and open it in a browser.
tabula-view:
    @tabula view . --open

# Install Git hooks after reviewing existing configuration.
hooks:
    @python3 .husky-setup.py

# Run declared fast checks; accepts project-check options such as --json.
lint *args:
    @project-check fast "$@"

# Run the declared full gate; accepts project-check options such as --json.
verify *args:
    @project-check full "$@"

# Format supported repository files using pinned tools.
fmt:
    @python3 .project-format.py write web

# Check formatting without changing files.
fmt-check:
    @python3 .project-format.py check web

# Alias for the declared fast gate.
check *args:
    @project-check fast "$@"

# Install exactly the reviewed package lock, without lifecycle scripts.
setup:
    @bun install --frozen-lockfile --ignore-scripts --libc "*"

# Run the project's development server.
start *args:
    @bun run dev "$@"

# Run the project's test script.
test *args:
    @bun run test "$@"

# Build the project.
build *args:
    @bun run build "$@"

# Check TypeScript using the project's tsconfig.json.
typecheck *args:
    @bun run tsc --noEmit "$@"
