import {
  type AnchorHTMLAttributes,
  Children,
  type ReactNode,
  useId,
} from "react";
import { cx } from "../utils.js";

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
export function AppShell({
  topbar,
  sidebar,
  children,
  className,
}: AppShellProps) {
  return (
    <div className={cx("pui-shell", className)}>
      {topbar}
      <div className="pui-shell__body">
        {sidebar}
        <main className="pui-main">{children}</main>
      </div>
    </div>
  );
}

export function TopBar({ children }: { children: ReactNode }) {
  return <header className="pui-topbar">{children}</header>;
}

export function Sidebar({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <nav aria-label={label} className="pui-sidebar">
      {children}
    </nav>
  );
}

export function NavSection({
  heading,
  children,
}: {
  heading?: string;
  /** NavItem elements; each is wrapped in a list item. */
  children: ReactNode;
}) {
  const id = useId();
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {heading ? (
        <span id={id} className="pui-overline" style={{ padding: "4px 10px" }}>
          {heading}
        </span>
      ) : null}
      <ul className="pui-nav-list" aria-labelledby={heading ? id : undefined}>
        {Children.map(children, (child) => (child ? <li>{child}</li> : null))}
      </ul>
    </div>
  );
}

export interface NavItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: ReactNode;
  current?: boolean;
  /** Trailing count or badge. */
  badge?: ReactNode;
}

export function NavItem({
  icon,
  current = false,
  badge,
  className,
  children,
  ...rest
}: NavItemProps) {
  return (
    <a
      aria-current={current ? "page" : undefined}
      className={cx("pui-nav-item", className)}
      {...rest}
    >
      {icon}
      <span className="pui-nav-item__label">{children}</span>
      {badge !== undefined ? (
        <span
          className="pui-mono"
          style={{ fontSize: 11, color: "var(--pui-muted)" }}
        >
          {badge}
        </span>
      ) : null}
    </a>
  );
}
