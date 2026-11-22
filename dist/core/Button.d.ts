import type { ButtonHTMLAttributes, ReactNode } from "react";
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
export declare function Button({ variant, size, icon, loading, disabled, className, children, type, ...rest }: ButtonProps): import("react").JSX.Element;
export interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "aria-label"> {
    /** Required accessible name; the button has no visible text. */
    label: string;
    size?: "sm" | "md";
    outlined?: boolean;
    children: ReactNode;
}
export declare function IconButton({ label, size, outlined, className, children, type, ...rest }: IconButtonProps): import("react").JSX.Element;
//# sourceMappingURL=Button.d.ts.map