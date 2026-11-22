import { type ButtonHTMLAttributes, type KeyboardEvent, type ReactElement, type ReactNode } from "react";
export interface MenuProps {
    label: string;
    children: ReactNode;
    className?: string;
}
/** A menu surface. Arrow keys, Home and End move focus between items. */
export declare function Menu({ label, children, className }: MenuProps): import("react").JSX.Element;
export interface MenuItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    shortcut?: string;
    danger?: boolean;
}
export declare function MenuItem({ shortcut, danger, className, children, type, ...rest }: MenuItemProps): import("react").JSX.Element;
export declare function MenuSeparator(): import("react").JSX.Element;
export interface TooltipProps {
    content: ReactNode;
    shortcut?: string;
    placement?: "top" | "bottom";
    /** Render one focusable trigger and spread the props onto it. */
    children: (trigger: TooltipTriggerProps) => ReactElement;
}
export interface TooltipTriggerProps {
    "aria-describedby": string;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onFocus: () => void;
    onBlur: () => void;
    onKeyDown: (event: KeyboardEvent) => void;
}
/** Shows on hover and keyboard focus, hides on Escape. */
export declare function Tooltip({ content, shortcut, placement, children, }: TooltipProps): import("react").JSX.Element;
//# sourceMappingURL=Menu.d.ts.map