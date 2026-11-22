import { type InputHTMLAttributes, type ReactNode } from "react";
/** Controlled-or-uncontrolled state helper shared by the selection controls. */
export declare function useControllable<T>(value: T | undefined, defaultValue: T, onChange?: (next: T) => void): [T, (next: T) => void];
export interface SwitchProps {
    label: ReactNode;
    description?: ReactNode;
    checked?: boolean;
    defaultChecked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    disabled?: boolean;
    size?: "sm" | "md";
    className?: string;
}
export declare function Switch({ label, description, checked, defaultChecked, onCheckedChange, disabled, size, className, }: SwitchProps): import("react").JSX.Element;
export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    label: ReactNode;
}
export declare function Checkbox({ label, className, ...input }: CheckboxProps): import("react").JSX.Element;
export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    label: ReactNode;
}
export declare function Radio({ label, className, ...input }: RadioProps): import("react").JSX.Element;
export interface SegmentedOption<T extends string> {
    value: T;
    label: ReactNode;
}
export interface SegmentedControlProps<T extends string> {
    label: string;
    options: Array<SegmentedOption<T>>;
    value?: T;
    defaultValue?: T;
    onValueChange?: (value: T) => void;
    className?: string;
}
/** A single-choice radio group drawn as joined buttons. Arrow keys move the choice. */
export declare function SegmentedControl<T extends string>({ label, options, value, defaultValue, onValueChange, className, }: SegmentedControlProps<T>): import("react").JSX.Element;
export interface TabItem {
    id: string;
    label: ReactNode;
    /** Optional count shown in a pill after the label. */
    count?: number;
    content: ReactNode;
}
export interface TabsProps {
    label: string;
    items: TabItem[];
    value?: string;
    defaultValue?: string;
    onValueChange?: (id: string) => void;
    className?: string;
}
/** WAI-ARIA tabs with arrow, Home and End key navigation. */
export declare function Tabs({ label, items, value, defaultValue, onValueChange, className, }: TabsProps): import("react").JSX.Element;
//# sourceMappingURL=Selection.d.ts.map