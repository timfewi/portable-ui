import {
  type CSSProperties,
  type DragEvent,
  type ReactNode,
  useState,
} from "react";
import { Avatar } from "../core/Avatar.js";
import {
  Counter,
  IssueTypeIcon,
  type IssueStatus,
  type IssueType,
  type Priority,
  PriorityIcon,
  StatusIcon,
  Tag,
} from "../core/Badge.js";
import { Button, IconButton } from "../core/Button.js";
import { useControllable } from "../core/Selection.js";
import {
  AlertTriangleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CommentIcon,
  PlusIcon,
} from "../icons/index.js";

export interface KanbanColumnDef {
  id: string;
  title: string;
  /** Drives the column glyph. */
  status?: IssueStatus;
  /** Shows a warning and count pill when exceeded; moves are never blocked. */
  wipLimit?: number;
}

export interface KanbanPerson {
  name: string;
  src?: string;
  tint?: string;
}

export interface KanbanIssue {
  id: string;
  /** Human key, e.g. "BRD-142". */
  key: string;
  title: string;
  columnId: string;
  type?: IssueType;
  priority?: Priority;
  points?: number;
  assignee?: KanbanPerson;
  labels?: Array<{ name: string; color?: string }>;
  comments?: number;
  subtasks?: { done: number; total: number };
}

export interface IssueCardProps {
  issue: KanbanIssue;
  selected?: boolean;
  done?: boolean;
  onSelect?: () => void;
  /** Rendered under the card while it is selected, e.g. move buttons. */
  actions?: ReactNode;
  draggable?: boolean;
  onDragStart?: (event: DragEvent<HTMLElement>) => void;
  onDragEnd?: () => void;
  dragging?: boolean;
}

export function IssueCard({
  issue,
  selected = false,
  done = false,
  onSelect,
  actions,
  draggable,
  onDragStart,
  onDragEnd,
  dragging = false,
}: IssueCardProps) {
  const sub = issue.subtasks;
  return (
    <article
      className="pui-issue"
      data-selected={selected || undefined}
      data-done={done || undefined}
      data-dragging={dragging || undefined}
      draggable={draggable}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <div className="pui-issue__row">
        {issue.type ? <IssueTypeIcon type={issue.type} /> : null}
        <span className="pui-issue__key">{issue.key}</span>
        <span style={{ flex: 1 }} />
        {issue.priority ? <PriorityIcon priority={issue.priority} /> : null}
      </div>
      <button
        type="button"
        className="pui-issue__title"
        aria-pressed={onSelect ? selected : undefined}
        onClick={onSelect}
      >
        {issue.title}
      </button>
      {issue.labels && issue.labels.length > 0 ? (
        <div className="pui-issue__labels">
          {issue.labels.map((label) => (
            <Tag key={label.name} size="sm" color={label.color}>
              {label.name}
            </Tag>
          ))}
        </div>
      ) : null}
      {sub && sub.total > 0 ? (
        <div className="pui-issue__row" style={{ gap: 8 }}>
          <div
            role="progressbar"
            aria-label="Subtasks done"
            aria-valuemin={0}
            aria-valuemax={sub.total}
            aria-valuenow={sub.done}
            className="pui-progress__track pui-progress__track--thin"
            style={{ flex: 1 }}
          >
            <div
              className="pui-progress__bar"
              style={{ width: `${(sub.done / sub.total) * 100}%` }}
            />
          </div>
          <span className="pui-issue__key">
            {sub.done}/{sub.total}
          </span>
        </div>
      ) : null}
      <div className="pui-issue__meta">
        {issue.points !== undefined ? (
          <Counter title="Story points" style={{ color: "var(--pui-fg)" }}>
            {issue.points}
          </Counter>
        ) : null}
        {issue.comments ? (
          <span className="pui-issue__meta-item">
            <CommentIcon size={12} />
            <span>
              {issue.comments}
              <span className="pui-sr-only"> comments</span>
            </span>
          </span>
        ) : null}
        <span style={{ flex: 1 }} />
        <Avatar
          name={issue.assignee?.name}
          src={issue.assignee?.src}
          tint={issue.assignee?.tint}
          size={22}
        />
      </div>
      {selected && actions ? (
        <div className="pui-issue__actions">{actions}</div>
      ) : null}
    </article>
  );
}

export interface KanbanBoardProps {
  columns: KanbanColumnDef[];
  issues: KanbanIssue[];
  /** Called for button moves and drag-and-drop. The board does not reorder issues itself. */
  onMoveIssue?: (issueId: string, toColumnId: string) => void;
  selectedId?: string | null;
  defaultSelectedId?: string | null;
  onSelectIssue?: (issueId: string | null) => void;
  /** Shows a "+" in each header and an "Add issue" row. */
  onAddIssue?: (columnId: string) => void;
  /** Shown in a column with no issues. */
  emptyText?: ReactNode;
  /** Minimum column height in px. */
  columnMinHeight?: number;
  /** Column whose cards render as finished. Defaults to the "done" status column. */
  doneColumnId?: string;
}

/**
 * A controlled Kanban board. Select a card to reveal keyboard-accessible
 * "move" buttons; cards can also be dragged between columns.
 */
