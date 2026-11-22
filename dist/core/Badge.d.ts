import type { HTMLAttributes, ReactNode } from "react";
export type Tone = "neutral" | "info" | "accent" | "success" | "warning" | "error";
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    tone?: Tone;
    size?: "sm" | "md";
    icon?: ReactNode;
}
export declare function Badge({ tone, size, icon, className, children, ...rest }: BadgeProps): import("react").JSX.Element;
export type IssueStatus = "backlog" | "todo" | "in-progress" | "in-review" | "done" | "blocked";
interface StatusMeta {
    label: string;
    tone: Tone;
    color: string;
}
export declare const statusMeta: Record<IssueStatus, StatusMeta>;
/** Workflow status glyph: the fill grows with progress, so status never relies on color alone. */
export declare function StatusIcon({ status, size, }: {
    status: IssueStatus;
    size?: number;
}): import("react").JSX.Element;
export declare function StatusBadge({ status, size, className, }: {
    status: IssueStatus;
    size?: "sm" | "md";
    className?: string;
}): import("react").JSX.Element;
export type Priority = "urgent" | "high" | "medium" | "low";
/** Rising bars encode priority; urgent is a filled alert square. Always has an accessible name. */
export declare function PriorityIcon({ priority, size, }: {
    priority: Priority;
    size?: number;
}): import("react").JSX.Element;
export type IssueType = "story" | "bug" | "task";
export declare function IssueTypeIcon({ type, size, }: {
    type: IssueType;
    size?: number;
}): import("react").JSX.Element;
export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
    /** Swatch color, e.g. `cssVar.series[0]`. */
    color?: string;
    size?: "sm" | "md";
}
export declare function Tag({ color, size, className, children, ...rest }: TagProps): import("react").JSX.Element;
export declare function Kbd({ children }: {
    children: ReactNode;
}): import("react").JSX.Element;
export interface CounterProps extends HTMLAttributes<HTMLSpanElement> {
    tone?: "neutral" | "accent" | "warning";
}
export declare function Counter({ tone, className, children, ...rest }: CounterProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=Badge.d.ts.map