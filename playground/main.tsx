import { type ReactNode, StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Alert,
  AppShell,
  Avatar,
  AvatarStack,
  BarChart,
  BellIcon,
  BoardIcon,
  Button,
  ChannelList,
  ChartCard,
  ChartIcon,
  ChatDivider,
  ChatEvent,
  CheckIcon,
  Checkbox,
  Composer,
  cssVar,
  EmptyState,
  EyeIcon,
  FlameIcon,
  Heatmap,
  HomeIcon,
  IconButton,
  type IssueStatus,
  KanbanBoard,
  type KanbanIssue,
  Legend,
  LineChart,
  MapControls,
  MapIcon,
  type MapPlace,
  MapPopoverCard,
  MapScale,
  MapView,
  Menu,
  MenuItem,
  MenuSeparator,
  Message,
  MessageList,
  MoreIcon,
  NavItem,
  NavSection,
  PeopleList,
  PlaceholderBasemap,
  PlaceList,
  PlusIcon,
  PortableProvider,
  PresenceLabel,
  PriorityIcon,
  Progress,
  Radio,
  SearchInput,
  SegmentedControl,
  SelectField,
  Sidebar,
  Skeleton,
  StackedBar,
  StatTile,
  StatusBadge,
  Switch,
  Tabs,
  Tag,
  TextAreaField,
  TextField,
  Toast,
  Tooltip,
  TopBar,
} from "../src";

const people = {
  mara: { name: "Mara Okafor", tint: cssVar.accent },
  jonas: { name: "Jonas Weber", tint: cssVar.info },
  ana: { name: "Ana Kovač", tint: cssVar.warning },
  lin: { name: "Lin Sato", tint: cssVar.success },
};

const label = {
  frontend: { name: "frontend", color: cssVar.series[0] },
  charts: { name: "charts", color: cssVar.series[1] },
  chat: { name: "chat", color: cssVar.series[2] },
  maps: { name: "maps", color: cssVar.series[3] },
};

const columns = [
  { id: "backlog", title: "Backlog", status: "backlog" as const },
  { id: "todo", title: "To do", status: "todo" as const },
  {
    id: "doing",
    title: "In progress",
    status: "in-progress" as const,
    wipLimit: 3,
  },
  {
    id: "review",
    title: "In review",
    status: "in-review" as const,
    wipLimit: 3,
  },
  { id: "done", title: "Done", status: "done" as const },
];

const initialIssues: KanbanIssue[] = [
  {
    id: "118",
    key: "BRD-118",
    title: "Export board as CSV",
    columnId: "backlog",
    type: "task",
    priority: "low",
    points: 2,
    assignee: people.jonas,
  },
  {
    id: "139",
    key: "BRD-139",
    title: "Cluster map pins above 500 markers",
    columnId: "backlog",
    type: "story",
    priority: "medium",
    points: 8,
    assignee: people.ana,
    labels: [label.maps],
  },
  {
    id: "131",
    key: "BRD-131",
    title: "Thread replies in the channel sidebar",
    columnId: "todo",
    type: "story",
    priority: "high",
    points: 5,
    assignee: people.mara,
    labels: [label.chat],
    comments: 3,
  },
  {
    id: "133",
    key: "BRD-133",
    title: "Burndown counts weekends as work days",
    columnId: "todo",
    type: "bug",
    priority: "high",
    points: 3,
    assignee: people.lin,
    labels: [label.charts],
    comments: 2,
  },
  {
    id: "142",
    key: "BRD-142",
    title: "Drag cards between columns",
    columnId: "doing",
    type: "story",
    priority: "urgent",
    points: 8,
    assignee: people.mara,
    labels: [label.frontend],
    comments: 6,
    subtasks: { done: 3, total: 5 },
  },
  {
    id: "127",
    key: "BRD-127",
    title: "Presence dots go stale after sleep",
    columnId: "doing",
    type: "bug",
    priority: "high",
    points: 3,
    assignee: people.ana,
    labels: [label.chat],
    comments: 2,
  },
  {
    id: "140",
    key: "BRD-140",
    title: "Velocity chart: committed vs. done",
    columnId: "doing",
    type: "story",
    priority: "medium",
    points: 5,
    assignee: people.lin,
    labels: [label.charts],
    subtasks: { done: 1, total: 3 },
  },
  {
    id: "124",
    key: "BRD-124",
    title: "Mention autocomplete in the composer",
    columnId: "review",
    type: "story",
    priority: "medium",
    points: 3,
    assignee: people.jonas,
    labels: [label.chat],
    comments: 4,
  },
  {
    id: "112",
    key: "BRD-112",
    title: "Portable theme tokens",
    columnId: "done",
    type: "task",
    priority: "medium",
    points: 3,
    assignee: people.ana,
    labels: [label.frontend],
  },
];

