import { describe, expect, mock, test } from "bun:test";
import { fireEvent, render, screen } from "@testing-library/react";
import { useState } from "react";
import {
  Composer,
  KanbanBoard,
  type KanbanIssue,
  LineChart,
  MapView,
  niceTicks,
} from "../src";

const columns = [
  { id: "todo", title: "To do", status: "todo" as const },
  {
    id: "doing",
    title: "In progress",
    status: "in-progress" as const,
    wipLimit: 1,
  },
  { id: "done", title: "Done", status: "done" as const },
];

const issues: KanbanIssue[] = [
  { id: "1", key: "BRD-1", title: "Write tokens", columnId: "todo" },
  { id: "2", key: "BRD-2", title: "Build board", columnId: "doing" },
];

function StatefulBoard() {
  const [state, setState] = useState(issues);
  return (
    <KanbanBoard
      columns={columns}
      issues={state}
      onMoveIssue={(id, to) =>
        setState((all) =>
          all.map((i) => (i.id === id ? { ...i, columnId: to } : i)),
        )
      }
    />
  );
}

describe("KanbanBoard", () => {
  test("selecting a card reveals move buttons that move it", () => {
    render(<StatefulBoard />);
    fireEvent.click(screen.getByRole("button", { name: "Write tokens" }));
    fireEvent.click(
      screen.getByRole("button", { name: "Move BRD-1 to In progress" }),
    );
    const doing = screen.getByRole("region", { name: "In progress" });
    expect(doing.textContent).toContain("Write tokens");
  });

  test("warns when a column passes its WIP limit", () => {
    render(<StatefulBoard />);
    expect(screen.queryByText("Over WIP limit")).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Write tokens" }));
    fireEvent.click(
      screen.getByRole("button", { name: "Move BRD-1 to In progress" }),
    );
    expect(screen.getByText("Over WIP limit")).toBeTruthy();
  });

  test("empty columns show the empty text", () => {
    render(
      <KanbanBoard columns={columns} issues={[]} emptyText="Nothing here" />,
    );
    expect(screen.getAllByText("Nothing here")).toHaveLength(3);
  });
});

describe("Composer", () => {
  test("sends trimmed text and clears the draft", () => {
    const onSend = mock((_: string) => {});
    render(<Composer channelName="sprint-24" onSend={onSend} />);
    const input = screen.getByLabelText(
      "Message #sprint-24",
    ) as HTMLInputElement;
    const send = screen.getByRole("button", {
      name: /Send/,
    }) as HTMLButtonElement;
    expect(send.disabled).toBe(true);
    fireEvent.change(input, { target: { value: "  ship it  " } });
    fireEvent.submit(input.closest("form") as HTMLFormElement);
    expect(onSend).toHaveBeenCalledWith("ship it");
    expect(input.value).toBe("");
  });
});

describe("charts", () => {
  test("niceTicks rounds up to readable steps", () => {
    expect(niceTicks(31)).toEqual([0, 10, 20, 30, 40]);
    expect(niceTicks(0)).toEqual([0]);
  });

  test("LineChart table view lists every value, with gaps as dashes", () => {
    render(
      <LineChart
        label="Burndown"
        labels={["D0", "D1", "D2"]}
        series={[{ id: "a", name: "Remaining", values: [10, 6, null] }]}
        showTable
      />,
    );
    const rows = screen.getAllByRole("row").map((r) => r.textContent);
    expect(rows).toEqual(["Remaining", "D010", "D16", "D2—"]);
  });
});

const mapPlaces = [
  {
    id: "hq",
    kind: "office" as const,
    x: 0.5,
    y: 0.5,
    name: "Harbor HQ",
    short: "HQ",
  },
];

function MapHarness() {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <MapView
      label="Sites"
      places={mapPlaces}
      selectedId={selected}
      onSelect={setSelected}
      renderPopover={(place) => <span>Details for {place.name}</span>}
    />
  );
}

describe("MapView", () => {
  test("markers select places and the popover renders for the selection", () => {
    render(<MapHarness />);
    const marker = screen.getByRole("button", { name: "Office: Harbor HQ" });
    fireEvent.click(marker);
    expect(marker.getAttribute("aria-pressed")).toBe("true");
    expect(screen.getByRole("dialog", { name: "Harbor HQ" }).textContent).toBe(
      "Details for Harbor HQ",
    );
  });
});
