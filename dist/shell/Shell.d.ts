import { type AnchorHTMLAttributes, type ReactNode } from "react";
export interface AppShellProps {
    topbar?: ReactNode;
    sidebar?: ReactNode;
    children: ReactNode;
    className?: string;
}
/**
 * Top bar, sidebar and main region. The row wraps, so the sidebar stacks
 * above the content on narrow screens instead of squeezing it.
 */
export declare function AppShell({ topbar, sidebar, children, className, }: AppShellProps): import("react").JSX.Element;
export declare function TopBar({ children }: {
    children: ReactNode;
}): import("react").JSX.Element;
export declare function Sidebar({ label, children, }: {
    label: string;
    children: ReactNode;
}): import("react").JSX.Element;
export declare function NavSection({ heading, children, }: {
    heading?: string;
    /** NavItem elements; each is wrapped in a list item. */
    children: ReactNode;
}): import("react").JSX.Element;
export interface NavItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    icon?: ReactNode;
    current?: boolean;
    /** Trailing count or badge. */
    badge?: ReactNode;
}
export declare function NavItem({ icon, current, badge, className, children, ...rest }: NavItemProps): import("react").JSX.Element;
//# sourceMappingURL=Shell.d.ts.map