const places: MapPlace[] = [
  {
    id: "hq",
    kind: "office",
    x: 0.46,
    y: 0.56,
    name: "Harbor HQ",
    short: "HQ",
    subtitle: "Harbor District · 3 floors",
  },
  {
    id: "studio",
    kind: "office",
    x: 0.26,
    y: 0.26,
    name: "Riverside Studio",
    short: "Studio",
    subtitle: "Design & research",
  },
  {
    id: "west",
    kind: "people",
    x: 0.14,
    y: 0.7,
    name: "Westgate",
    short: "Westgate",
    subtitle: "Remote teammates",
    count: 18,
  },
  {
    id: "east",
    kind: "people",
    x: 0.82,
    y: 0.64,
    name: "Eastfield",
    short: "Eastfield",
    subtitle: "Remote teammates",
    count: 9,
  },
  {
    id: "dc2",
    kind: "incident",
    x: 0.76,
    y: 0.34,
    name: "DC-2 cooling alarm",
    short: "DC-2",
    subtitle: "Open · started 14 min ago",
  },
  {
    id: "fiber",
    kind: "incident",
    tone: "warning",
    x: 0.2,
    y: 0.48,
    name: "Fiber cut, Westgate",
    short: "Fiber",
    subtitle: "Monitoring",
  },
];

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        scrollMarginTop: 16,
      }}
    >
      <h2
        id={`${id}-title`}
        style={{ margin: 0, fontSize: 20, lineHeight: "28px", fontWeight: 600 }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

const grid2 = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
  gap: 16,
} as const;
const panel = {
  padding: 20,
  display: "flex",
  flexDirection: "column",
  gap: 16,
} as const;
const row = {
  display: "flex",
  flexWrap: "wrap",
  gap: 12,
  alignItems: "center",
} as const;

