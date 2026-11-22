import { describe, expect, mock, test } from "bun:test";
import { fireEvent, render, screen } from "@testing-library/react";
import {
  Button,
  PortableProvider,
  SegmentedControl,
  Switch,
  Tabs,
  TextField,
} from "../src";

describe("PortableProvider", () => {
  test("scopes the requested mode", () => {
    render(
      <PortableProvider mode="light" data-testid="root">
        content
      </PortableProvider>,
    );
    const root = screen.getByTestId("root");
    expect(root.getAttribute("data-pui-theme")).toBe("light");
    expect(root.className).toContain("pui-root");
  });
});

describe("Button", () => {
  test("loading blocks clicks and announces busy state", () => {
    const onClick = mock(() => {});
    render(
      <Button loading onClick={onClick}>
        Save
      </Button>,
    );
    const button = screen.getByRole("button", { name: "Save" });
    expect(button.getAttribute("aria-busy")).toBe("true");
    expect((button as HTMLButtonElement).disabled).toBe(true);
    fireEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });
});

describe("Switch", () => {
  test("toggles aria-checked and reports the new value", () => {
    const onChange = mock((_: boolean) => {});
    render(<Switch label="Notify me" onCheckedChange={onChange} />);
    const control = screen.getByRole("switch", { name: /Notify me/ });
    expect(control.getAttribute("aria-checked")).toBe("false");
    fireEvent.click(control);
    expect(control.getAttribute("aria-checked")).toBe("true");
    expect(onChange).toHaveBeenCalledWith(true);
  });
});

describe("Tabs", () => {
  const items = [
    { id: "overview", label: "Overview", content: "Summary panel" },
    { id: "activity", label: "Activity", count: 12, content: "Activity feed" },
    { id: "subtasks", label: "Subtasks", content: "Checklist" },
  ];

  test("clicking a tab shows its panel", () => {
    render(<Tabs label="Issue" items={items} />);
    fireEvent.click(screen.getByRole("tab", { name: /Activity/ }));
    expect(screen.getByRole("tabpanel").textContent).toBe("Activity feed");
  });

  test("arrow keys, Home and End move selection", () => {
    render(<Tabs label="Issue" items={items} />);
    const first = screen.getByRole("tab", { name: "Overview" });
    fireEvent.keyDown(first, { key: "ArrowLeft" });
    expect(screen.getByRole("tabpanel").textContent).toBe("Checklist");
    fireEvent.keyDown(first, { key: "Home" });
    expect(screen.getByRole("tabpanel").textContent).toBe("Summary panel");
    fireEvent.keyDown(first, { key: "ArrowRight" });
    expect(screen.getByRole("tabpanel").textContent).toBe("Activity feed");
  });
});

describe("SegmentedControl", () => {
  test("arrow keys change the checked option", () => {
    const onChange = mock((_: string) => {});
    render(
      <SegmentedControl
        label="View"
        options={[
          { value: "board", label: "Board" },
          { value: "list", label: "List" },
        ]}
        onValueChange={onChange}
      />,
    );
    const board = screen.getByRole("radio", { name: "Board" });
    expect(board.getAttribute("aria-checked")).toBe("true");
    fireEvent.keyDown(board, { key: "ArrowRight" });
    expect(onChange).toHaveBeenCalledWith("list");
    expect(
      screen.getByRole("radio", { name: "List" }).getAttribute("aria-checked"),
    ).toBe("true");
  });
});

describe("TextField", () => {
  test("an error marks the input invalid and describes it", () => {
    render(<TextField label="Story points" error="Use a whole number." />);
    const input = screen.getByLabelText("Story points");
    expect(input.getAttribute("aria-invalid")).toBe("true");
    const describedBy = input.getAttribute("aria-describedby");
    expect(describedBy).toBeTruthy();
    expect(document.getElementById(describedBy ?? "")?.textContent).toBe(
      "Use a whole number.",
    );
  });
});
