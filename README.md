# portable-ui

React components for team work tools: Kanban boards, chat rooms, charts and
maps. The palette comes from the **Portable** desktop theme: black and neutral
grey surfaces, muted semantic colors and a lavender accent. Dark is the
reference mode; light is a separately chosen palette, not an inversion.

- **Core:** buttons, fields, switch, checkbox, radio, segmented control, tabs,
  badges, tags, avatars with presence, alerts, toasts, progress, skeletons,
  menus, tooltips, empty states.
- **Board:** a controlled Kanban board with issue cards, WIP limits, keyboard
  moves and drag-and-drop.
- **Chat:** channel and people lists, messages with reactions, threads,
  attachments, day dividers and a composer.
- **Charts:** stat tiles with sparklines, line, grouped bar, stacked bar and
  heatmap charts with hover details, keyboard focus and table views.
- **Maps:** shape-coded markers, a place list, popovers and controls, on any
  basemap.
- **Shell:** top bar, sidebar and main layout that wraps on small screens.

Plain CSS with `--pui-*` variables and prefixed `pui-` classes; no CSS-in-JS
and no runtime dependencies besides React 18.3+ or 19.

## Install

The package is not on the npm registry yet. Install it from GitHub; the
built files in `dist/` are part of the repository, so no build runs on your
side.

```sh
bun add github:timfewi/portable-ui
# or
npm install github:timfewi/portable-ui
```

Pin a commit for reproducible installs, e.g.
`github:timfewi/portable-ui#<commit>`.

## Usage

Import the stylesheet once and wrap your app in `PortableProvider`:

```tsx
import "portable-ui/styles.css";
import { Button, PlusIcon, PortableProvider } from "portable-ui";

export function App() {
  return (
    <PortableProvider mode="dark">
      <Button variant="primary" icon={<PlusIcon />}>
        Create issue
      </Button>
    </PortableProvider>
  );
}
```

`mode` accepts `"dark"`, `"light"` or `"system"`. Nest another provider to
render one region in the other mode.

### Kanban board

The board is controlled: it reports moves, and you update your data.

```tsx
import { useState } from "react";
import { KanbanBoard, type KanbanIssue } from "portable-ui";

const columns = [
  { id: "todo", title: "To do", status: "todo" },
  { id: "doing", title: "In progress", status: "in-progress", wipLimit: 3 },
  { id: "done", title: "Done", status: "done" },
] as const;

function Board({ initial }: { initial: KanbanIssue[] }) {
  const [issues, setIssues] = useState(initial);
  return (
    <KanbanBoard
      columns={[...columns]}
      issues={issues}
      onMoveIssue={(id, to) =>
        setIssues((all) =>
          all.map((issue) =>
            issue.id === id ? { ...issue, columnId: to } : issue,
          ),
        )
      }
    />
  );
}
```

Selecting a card shows buttons that move it to the neighbouring columns, so
every move also works from the keyboard. Cards can be dragged between columns
too. A column over its `wipLimit` shows a warning but never blocks the move.

### Chat

```tsx
import { ChatDivider, Composer, Message, MessageList } from "portable-ui";

export function Room({ post }: { post: (text: string) => void }) {
  return (
    <>
      <MessageList label="Messages in #sprint-24">
        <ChatDivider label="Today" />
        <Message author={{ name: "Lin Sato" }} time="09:12">
          Velocity chart is up.
        </Message>
      </MessageList>
      <Composer channelName="sprint-24" onSend={post} />
    </>
  );
}
```

### Charts

```tsx
import { ChartCard, Legend, LineChart, cssVar } from "portable-ui";

<ChartCard
  title="Burndown"
  legend={
    <Legend
      items={[{ name: "Remaining", color: cssVar.series[0], kind: "line" }]}
    />
  }
>
  <LineChart
    label="Story points remaining per day"
    labels={["Day 0", "Day 1", "Day 2"]}
    series={[{ id: "remaining", name: "Remaining", values: [31, 29, 27] }]}
    showTable={false}
  />
</ChartCard>;
```

Series colors are applied in a fixed order (`--pui-series-1` to `-4`). They
keep Portable's hues with more chroma, so neighbouring series stay apart for
readers with color-vision deficiencies. Status colors stay reserved for
alerts. Every chart has a text alternative: focusable data points with
labels, and `showTable` on line and bar charts.

### Maps

`MapView` positions markers by fractions of its frame (`x`, `y` from 0 to 1),
so it works with any map library: render your basemap as the child and
convert latitude and longitude to `x` and `y` with that library's projection.
`PlaceholderBasemap` draws a fictional city for prototypes.

```tsx
import {
  MapControls,
  MapPopoverCard,
  MapView,
  PlaceholderBasemap,
} from "portable-ui";

<MapView
  label="Sites and incidents"
  places={places}
  selectedId={selected}
  onSelect={setSelected}
  controls={<MapControls onZoomIn={zoomIn} onZoomOut={zoomOut} />}
  renderPopover={(place) => (
    <MapPopoverCard place={place} onClose={() => setSelected(null)} />
  )}
>
  <PlaceholderBasemap />
</MapView>;
```

## Theming

All colors are CSS variables on the provider element:

| Variable               | Dark      | Light     |
| ---------------------- | --------- | --------- |
| `--pui-bg`             | `#000000` | `#f4f4f4` |
| `--pui-surface`        | `#161616` | `#e8e8e8` |
| `--pui-surface-raised` | `#1e1e1e` | `#dfdfdf` |
| `--pui-fg`             | `#e8e8e8` | `#151515` |
| `--pui-muted`          | `#8a8a8a` | `#4b4b4b` |
| `--pui-accent`         | `#9482ad` | `#6200a3` |
| `--pui-success`        | `#80977d` | `#005020` |
| `--pui-warning`        | `#b59c6c` | `#783000` |
| `--pui-error`          | `#b96f7d` | `#94082c` |
| `--pui-info`           | `#71979a` | `#004090` |

The full set, including hover, selected, border and terminal colors, is in
[`src/portable-ui.css`](src/portable-ui.css). The same values are exported as
`palette` for JavaScript, and `cssVar` gives the variable references.

Override any variable on a wrapper to adjust the theme:

```css
.my-app [data-pui-theme="dark"] {
  --pui-accent: #a58bd4;
}
```

Interface text uses Inter when available and otherwise uses the system's
proportional font. Code uses JetBrains Mono, CaskaydiaCove Nerd Font Mono or
the system monospace font. Applications can load their preferred fonts.

## Accessibility

- Visible 2px focus ring on every control.
- Status, priority, presence and map markers use shape as well as color.
- Tabs, segmented controls and menus support arrow keys, Home and End.
- Icon-only buttons require a `label`.
- Motion collapses to instant changes under `prefers-reduced-motion`.

## Development

The toolchain is Bun: package management, the dev server, tests and the build.

```sh
bun install
bun run dev        # playground at http://localhost:5173
bun test           # unit tests with happy-dom
bun run typecheck
bun run build      # dist/index.js, type declarations and dist/portable-ui.css
```

`dist/` is committed. After changing `src/`, run `bun run build` and commit the
rebuilt files; the `build-dist` check fails while they are out of date.

The playground in [`playground/`](playground/) shows every component.
`just check` runs the full fast gate: formatting, Biome lint, Nix lint,
typecheck, tests and the dist freshness check. Development tools are declared
in `devenv.nix`;
enter them with `devenv shell`.

## License

[MIT](LICENSE)