function ComponentsDemo() {
  return (
    <Section id="components" title="Core components">
      <div className="pui-panel" style={panel}>
        <div style={row}>
          <Button variant="primary" icon={<PlusIcon />}>
            Create issue
          </Button>
          <Button>Share board</Button>
          <Button variant="ghost">Cancel</Button>
          <Button variant="danger">Delete board</Button>
          <IconButton label="More actions" outlined>
            <MoreIcon />
          </IconButton>
          <Button variant="primary" loading>
            Saving…
          </Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>
      <div style={grid2}>
        <div className="pui-panel" style={panel}>
          <TextField
            label="Issue title"
            placeholder="Short, specific summary"
            hint="Shown on the card and in search."
          />
          <SelectField
            label="Assignee"
            options={[
              { value: "", label: "Unassigned" },
              ...Object.values(people).map((p) => ({
                value: p.name,
                label: p.name,
              })),
            ]}
          />
          <TextField
            label="Story points"
            defaultValue="13.5"
            error="Use a whole number from the scale."
          />
          <TextAreaField
            label="Description"
            placeholder="What needs to happen, and how will we know it's done?"
          />
        </div>
        <div className="pui-panel" style={panel}>
          <Switch
            label="Notify me on mentions"
            description="Chat, comments and issue updates"
            defaultChecked
          />
          <div style={row}>
            <Checkbox label="Show subtasks" defaultChecked />
            <Radio name="group" label="Group by status" defaultChecked />
            <Radio name="group" label="Group by assignee" />
          </div>
          <SegmentedControl
            label="View"
            options={[
              { value: "board", label: "Board" },
              { value: "list", label: "List" },
              { value: "timeline", label: "Timeline" },
            ]}
          />
          <Tabs
            label="Issue sections"
            items={[
              {
                id: "overview",
                label: "Overview",
                content: "Summary, assignee, dates and linked threads.",
              },
              {
                id: "activity",
                label: "Activity",
                count: 12,
                content: "Every status change, comment and commit.",
              },
              {
                id: "subtasks",
                label: "Subtasks",
                count: 3,
                content: "Checklist items that roll up into progress.",
              },
            ]}
          />
        </div>
        <div className="pui-panel" style={panel}>
          <div style={row}>
            {(
              [
                "backlog",
                "todo",
                "in-progress",
                "in-review",
                "done",
                "blocked",
              ] as IssueStatus[]
            ).map((s) => (
              <StatusBadge key={s} status={s} />
            ))}
          </div>
          <div style={row}>
            {(["urgent", "high", "medium", "low"] as const).map((p) => (
              <span
                key={p}
                style={{
                  display: "inline-flex",
                  gap: 6,
                  alignItems: "center",
                  fontSize: 12,
                }}
              >
                <PriorityIcon priority={p} />
                {p}
              </span>
            ))}
          </div>
          <div style={row}>
            {Object.values(label).map((l) => (
              <Tag key={l.name} color={l.color}>
                {l.name}
              </Tag>
            ))}
          </div>
          <div style={row}>
            <Avatar {...people.mara} size={36} presence="online" />
            <Avatar {...people.jonas} size={36} presence="away" />
            <Avatar {...people.ana} size={36} presence="dnd" />
            <Avatar size={36} />
            <AvatarStack
              people={Object.values(people).concat(Object.values(people))}
            />
            <PresenceLabel status="online" />
          </div>
        </div>
        <div className="pui-panel" style={panel}>
          <Toast
            action={
              <Button variant="ghost" size="sm">
                Undo
              </Button>
            }
          >
            BRD-142 moved to Done
          </Toast>
          <Alert tone="warning" title="In progress is over its WIP limit.">
            Finish or reassign a card before pulling new work.
          </Alert>
          <Progress
            label="Sprint progress"
            value={58}
            valueText="18 / 31 pts"
          />
          <div
            aria-busy="true"
            style={{ display: "flex", gap: 12, alignItems: "center" }}
          >
            <Skeleton width={36} height={36} radius={999} />
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <Skeleton width="60%" />
              <Skeleton width="85%" />
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 16,
              alignItems: "start",
            }}
          >
            <Menu label="Card actions">
              <MenuItem shortcut="I">Assign to me</MenuItem>
              <MenuItem shortcut="M">Move to…</MenuItem>
              <MenuItem shortcut="⌘L">Copy link</MenuItem>
              <MenuSeparator />
              <MenuItem danger>Archive issue</MenuItem>
            </Menu>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                alignItems: "flex-start",
              }}
            >
              <Tooltip
                content="Filter by assignee"
                shortcut="F A"
                placement="bottom"
              >
                {(trigger) => <Button {...trigger}>Hover or focus me</Button>}
              </Tooltip>
              <EmptyState
                title="No issues match these filters"
                action={<Button size="sm">Clear filters</Button>}
              >
                Clear a filter or create the first issue for this view.
              </EmptyState>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function BoardDemo() {
  const [issues, setIssues] = useState(initialIssues);
  const [mine, setMine] = useState(false);
  const visible = mine
    ? issues.filter((i) => i.assignee?.name === people.mara.name)
    : issues;
  return (
    <Section id="board" title="Kanban board">
      <div style={row}>
        <SearchInput
          label="Search this board"
          placeholder="Search this board"
          style={{ width: 240 }}
        />
        <Switch
          size="sm"
          label="Only my issues"
          checked={mine}
          onCheckedChange={setMine}
        />
      </div>
      <KanbanBoard
        columns={columns}
        issues={visible}
        defaultSelectedId="142"
        onMoveIssue={(id, to) =>
          setIssues((all) =>
            all.map((i) => (i.id === id ? { ...i, columnId: to } : i)),
          )
        }
        onAddIssue={() => {}}
      />
    </Section>
  );
}

const initialMessages = [
  {
    id: "1",
    author: people.lin,
    time: "09:12",
    text: "Velocity chart is up on Insights. We committed 31 points and are on track for 27.",
  },
  {
    id: "2",
    author: people.lin,
    time: "09:13",
    text: "The burndown still counts weekends as work days. Fix is BRD-133.",
    continued: true,
  },
];

