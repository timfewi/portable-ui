import type { ButtonHTMLAttributes, ReactNode } from "react";
import { SpinnerIcon } from "../icons/index.js";
import { cx } from "../utils.js";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Leading icon element, e.g. `<PlusIcon />`. */
  icon?: ReactNode;
  /** Shows a spinner, sets aria-busy and blocks clicks. */
  loading?: boolean;
}

export function Button({
  variant = "secondary",
  size = "md",
  icon,
  loading = false,
  disabled,
  className,
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cx(
        "pui-btn",
        `pui-btn--${variant}`,
        size !== "md" && `pui-btn--${size}`,
        className,
      )}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...rest}
    >
      {loading ? <SpinnerIcon className="pui-spinner" size={14} /> : icon}
      {children}
    </button>
  );
}

export interface IconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "aria-label"> {
  /** Required accessible name; the button has no visible text. */
  label: string;
  size?: "sm" | "md";
  outlined?: boolean;
  children: ReactNode;
}

export function IconButton({
  label,
  size = "md",
  outlined = false,
  className,
  children,
  type = "button",
  ...rest
}: IconButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      title={label}
      className={cx(
        "pui-icon-btn",
        size === "sm" && "pui-icon-btn--sm",
        outlined && "pui-icon-btn--outlined",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
