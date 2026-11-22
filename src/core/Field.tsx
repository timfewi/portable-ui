import {
  type InputHTMLAttributes,
  type ReactNode,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
  useId,
} from "react";
import { AlertCircleIcon, SearchIcon } from "../icons/index.js";
import { cx } from "../utils.js";

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
export function Field({
  label,
  hint,
  error,
  hideLabel,
  className,
  children,
}: FieldProps) {
  const id = useId();
  const messageId = `${id}-message`;
  const message = error ?? hint;
  return (
    <div className={cx("pui-field", className)}>
      <label
        htmlFor={id}
        className={cx("pui-label", hideLabel && "pui-sr-only")}
      >
        {label}
      </label>
      {children({
        id,
        "aria-invalid": error ? true : undefined,
        "aria-describedby": message ? messageId : undefined,
      })}
      {error ? (
        <span id={messageId} className="pui-error-text">
          <AlertCircleIcon size={14} />
          {error}
        </span>
      ) : hint ? (
        <span id={messageId} className="pui-hint">
          {hint}
        </span>
      ) : null}
    </div>
  );
}

export interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "id"> {
  label: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  hideLabel?: boolean;
}

export function TextField({
  label,
  hint,
  error,
  hideLabel,
  className,
  ...input
}: TextFieldProps) {
  return (
    <Field
      label={label}
      hint={hint}
      error={error}
      hideLabel={hideLabel}
      className={className}
    >
      {(control) => <input className="pui-input" {...control} {...input} />}
    </Field>
  );
}

export interface TextAreaFieldProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "id"> {
  label: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
}

export function TextAreaField({
  label,
  hint,
  error,
  className,
  rows = 3,
  ...textarea
}: TextAreaFieldProps) {
  return (
    <Field label={label} hint={hint} error={error} className={className}>
      {(control) => (
        <textarea
          className="pui-textarea"
          rows={rows}
          {...control}
          {...textarea}
        />
      )}
    </Field>
  );
}

export interface SelectFieldProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "id"> {
  label: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  options: Array<{ value: string; label: string }>;
}

export function SelectField({
  label,
  hint,
  error,
  options,
  className,
  ...select
}: SelectFieldProps) {
  return (
    <Field label={label} hint={hint} error={error} className={className}>
      {(control) => (
        <select className="pui-select" {...control} {...select}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    </Field>
  );
}

export interface SearchInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  /** Accessible name; search fields usually have no visible label. */
  label: string;
  /** Keyboard hint shown at the end, e.g. "⌘K". */
  shortcut?: string;
}

export function SearchInput({
  label,
  shortcut,
  className,
  style,
  ...input
}: SearchInputProps) {
  return (
    <div
      className={cx(
        "pui-input-wrap",
        "pui-input-wrap--icon",
        shortcut && "pui-input-wrap--end",
        className,
      )}
      style={style}
    >
      <SearchIcon className="pui-input-wrap__icon" />
      <input
        type="search"
        aria-label={label}
        className="pui-input"
        {...input}
      />
      {shortcut ? (
        <kbd className="pui-kbd pui-input-wrap__end">{shortcut}</kbd>
      ) : null}
    </div>
  );
}