function ChatDemo() {
  const [channel, setChannel] = useState("sprint-24");
  const [sent, setSent] = useState<Array<{ id: string; text: string }>>([]);
  const [approved, setApproved] = useState(true);
  return (
    <Section id="chat" title="Chatrooms">
      <div
        className="pui-panel"
        style={{
          display: "flex",
          flexWrap: "wrap",
          overflow: "hidden",
          padding: 0,
        }}
      >
        <div
          style={{
            flex: "1 1 220px",
            padding: "14px 10px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            borderRight: "1px solid var(--pui-line)",
          }}
        >
          <ChannelList
            heading="Channels"
            currentId={channel}
            onSelect={setChannel}
            channels={[
              { id: "general", name: "general" },
              { id: "sprint-24", name: "sprint-24", unread: true },
              { id: "incidents", name: "incidents", mentions: 2 },
            ]}
          />
          <PeopleList
            heading="Direct messages"
            people={[
              { id: "jonas", ...people.jonas, presence: "online" },
              { id: "ana", ...people.ana, presence: "away", note: "away" },
              { id: "lin", ...people.lin, presence: "dnd", note: "focus" },
            ]}
          />
        </div>
        <div
          style={{
            flex: "999 1 480px",
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            background: "var(--pui-bg)",
          }}
        >
          <MessageList label={`Messages in #${channel}`}>
            {channel === "sprint-24" ? (
              <>
                <ChatDivider label="Today" />
                {initialMessages.map((m) => (
                  <Message
                    key={m.id}
                    author={m.author}
                    time={m.time}
                    continued={m.continued}
                  >
                    {m.text}
                  </Message>
                ))}
                <ChatEvent time="09:40">
                  Board bot moved BRD-129 to In review
                </ChatEvent>
                <Message
                  author={people.mara}
                  time="10:02"
                  reactions={[
                    {
                      id: "ok",
                      icon: <CheckIcon size={12} />,
                      label: "Approve",
                      count: approved ? 4 : 3,
                      mine: approved,
                    },
                    {
                      id: "look",
                      icon: <EyeIcon size={12} />,
                      label: "Looking",
                      count: 2,
                    },
                  ]}
                  onToggleReaction={(id) =>
                    id === "ok" && setApproved(!approved)
                  }
                  thread={{
                    count: 3,
                    lastReply: "12 min ago",
                    participants: [people.jonas],
                  }}
                  attachment={
                    <div
                      className="pui-panel"
                      style={{
                        maxWidth: 440,
                        padding: 12,
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                        borderRadius: 8,
                      }}
                    >
                      <div style={row}>
                        <span
                          className="pui-mono"
                          style={{ fontSize: 11, color: "var(--pui-muted)" }}
                        >
                          BRD-142
                        </span>
                        <StatusBadge status="in-progress" size="sm" />
                      </div>
                      <span style={{ fontSize: 13, fontWeight: 600 }}>
                        Drag cards between columns
                      </span>
                      <Progress
                        label="Subtasks"
                        value={60}
                        showLabel={false}
                        thin
                      />
                    </div>
                  }
                >
                  Drag-and-drop is working behind the flag. Keyboard moves work
                  too.
                </Message>
                <ChatDivider label="New" variant="new" />
                <Message
                  author={people.ana}
                  time="10:31"
                  reactions={[
                    {
                      id: "on",
                      icon: <FlameIcon size={12} />,
                      label: "On it",
                      count: 1,
                    },
                  ]}
                >
                  Presence dots go stale after the laptop sleeps. Taking BRD-127
                  today.
                </Message>
                {sent.map((m, i) => (
                  <Message
                    key={m.id}
                    author={people.mara}
                    time="now"
                    continued={i > 0}
                  >
                    {m.text}
                  </Message>
                ))}
              </>
            ) : (
              <div style={{ padding: "0 20px" }}>
                <EmptyState title={`This is the start of #${channel}`}>
                  No messages yet. Post an update or link an issue with its key.
                </EmptyState>
              </div>
            )}
          </MessageList>
          <div style={{ padding: "0 20px 16px" }}>
            <Composer
              channelName={channel}
              onSend={(text) =>
                setSent((all) => [...all, { id: String(all.length), text }])
              }
              status={
                channel === "sprint-24" ? "Jonas Weber is typing…" : undefined
              }
              onLinkIssue={() => {}}
              onAttach={() => {}}
              onMention={() => {}}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

const burndownActual = [31, 31, 29, 27, 27, 22, 19, 17, 13, null, null];
const burndownIdeal = Array.from(
  { length: 11 },
  (_, i) => +(31 - 3.1 * i).toFixed(1),
);
const sprints = [
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
];
const committed = [28, 30, 26, 32, 30, 29, 31, 30, 33, 30, 32, 31];
const completed = [24, 27, 26, 25, 28, 29, 26, 30, 28, 29, 30, 27];

function ChartsDemo() {
  const [range, setRange] = useState<"6" | "12">("12");
  const [tables, setTables] = useState(false);
  const n = Number(range);
  return (
    <Section id="insights" title="Charts & insights">
      <div style={row}>
        <span style={{ fontSize: 13, color: "var(--pui-muted)", flex: 1 }}>
          Sample data for layout only.
        </span>
        <SegmentedControl
          label="Range"
          value={range}
          onValueChange={setRange}
          options={[
            { value: "6", label: "Last 6 sprints" },
            { value: "12", label: "Last 12 sprints" },
          ]}
        />
        <Switch
          size="sm"
          label="Data tables"
          checked={tables}
          onCheckedChange={setTables}
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
        }}
      >
        <StatTile
          label="Open issues"
          value={34}
          delta="+5"
          trend="up"
          comparison="vs. Sprint 23"
          spark={[22, 26, 25, 29, 31, 29, 34]}
        />
        <StatTile
          label="Median cycle time"
          value="3.2"
          unit="days"
          delta="−0.4 d"
          trend="down"
          comparison="vs. Sprint 23"
          spark={[4.1, 3.9, 4, 3.6, 3.7, 3.6, 3.2]}
        />
        <StatTile
          label="Throughput"
          value={22}
          unit="issues"
          delta="+3"
          trend="up"
          comparison="vs. Sprint 23"
          spark={[15, 17, 16, 19, 18, 19, 22]}
        />
        <StatTile
          label="Blocked"
          value={3}
          unit="issues"
          delta="−1"
          trend="down"
          comparison="vs. Sprint 23"
          spark={[2, 4, 5, 3, 4, 4, 3]}
        />
      </div>
      <div style={grid2}>
        <ChartCard
          title="Burndown · story points remaining"
          legend={
            <Legend
              items={[
                { name: "Remaining", color: cssVar.series[0], kind: "line" },
                { name: "Ideal", color: cssVar.muted, kind: "dashed" },
              ]}
            />
          }
        >
          <LineChart
            label="Burndown: 31 points at start, 13 remaining on day 8 of 10"
            labels={burndownIdeal.map((_, i) => `Day ${i}`)}
            tickLabels={burndownIdeal.map((_, i) =>
              i % 2 === 0 ? `D${i}` : "",
            )}
            series={[
              { id: "actual", name: "Remaining", values: burndownActual },
              {
                id: "ideal",
                name: "Ideal",
                values: burndownIdeal,
                color: cssVar.muted,
                dashed: true,
              },
            ]}
            max={35}
            marker={{ index: 8, label: "Today" }}
            showTable={tables}
          />
        </ChartCard>
        <ChartCard title="Issues by status">
          <StackedBar
            label="Issues by status"
            segments={[
              {
                id: "backlog",
                name: "Backlog",
                value: 12,
                color: cssVar.border,
              },
              { id: "todo", name: "To do", value: 9, color: cssVar.series[2] },
              {
                id: "doing",
                name: "In progress",
                value: 8,
                color: cssVar.series[0],
              },
              {
                id: "review",
                name: "In review",
                value: 5,
                color: cssVar.series[1],
              },
              { id: "done", name: "Done", value: 14, color: cssVar.series[3] },
            ]}
          />
        </ChartCard>
        <ChartCard
          title="Velocity · points per sprint"
          legend={
            <Legend
              items={[
                { name: "Committed", color: cssVar.series[0] },
                { name: "Completed", color: cssVar.series[1] },
              ]}
            />
          }
        >
          <BarChart
            label={`Velocity for the last ${n} sprints`}
            categories={sprints.slice(-n).map((s) => `Sprint ${s}`)}
            tickLabels={sprints.slice(-n).map((s) => `S${s}`)}
            series={[
              {
                id: "committed",
                name: "Committed",
                values: committed.slice(-n),
              },
              {
                id: "completed",
                name: "Completed",
                values: completed.slice(-n),
              },
            ]}
            max={40}
            footer={(i) =>
              `${Math.round(((completed.slice(-n)[i] ?? 0) / (committed.slice(-n)[i] ?? 1)) * 100)}% delivered`
            }
            showTable={tables}
          />
        </ChartCard>
        <ChartCard title="Workload · issues touched">
          <Heatmap
            label="Issues touched per person and day"
            rows={["Mara", "Jonas", "Ana", "Lin"]}
            columns={["Mon", "Tue", "Wed", "Thu", "Fri"]}
            values={[
              [4, 6, 7, 5, 2],
              [3, 3, 5, 6, 4],
              [1, 2, 4, 7, 6],
              [5, 4, 2, 3, 1],
            ]}
            unit="issues"
          />
        </ChartCard>
      </div>
    </Section>
  );
}

