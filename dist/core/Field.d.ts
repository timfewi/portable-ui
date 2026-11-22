import { type InputHTMLAttributes, type ReactNode, type SelectHTMLAttributes, type TextareaHTMLAttributes } from "react";
interface FieldControlProps {
    id: string;
    "aria-invalid"?: true;
    "aria-describedby"?: string;
}
export interface FieldProps {
    label: ReactNode;
    /** Help text shown below the control. */
    hint?: ReactNode;
    /** Error message; marks the control invalid and replaces the hint. */
    error?: ReactNode;
    /** Visually hide the label but keep it for assistive tech. */
    hideLabel?: boolean;
    className?: string;
    /** Render prop receiving the ids and ARIA attributes for the control. */
    children: (control: FieldControlProps) => ReactNode;
}
/** Label, help text and error message wired to one form control. */
export declare function Field({ label, hint, error, hideLabel, className, children, }: FieldProps): import("react").JSX.Element;
export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "id"> {
    label: ReactNode;
    hint?: ReactNode;
    error?: ReactNode;
    hideLabel?: boolean;
}
export declare function TextField({ label, hint, error, hideLabel, className, ...input }: TextFieldProps): import("react").JSX.Element;
export interface TextAreaFieldProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "id"> {
    label: ReactNode;
    hint?: ReactNode;
    error?: ReactNode;
}
export declare function TextAreaField({ label, hint, error, className, rows, ...textarea }: TextAreaFieldProps): import("react").JSX.Element;
export interface SelectFieldProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "id"> {
    label: ReactNode;
    hint?: ReactNode;
    error?: ReactNode;
    options: Array<{
        value: string;
        label: string;
    }>;
}
export declare function SelectField({ label, hint, error, options, className, ...select }: SelectFieldProps): import("react").JSX.Element;
export interface SearchInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    /** Accessible name; search fields usually have no visible label. */
    label: string;
    /** Keyboard hint shown at the end, e.g. "⌘K". */
    shortcut?: string;
}
export declare function SearchInput({ label, shortcut, className, style, ...input }: SearchInputProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=Field.d.ts.map