import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import {
  AlertCircleIcon,
  AlertTriangleIcon,
  CheckCircleIcon,
  InfoIcon,
} from "../icons/index.js";
import { clamp, cx } from "../utils.js";

export type FeedbackTone = "info" | "success" | "warning" | "error";

const toneIcon: Record<FeedbackTone, ReactNode> = {
  info: <InfoIcon size={18} style={{ color: "var(--pui-info)" }} />,
  success: (
    <CheckCircleIcon size={18} style={{ color: "var(--pui-success)" }} />
  ),
  warning: (
    <AlertTriangleIcon size={18} style={{ color: "var(--pui-warning)" }} />
  ),
  error: <AlertCircleIcon size={18} style={{ color: "var(--pui-error)" }} />,
};

export interface AlertProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  tone?: FeedbackTone;
  title?: ReactNode;
  /** Optional trailing action, e.g. a Button. */
  action?: ReactNode;
}

/** Inline message that stays on the page. Errors and warnings are announced. */
export function Alert({
  tone = "info",
  title,
  action,
  className,
  children,
  ...rest
}: AlertProps) {
  const urgent = tone === "error" || tone === "warning";
  return (
    <div
      role={urgent ? "alert" : "status"}
      data-tone={tone}
      className={cx("pui-alert", className)}
      {...rest}
    >
      {toneIcon[tone]}
      <div className="pui-alert__body">
        {title ? <span className="pui-alert__title">{title} </span> : null}
        {children ? <span className="pui-alert__text">{children}</span> : null}
      </div>
      {action}
    </div>
  );
}

export interface ToastProps {
  tone?: FeedbackTone;
  children: ReactNode;
  /** Optional action, e.g. `<Button variant="ghost" size="sm">Undo</Button>`. */
  action?: ReactNode;
}

/** A transient confirmation. Render inside ToastRegion so it is announced. */
export function Toast({ tone = "success", children, action }: ToastProps) {
  return (
    <div className="pui-toast">
      {toneIcon[tone]}
      <span className="pui-toast__text">{children}</span>
      {action}
    </div>
  );
}

/** Fixed live region for toasts in the lower right corner. */
export function ToastRegion({ children }: { children?: ReactNode }) {
  return (
    <section
      aria-live="polite"
      aria-label="Notifications"
      className="pui-toast-region"
    >
      {children}
    </section>
  );
}

export interface ProgressProps {
  label: string;
  /** 0–100. */
  value: number;
  /** Text on the right of the label row, e.g. "18 / 31 pts". Omit to hide the row. */
  valueText?: string;
  showLabel?: boolean;
  thin?: boolean;
}

export function Progress({
  label,
  value,
  valueText,
  showLabel = true,
  thin = false,
}: ProgressProps) {
  const pct = clamp(value, 0, 100);
  return (
    <div className="pui-progress">
      {showLabel ? (
        <div className="pui-progress__head">
          <span>{label}</span>
          {valueText ? (
            <span className="pui-mono" style={{ color: "var(--pui-muted)" }}>
              {valueText}
            </span>
          ) : null}
        </div>
      ) : null}
      <div
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pct)}
        aria-valuetext={valueText}
        className={cx(
          "pui-progress__track",
          thin && "pui-progress__track--thin",
        )}
      >
        <div className="pui-progress__bar" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export interface SkeletonProps {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  radius?: CSSProperties["borderRadius"];
}

/** Loading placeholder. Mark the loading region with aria-busy where you use it. */
export function Skeleton({
  width = "100%",
  height = 10,
  radius,
}: SkeletonProps) {
  return (
    <span
      aria-hidden="true"
      className="pui-skeleton"
      style={{ width, height, borderRadius: radius }}
    />
  );
}

export interface EmptyStateProps {
  title: ReactNode;
  children?: ReactNode;
  action?: ReactNode;
  icon?: ReactNode;
  centered?: boolean;
}

export function EmptyState({
  title,
  children,
  action,
  icon,
  centered = false,
}: EmptyStateProps) {
  return (
    <div className={cx("pui-empty", centered && "pui-empty--center")}>
      {icon}
      <span className="pui-empty__title">{title}</span>
      {children ? <span className="pui-empty__text">{children}</span> : null}
      {action}
    </div>
  );
}