export function KanbanBoard({
  columns,
  issues,
  onMoveIssue,
  selectedId,
  defaultSelectedId = null,
  onSelectIssue,
  onAddIssue,
  emptyText = "No matching issues",
  columnMinHeight,
  doneColumnId,
}: KanbanBoardProps) {
  const [selected, setSelected] = useControllable(
    selectedId,
    defaultSelectedId,
    onSelectIssue,
  );
  const [dragId, setDragId] = useState<string | null>(null);
  const [dropColumn, setDropColumn] = useState<string | null>(null);
  const doneId =
    doneColumnId ?? columns.find((column) => column.status === "done")?.id;

  const style = {
    "--pui-board-columns": columns.length,
    "--pui-column-min-height":
      columnMinHeight !== undefined ? `${columnMinHeight}px` : undefined,
  } as CSSProperties;

  return (
    <div className="pui-board" style={style}>
      {columns.map((column, columnIndex) => {
        const columnIssues = issues.filter(
          (issue) => issue.columnId === column.id,
        );
        const over =
          column.wipLimit !== undefined &&
          columnIssues.length > column.wipLimit;
        const previous = columns[columnIndex - 1];
        const next = columns[columnIndex + 1];
        const headingId = `pui-column-${column.id}`;

        const onDragOver = (event: DragEvent<HTMLElement>) => {
          if (!dragId) return;
          event.preventDefault();
          event.dataTransfer.dropEffect = "move";
          if (dropColumn !== column.id) setDropColumn(column.id);
        };
        const onDrop = (event: DragEvent<HTMLElement>) => {
          event.preventDefault();
          const id = event.dataTransfer.getData("text/plain") || dragId;
          setDragId(null);
          setDropColumn(null);
          if (id) onMoveIssue?.(id, column.id);
        };

        return (
          <section
            key={column.id}
            aria-labelledby={headingId}
            className="pui-column"
            data-drop-target={dropColumn === column.id || undefined}
            onDragOver={onDragOver}
            onDragLeave={() => setDropColumn(null)}
            onDrop={onDrop}
          >
            <div className="pui-column__header">
              {column.status ? (
                <StatusIcon status={column.status} size={14} />
              ) : null}
              <h2 id={headingId} className="pui-column__title">
                {column.title}
              </h2>
              <Counter
                tone={over ? "warning" : "neutral"}
                aria-label={
                  column.wipLimit !== undefined
                    ? `${columnIssues.length} of ${column.wipLimit} work-in-progress limit`
                    : `${columnIssues.length} issues`
                }
              >
                {column.wipLimit !== undefined
                  ? `${columnIssues.length} / ${column.wipLimit}`
                  : columnIssues.length}
              </Counter>
              <span className="pui-column__spacer" />
              {onAddIssue ? (
                <IconButton
                  size="sm"
                  label={`Add issue to ${column.title}`}
                  onClick={() => onAddIssue(column.id)}
                  style={{ color: "var(--pui-muted)" }}
                >
                  <PlusIcon size={14} />
                </IconButton>
              ) : null}
            </div>
            {over ? (
              <div
                role="status"
                className="pui-badge pui-badge--sm"
                data-tone="warning"
                style={{ height: "auto", padding: "6px 8px" }}
              >
                <AlertTriangleIcon size={12} />
                Over WIP limit
              </div>
            ) : null}
            {columnIssues.map((issue) => {
              const isSelected = selected === issue.id;
              return (
                <IssueCard
                  key={issue.id}
                  issue={issue}
                  selected={isSelected}
                  done={column.id === doneId}
                  onSelect={() => setSelected(isSelected ? null : issue.id)}
                  draggable={Boolean(onMoveIssue)}
                  dragging={dragId === issue.id}
                  onDragStart={(event) => {
                    event.dataTransfer.setData("text/plain", issue.id);
                    event.dataTransfer.effectAllowed = "move";
                    setDragId(issue.id);
                  }}
                  onDragEnd={() => {
                    setDragId(null);
                    setDropColumn(null);
                  }}
                  actions={
                    onMoveIssue ? (
                      <>
                        <Button
                          size="sm"
                          disabled={!previous}
                          icon={<ChevronLeftIcon size={12} />}
                          aria-label={
                            previous
                              ? `Move ${issue.key} to ${previous.title}`
                              : undefined
                          }
                          onClick={() =>
                            previous && onMoveIssue(issue.id, previous.id)
                          }
                        >
                          {previous?.title ?? "Start"}
                        </Button>
                        <Button
                          size="sm"
                          variant="primary"
                          disabled={!next}
                          aria-label={
                            next
                              ? `Move ${issue.key} to ${next.title}`
                              : undefined
                          }
                          onClick={() => next && onMoveIssue(issue.id, next.id)}
                        >
                          {next?.title ?? "End"}
                          <ChevronRightIcon size={12} />
                        </Button>
                      </>
                    ) : null
                  }
                />
              );
            })}
            {columnIssues.length === 0 ? (
              <div
                className="pui-empty pui-empty--center"
                style={{ padding: "20px 12px" }}
              >
                <span className="pui-empty__text">{emptyText}</span>
              </div>
            ) : null}
            {onAddIssue ? (
              <button
                type="button"
                className="pui-column__add"
                onClick={() => onAddIssue(column.id)}
              >
                <PlusIcon size={12} />
                Add issue
              </button>
            ) : null}
          </section>
        );
      })}
    </div>
  );
}
