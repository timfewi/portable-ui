import {
  type ButtonHTMLAttributes,
  type KeyboardEvent,
  type ReactElement,
  type ReactNode,
  useId,
  useRef,
  useState,
} from "react";
import { cx } from "../utils.js";

export interface MenuProps {
  label: string;
  children: ReactNode;
  className?: string;
}

/** A menu surface. Arrow keys, Home and End move focus between items. */
export function Menu({ label, children, className }: MenuProps) {
  const ref = useRef<HTMLDivElement>(null);
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const items = Array.from(
      ref.current?.querySelectorAll<HTMLButtonElement>(
        '[role="menuitem"]:not(:disabled)',
      ) ?? [],
    );
    if (items.length === 0) return;
    const index = items.indexOf(document.activeElement as HTMLButtonElement);
    let next: number;
    if (event.key === "ArrowDown") next = (index + 1) % items.length;
    else if (event.key === "ArrowUp")
      next = (index - 1 + items.length) % items.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = items.length - 1;
    else return;
    event.preventDefault();
    items[next]?.focus();
  };
  return (
    <div
      ref={ref}
      role="menu"
      aria-label={label}
      tabIndex={-1}
      className={cx("pui-menu", className)}
      onKeyDown={onKeyDown}
    >
      {children}
    </div>
  );
}

export interface MenuItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  shortcut?: string;
  danger?: boolean;
}

export function MenuItem({
  shortcut,
  danger = false,
  className,
  children,
  type = "button",
  ...rest
}: MenuItemProps) {
  return (
    <button
      type={type}
      role="menuitem"
      className={cx(
        "pui-menu__item",
        danger && "pui-menu__item--danger",
        className,
      )}
      {...rest}
    >
      <span>{children}</span>
      {shortcut ? <span className="pui-menu__shortcut">{shortcut}</span> : null}
    </button>
  );
}

export function MenuSeparator() {
  return <hr className="pui-menu__separator" />;
}

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
export function Tooltip({
  content,
  shortcut,
  placement = "top",
  children,
}: TooltipProps) {
  const id = useId();
  const [open, setOpen] = useState(false);
  return (
    <span className="pui-tooltip-anchor">
      {children({
        "aria-describedby": id,
        onMouseEnter: () => setOpen(true),
        onMouseLeave: () => setOpen(false),
        onFocus: () => setOpen(true),
        onBlur: () => setOpen(false),
        onKeyDown: (event) => {
          if (event.key === "Escape") setOpen(false);
        },
      })}
      <span
        id={id}
        role="tooltip"
        hidden={!open}
        className={cx(
          "pui-tooltip",
          placement === "bottom" && "pui-tooltip--bottom",
        )}
      >
        {content}
        {shortcut ? <kbd className="pui-kbd">{shortcut}</kbd> : null}
      </span>
    </span>
  );
}