function MapDemo() {
  const [selected, setSelected] = useState<string | null>("dc2");
  return (
    <Section id="map" title="Maps">
      <div
        className="pui-panel"
        style={{
          display: "flex",
          flexWrap: "wrap",
          overflow: "hidden",
          padding: 0,
        }}
      >
        <div
          style={{
            flex: "1 1 280px",
            padding: 16,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            borderRight: "1px solid var(--pui-line)",
          }}
        >
          <SearchInput
            label="Search places"
            placeholder="Search sites and people"
          />
          <PlaceList
            places={places}
            selectedId={selected}
            onSelect={setSelected}
            meta={(p) => (p.count ? `${p.count} people` : "")}
          />
        </div>
        <div style={{ flex: "999 1 480px", minWidth: 0 }}>
          <MapView
            label="Sites, people and incidents"
            places={places}
            selectedId={selected}
            onSelect={setSelected}
            height={560}
            controls={<MapControls />}
            attribution={
              <>
                <MapScale label="1 km" />
                <span>Basemap: placeholder</span>
              </>
            }
            renderPopover={(place) => (
              <MapPopoverCard
                place={place}
                onClose={() => setSelected(null)}
                stats={
                  place.kind === "incident"
                    ? [
                        { label: "Severity", value: "SEV-2" },
                        { label: "Linked issue", value: "BRD-151" },
                      ]
                    : [
                        { label: "On site", value: place.count ?? 128 },
                        { label: "Open issues", value: 7 },
                      ]
                }
                actions={
                  <>
                    <Button size="sm" style={{ flex: 1 }}>
                      View
                    </Button>
                    <Button size="sm" variant="primary" style={{ flex: 1 }}>
                      Open channel
                    </Button>
                  </>
                }
              />
            )}
          >
            <PlaceholderBasemap />
          </MapView>
        </div>
      </div>
    </Section>
  );
}

