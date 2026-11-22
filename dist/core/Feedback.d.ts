import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
export type FeedbackTone = "info" | "success" | "warning" | "error";
export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    tone?: FeedbackTone;
    title?: ReactNode;
    /** Optional trailing action, e.g. a Button. */
    action?: ReactNode;
}
/** Inline message that stays on the page. Errors and warnings are announced. */
export declare function Alert({ tone, title, action, className, children, ...rest }: AlertProps): import("react").JSX.Element;
export interface ToastProps {
    tone?: FeedbackTone;
    children: ReactNode;
    /** Optional action, e.g. `<Button variant="ghost" size="sm">Undo</Button>`. */
    action?: ReactNode;
}
/** A transient confirmation. Render inside ToastRegion so it is announced. */
export declare function Toast({ tone, children, action }: ToastProps): import("react").JSX.Element;
/** Fixed live region for toasts in the lower right corner. */
export declare function ToastRegion({ children }: {
    children?: ReactNode;
}): import("react").JSX.Element;
export interface ProgressProps {
    label: string;
    /** 0–100. */
    value: number;
    /** Text on the right of the label row, e.g. "18 / 31 pts". Omit to hide the row. */
    valueText?: string;
    showLabel?: boolean;
    thin?: boolean;
}
export declare function Progress({ label, value, valueText, showLabel, thin, }: ProgressProps): import("react").JSX.Element;
export interface SkeletonProps {
    width?: CSSProperties["width"];
    height?: CSSProperties["height"];
    radius?: CSSProperties["borderRadius"];
}
/** Loading placeholder. Mark the loading region with aria-busy where you use it. */
export declare function Skeleton({ width, height, radius, }: SkeletonProps): import("react").JSX.Element;
export interface EmptyStateProps {
    title: ReactNode;
    children?: ReactNode;
    action?: ReactNode;
    icon?: ReactNode;
    centered?: boolean;
}
export declare function EmptyState({ title, children, action, icon, centered, }: EmptyStateProps): import("react").JSX.Element;
//# sourceMappingURL=Feedback.d.ts.map