import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { cx } from "../utils.js";

export type Tone =
  | "neutral"
  | "info"
  | "accent"
  | "success"
  | "warning"
  | "error";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
  size?: "sm" | "md";
  icon?: ReactNode;
}

export function Badge({
  tone = "neutral",
  size = "md",
  icon,
  className,
  children,
  ...rest
}: BadgeProps) {
  return (
    <span
      data-tone={tone === "neutral" ? undefined : tone}
      className={cx("pui-badge", size === "sm" && "pui-badge--sm", className)}
      {...rest}
    >
      {icon}
      {children}
    </span>
  );
}

export type IssueStatus =
  | "backlog"
  | "todo"
  | "in-progress"
  | "in-review"
  | "done"
  | "blocked";

interface StatusMeta {
  label: string;
  tone: Tone;
  color: string;
}

export const statusMeta: Record<IssueStatus, StatusMeta> = {
  backlog: { label: "Backlog", tone: "neutral", color: "var(--pui-muted)" },
  todo: { label: "To do", tone: "neutral", color: "var(--pui-fg)" },
  "in-progress": {
    label: "In progress",
    tone: "info",
    color: "var(--pui-info)",
  },
  "in-review": {
    label: "In review",
    tone: "accent",
    color: "var(--pui-accent)",
  },
  done: { label: "Done", tone: "success", color: "var(--pui-success)" },
  blocked: { label: "Blocked", tone: "error", color: "var(--pui-error)" },
};

/** Workflow status glyph: the fill grows with progress, so status never relies on color alone. */
export function StatusIcon({
  status,
  size = 12,
}: {
  status: IssueStatus;
  size?: number;
}) {
  const color = statusMeta[status].color;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      aria-hidden="true"
      style={{ color, flex: "none" }}
    >
      {status === "done" ? (
        <>
          <circle cx="6" cy="6" r="5" fill="currentColor" />
          <path
            d="m3.8 6.1 1.5 1.5 3-3"
            fill="none"
            stroke="var(--pui-bg)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </>
      ) : (
        <>
          <circle
            cx="6"
            cy="6"
            r="4.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray={status === "backlog" ? "2 2" : undefined}
          />
          {status === "in-progress" ? (
            <path d="M6 1.5a4.5 4.5 0 0 1 0 9z" fill="currentColor" />
          ) : null}
          {status === "in-review" ? (
            <path d="M6 1.5a4.5 4.5 0 1 1-4.5 4.5H6z" fill="currentColor" />
          ) : null}
          {status === "blocked" ? (
            <path d="M3 9 9 3" stroke="currentColor" strokeWidth="1.5" />
          ) : null}
        </>
      )}
    </svg>
  );
}

export function StatusBadge({
  status,
  size = "md",
  className,
}: {
  status: IssueStatus;
  size?: "sm" | "md";
  className?: string;
}) {
  const meta = statusMeta[status];
  return (
    <Badge
      tone={meta.tone}
      size={size}
      className={className}
      icon={<StatusIcon status={status} />}
    >
      {meta.label}
    </Badge>
  );
}

export type Priority = "urgent" | "high" | "medium" | "low";

/** Rising bars encode priority; urgent is a filled alert square. Always has an accessible name. */
export function PriorityIcon({
  priority,
  size = 14,
}: {
  priority: Priority;
  size?: number;
}) {
  const label = `Priority: ${priority}`;
  if (priority === "urgent") {
    return (
      <svg width={size} height={size} viewBox="0 0 14 14" role="img">
        <title>{label}</title>
        <rect
          x="1"
          y="1"
          width="12"
          height="12"
          rx="3"
          fill="var(--pui-error)"
        />
        <path
          d="M7 4v4M7 10v.01"
          stroke="var(--pui-bg)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  const level = { low: 1, medium: 2, high: 3 }[priority];
  const fill = (n: number) =>
    level >= n ? "var(--pui-fg)" : "var(--pui-surface-selected)";
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" role="img">
      <title>{label}</title>
      <rect x="1" y="8" width="3" height="5" rx="1" fill={fill(1)} />
      <rect x="5.5" y="5" width="3" height="8" rx="1" fill={fill(2)} />
      <rect x="10" y="2" width="3" height="11" rx="1" fill={fill(3)} />
    </svg>
  );
}

export type IssueType = "story" | "bug" | "task";

export function IssueTypeIcon({
  type,
  size = 14,
}: {
  type: IssueType;
  size?: number;
}) {
  const name = { story: "Story", bug: "Bug", task: "Task" }[type];
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" role="img">
      <title>{name}</title>
      {type === "story" ? (
        <path
          d="M3 1.5h8v11L7 10l-4 2.5z"
          fill="none"
          stroke="var(--pui-accent)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      ) : null}
      {type === "bug" ? (
        <>
          <rect
            x="1"
            y="1"
            width="12"
            height="12"
            rx="3"
            fill="none"
            stroke="var(--pui-error)"
            strokeWidth="1.5"
          />
          <circle cx="7" cy="7" r="2.2" fill="var(--pui-error)" />
        </>
      ) : null}
      {type === "task" ? (
        <>
          <rect
            x="1"
            y="1"
            width="12"
            height="12"
            rx="3"
            fill="none"
            stroke="var(--pui-info)"
            strokeWidth="1.5"
          />
          <path
            d="m4.3 7.2 1.8 1.8 3.6-4"
            fill="none"
            stroke="var(--pui-info)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </>
      ) : null}
    </svg>
  );
}

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  /** Swatch color, e.g. `cssVar.series[0]`. */
  color?: string;
  size?: "sm" | "md";
}

export function Tag({
  color,
  size = "md",
  className,
  children,
  ...rest
}: TagProps) {
  return (
    <span
      className={cx("pui-tag", size === "sm" && "pui-tag--sm", className)}
      {...rest}
    >
      {color ? (
        <span
          className="pui-swatch"
          style={{ background: color } as CSSProperties}
        />
      ) : null}
      {children}
    </span>
  );
}

export function Kbd({ children }: { children: ReactNode }) {
  return <kbd className="pui-kbd">{children}</kbd>;
}

export interface CounterProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: "neutral" | "accent" | "warning";
}

export function Counter({
  tone = "neutral",
  className,
  children,
  ...rest
}: CounterProps) {
  return (
    <span
      className={cx(
        "pui-counter",
        tone !== "neutral" && `pui-counter--${tone}`,
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