function App() {
  const [mode, setMode] = useState<"dark" | "light">("dark");
  return (
    <PortableProvider mode={mode}>
      <AppShell
        topbar={
          <TopBar>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontWeight: 600,
              }}
            >
              <span
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 7,
                  display: "grid",
                  placeItems: "center",
                  background: "var(--pui-accent)",
                  color: "var(--pui-on-accent)",
                }}
              >
                <BoardIcon size={14} />
              </span>
              portable-ui
            </span>
            <SearchInput
              label="Search everything"
              placeholder="Search issues, people, channels"
              shortcut="⌘K"
              style={{ flex: "1 1 240px", maxWidth: 520, margin: "0 auto" }}
            />
            <SegmentedControl
              label="Theme"
              value={mode}
              onValueChange={setMode}
              options={[
                { value: "dark", label: "Dark" },
                { value: "light", label: "Light" },
              ]}
            />
            <IconButton label="Notifications">
              <BellIcon size={18} />
            </IconButton>
          </TopBar>
        }
        sidebar={
          <Sidebar label="Playground">
            <NavSection>
              <NavItem href="#components" icon={<HomeIcon />} current>
                Components
              </NavItem>
              <NavItem href="#board" icon={<BoardIcon />} badge={9}>
                Board
              </NavItem>
              <NavItem href="#chat" icon={<BellIcon />} badge={4}>
                Chat
              </NavItem>
              <NavItem href="#insights" icon={<ChartIcon />}>
                Insights
              </NavItem>
              <NavItem href="#map" icon={<MapIcon />}>
                Map
              </NavItem>
            </NavSection>
          </Sidebar>
        }
      >
        <h1
          style={{
            margin: 0,
            fontSize: 28,
            lineHeight: "36px",
            fontWeight: 600,
          }}
        >
          portable-ui
        </h1>
        <p style={{ margin: 0, color: "var(--pui-muted)", maxWidth: 720 }}>
          React components for work boards, chat, charts and maps, themed with
          the Portable palette.
        </p>
        <ComponentsDemo />
        <BoardDemo />
        <ChatDemo />
        <ChartsDemo />
        <MapDemo />
      </AppShell>
    </PortableProvider>
  );
}

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
