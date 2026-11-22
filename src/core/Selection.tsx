import {
  type InputHTMLAttributes,
  type KeyboardEvent,
  type ReactNode,
  useId,
  useRef,
  useState,
} from "react";
import { cx } from "../utils.js";

/** Controlled-or-uncontrolled state helper shared by the selection controls. */
export function useControllable<T>(
  value: T | undefined,
  defaultValue: T,
  onChange?: (next: T) => void,
): [T, (next: T) => void] {
  const [inner, setInner] = useState(defaultValue);
  const current = value === undefined ? inner : value;
  const set = (next: T) => {
    if (value === undefined) setInner(next);
    onChange?.(next);
  };
  return [current, set];
}

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

export function Switch({
  label,
  description,
  checked,
  defaultChecked = false,
  onCheckedChange,
  disabled,
  size = "md",
  className,
}: SwitchProps) {
  const [on, setOn] = useControllable(checked, defaultChecked, onCheckedChange);
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      disabled={disabled}
      onClick={() => setOn(!on)}
      className={cx("pui-switch", size === "sm" && "pui-switch--sm", className)}
    >
      <span className="pui-switch__text">
        {label}
        {description ? (
          <span className="pui-switch__desc">{description}</span>
        ) : null}
      </span>
      <span className="pui-switch__track" aria-hidden="true">
        <span className="pui-switch__knob" />
      </span>
    </button>
  );
}

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: ReactNode;
}

export function Checkbox({ label, className, ...input }: CheckboxProps) {
  return (
    <label className={cx("pui-check", className)}>
      <input type="checkbox" {...input} />
      {label}
    </label>
  );
}

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: ReactNode;
}

export function Radio({ label, className, ...input }: RadioProps) {
  return (
    <label className={cx("pui-check", className)}>
      <input type="radio" {...input} />
      {label}
    </label>
  );
}

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
export function SegmentedControl<T extends string>({
  label,
  options,
  value,
  defaultValue,
  onValueChange,
  className,
}: SegmentedControlProps<T>) {
  const first = options[0]?.value as T;
  const [current, setCurrent] = useControllable(
    value,
    defaultValue ?? first,
    onValueChange,
  );
  const refs = useRef<Array<HTMLButtonElement | null>>([]);

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const index = options.findIndex((o) => o.value === current);
    const delta =
      event.key === "ArrowRight" || event.key === "ArrowDown"
        ? 1
        : event.key === "ArrowLeft" || event.key === "ArrowUp"
          ? -1
          : 0;
    if (!delta) return;
    event.preventDefault();
    const next = (index + delta + options.length) % options.length;
    const option = options[next];
    if (!option) return;
    setCurrent(option.value);
    refs.current[next]?.focus();
  };

  return (
    <div
      role="radiogroup"
      aria-label={label}
      className={cx("pui-segmented", className)}
      onKeyDown={onKeyDown}
    >
      {options.map((option, index) => {
        const selected = option.value === current;
        return (
          // biome-ignore lint/a11y/useSemanticElements: a segmented control is a styled radio group
          <button
            key={option.value}
            ref={(node) => {
              refs.current[index] = node;
            }}
            type="button"
            role="radio"
            aria-checked={selected}
            tabIndex={selected ? 0 : -1}
            className="pui-segmented__item"
            onClick={() => setCurrent(option.value)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

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
export function Tabs({
  label,
  items,
  value,
  defaultValue,
  onValueChange,
  className,
}: TabsProps) {
  const baseId = useId();
  const [current, setCurrent] = useControllable(
    value,
    defaultValue ?? items[0]?.id ?? "",
    onValueChange,
  );
  const refs = useRef<Array<HTMLButtonElement | null>>([]);
  const active = items.find((item) => item.id === current) ?? items[0];

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const index = items.findIndex((item) => item.id === current);
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % items.length;
    else if (event.key === "ArrowLeft")
      next = (index - 1 + items.length) % items.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = items.length - 1;
    else return;
    event.preventDefault();
    const item = items[next];
    if (!item) return;
    setCurrent(item.id);
    refs.current[next]?.focus();
  };

  return (
    <div className={cx("pui-tabs", className)}>
      <div
        role="tablist"
        aria-label={label}
        className="pui-tabs__list"
        onKeyDown={onKeyDown}
      >
        {items.map((item, index) => {
          const selected = item.id === active?.id;
          return (
            <button
              key={item.id}
              ref={(node) => {
                refs.current[index] = node;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${item.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${item.id}`}
              tabIndex={selected ? 0 : -1}
              className="pui-tab"
              onClick={() => setCurrent(item.id)}
            >
              {item.label}
              {item.count !== undefined ? (
                <span className="pui-tab__count">{item.count}</span>
              ) : null}
            </button>
          );
        })}
      </div>
      {active ? (
        <div
          role="tabpanel"
          id={`${baseId}-panel-${active.id}`}
          aria-labelledby={`${baseId}-tab-${active.id}`}
          className="pui-tabs__panel"
        >
          {active.content}
        </div>
      ) : null}
    </div>
  );
}
