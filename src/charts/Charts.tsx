import { type ReactNode, useState } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "../icons/index.js";
import { cssVar } from "../theme/tokens.js";
import { cx } from "../utils.js";

/** Series colors in fixed order; a fifth series should fold into "Other". */
export function seriesColor(index: number): string {
  return cssVar.series[index % cssVar.series.length] ?? cssVar.accent;
}

/** Round a maximum up to a readable axis bound and return evenly spaced ticks. */
export function niceTicks(max: number, count = 4): number[] {
  if (max <= 0) return [0];
  const rough = max / count;
  const power = 10 ** Math.floor(Math.log10(rough));
  const step =
    [1, 2, 2.5, 5, 10].map((m) => m * power).find((s) => s >= rough) ??
    10 * power;
  const top = Math.ceil(max / step) * step;
  const ticks: number[] = [];
  for (let v = 0; v <= top + step / 2; v += step) ticks.push(+v.toFixed(6));
  return ticks;
}

export interface LegendItem {
  name: string;
  color: string;
  kind?: "box" | "line" | "dashed";
}

export function Legend({ items }: { items: LegendItem[] }) {
  return (
    <div className="pui-legend">
      {items.map((item) => (
        <span key={item.name} className="pui-legend__item">
          {item.kind === "line" || item.kind === "dashed" ? (
            <span
              className={cx(
                "pui-legend__line",
                item.kind === "dashed" && "pui-legend__line--dashed",
              )}
              style={{ color: item.color }}
            />
          ) : (
            <span
              className="pui-swatch"
              style={{
                background: item.color,
                width: 10,
                height: 10,
                borderRadius: 3,
              }}
            />
          )}
          {item.name}
        </span>
      ))}
    </div>
  );
}

export interface ChartCardProps {
  title: ReactNode;
  legend?: ReactNode;
  children: ReactNode;
  className?: string;
}

/** Panel with a title row and optional legend, used around every chart. */
export function ChartCard({
  title,
  legend,
  children,
  className,
}: ChartCardProps) {
  return (
    <section className={cx("pui-panel", "pui-chart", className)}>
      <div className="pui-chart__head">
        <h2 className="pui-chart__title">{title}</h2>
        {legend}
      </div>
      {children}
    </section>
  );
}

export interface DataTableProps {
  caption: string;
  columns: string[];
  rows: Array<Array<ReactNode>>;
}

/** Plain table view of chart data; the accessible alternative to hover tooltips. */
export function DataTable({ caption, columns, rows }: DataTableProps) {
  return (
    <table className="pui-table">
      <caption className="pui-sr-only">{caption}</caption>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column} scope="col">
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, r) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: rows are positional data
          <tr key={r}>
            {row.map((cell, c) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: cells are positional data
              <td key={c}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export interface SparklineProps {
  values: number[];
  width?: number;
  height?: number;
  color?: string;
}

export function Sparkline({
  values,
  width = 96,
  height = 32,
  color = seriesColor(0),
}: SparklineProps) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  const step = values.length > 1 ? (width - 8) / (values.length - 1) : 0;
  const points = values
    .map(
      (v, i) =>
        `${(4 + i * step).toFixed(1)},${(height - 4 - ((v - min) / span) * (height - 8)).toFixed(1)}`,
    )
    .join(" ");
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden="true"
    >
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export interface StatTileProps {
  label: string;
  value: ReactNode;
  unit?: string;
  /** Change text, e.g. "+5" or "−0.4 d". */
  delta?: string;
  trend?: "up" | "down";
  /** Comparison period, e.g. "vs. Sprint 23". */
  comparison?: string;
  spark?: number[];
  className?: string;
}

export function StatTile({
  label,
  value,
  unit,
  delta,
  trend,
  comparison,
  spark,
  className,
}: StatTileProps) {
  return (
    <div className={cx("pui-panel", "pui-stat", className)}>
      <span className="pui-stat__label">{label}</span>
      <div className="pui-stat__row">
        <span className="pui-stat__value">
          {value}
          {unit ? <span className="pui-stat__unit">{unit}</span> : null}
        </span>
        {spark && spark.length > 1 ? <Sparkline values={spark} /> : null}
      </div>
      {delta ? (
        <span className="pui-stat__delta">
          {trend === "up" ? <ArrowUpIcon size={12} /> : null}
          {trend === "down" ? <ArrowDownIcon size={12} /> : null}
          <strong>{delta}</strong>
          {comparison}
        </span>
      ) : null}
    </div>
  );
}

export interface LineSeries {
  id: string;
  name: string;
  /** One value per label; null leaves a gap (e.g. days that have not happened). */
  values: Array<number | null>;
  color?: string;
  dashed?: boolean;
}

export interface LineChartProps {
  /** Accessible summary of what the chart shows. */
  label: string;
  labels: string[];
  series: LineSeries[];
  /** Short x-axis tick text; defaults to labels. Pass "" to skip a tick. */
  tickLabels?: string[];
  max?: number;
  height?: number;
  /** Vertical reference line, e.g. today. */
  marker?: { index: number; label: string };
  showTable?: boolean;
  formatValue?: (value: number) => string;
}

export function LineChart({
  label,
  labels,
  series,
  tickLabels,
  max,
  height = 240,
  marker,
  showTable = false,
  formatValue = String,
}: LineChartProps) {
  const [hover, setHover] = useState<number | null>(null);
  const count = labels.length;
  const dataMax = Math.max(
    0,
    ...series.flatMap((s) => s.values.filter((v): v is number => v !== null)),
  );
  const ticks = niceTicks(max ?? dataMax);
  const top = ticks[ticks.length - 1] ?? 1;
  const xPct = (i: number) => (count > 1 ? (i / (count - 1)) * 100 : 50);
  const yPx = (v: number) => height * (1 - v / top);
  const colorOf = (s: LineSeries, i: number) => s.color ?? seriesColor(i);

  const segments = (s: LineSeries) => {
    const runs: string[] = [];
    let run: string[] = [];
    s.values.forEach((v, i) => {
      if (v === null) {
        if (run.length) runs.push(run.join(" "));
        run = [];
      } else run.push(`${(xPct(i) * 10).toFixed(1)},${yPx(v).toFixed(1)}`);
    });
    if (run.length) runs.push(run.join(" "));
    return runs;
  };

  const tipLeft = hover !== null && xPct(hover) > 60;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div className="pui-chart__frame">
        <div className="pui-chart__y" style={{ height }} aria-hidden="true">
          {ticks.map((t) => (
            <span key={t} className="pui-chart__tick" style={{ top: yPx(t) }}>
              {formatValue(t)}
            </span>
          ))}
        </div>
        <div className="pui-chart__body">
          <figure
            aria-label={label}
            className="pui-chart__plot"
            style={{ height }}
          >
            {ticks.map((t) => (
              <div
                key={t}
                className="pui-chart__grid"
                style={{ top: yPx(t) }}
              />
            ))}
            {marker ? (
              <>
                <div
                  className="pui-chart__marker-line"
                  style={{ left: `${xPct(marker.index)}%` }}
                />
                <span
                  className="pui-chart__marker-label"
                  style={{ left: `${xPct(marker.index)}%` }}
                >
                  {marker.label}
                </span>
              </>
            ) : null}
            <svg
              className="pui-chart__svg"
              viewBox={`0 0 1000 ${height}`}
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {series.map((s, i) =>
                segments(s).map((points) => (
                  <polyline
                    key={`${s.id}-${points.slice(0, 12)}`}
                    points={points}
                    fill="none"
                    stroke={colorOf(s, i)}
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeDasharray={s.dashed ? "6 6" : undefined}
                    vectorEffect="non-scaling-stroke"
                  />
                )),
              )}
            </svg>
            {hover !== null ? (
              <>
                <div
                  className="pui-chart__crosshair"
                  style={{ left: `${xPct(hover)}%` }}
                />
                {series.map((s, i) => {
                  const v = s.values[hover];
                  if (v === null || v === undefined || s.dashed) return null;
                  return (
                    <div
                      key={s.id}
                      className="pui-chart__dot"
                      style={{
                        left: `${xPct(hover)}%`,
                        top: yPx(v),
                        background: colorOf(s, i),
                      }}
                    />
                  );
                })}
                <div
                  className="pui-chart__tooltip"
                  aria-hidden="true"
                  style={{
                    top: 12,
                    left: `${xPct(hover)}%`,
                    transform: tipLeft
                      ? "translateX(calc(-100% - 12px))"
                      : "translateX(12px)",
                  }}
                >
                  <span className="pui-chart__tooltip-title">
                    {labels[hover]}
                  </span>
                  {series.map((s, i) => {
                    const v = s.values[hover];
                    return (
                      <span key={s.id} className="pui-chart__tooltip-row">
                        <span
                          style={{
                            display: "inline-flex",
                            gap: 6,
                            alignItems: "center",
                          }}
                        >
                          <span
                            style={{
                              width: 8,
                              height: 2,
                              background: colorOf(s, i),
                            }}
                          />
                          {s.name}
                        </span>
                        <span>
                          {v === null || v === undefined ? "—" : formatValue(v)}
                        </span>
                      </span>
                    );
                  })}
                </div>
              </>
            ) : null}
            {labels.map((l, i) => (
              <button
                key={l}
                type="button"
                className="pui-chart__hit"
                aria-label={`${l}: ${series
                  .map((s) => {
                    const v = s.values[i];
                    return `${s.name} ${v === null || v === undefined ? "no value" : formatValue(v)}`;
                  })
                  .join(", ")}`}
                style={{
                  left: `${Math.max(0, xPct(i) - 50 / Math.max(1, count - 1))}%`,
                  width: `${100 / Math.max(1, count - 1)}%`,
                }}
                onMouseEnter={() => setHover(i)}
                onFocus={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                onBlur={() => setHover(null)}
              />
            ))}
          </figure>
          <div className="pui-chart__x" aria-hidden="true">
            {(tickLabels ?? labels).map((t, i) =>
              t ? (
                <span
                  // biome-ignore lint/suspicious/noArrayIndexKey: tick positions are fixed
                  key={i}
                  className="pui-chart__tick"
                  style={{ left: `${xPct(i)}%` }}
                >
                  {t}
                </span>
              ) : null,
            )}
          </div>
        </div>
      </div>
      {showTable ? (
        <DataTable
          caption={label}
          columns={["", ...series.map((s) => s.name)]}
          rows={labels.map((l, i) => [
            l,
            ...series.map((s) => {
              const v = s.values[i];
              return v === null || v === undefined ? "—" : formatValue(v);
            }),
          ])}
        />
      ) : null}
    </div>
  );
}

export interface BarSeries {
  id: string;
  name: string;
  values: number[];
  color?: string;
}

export interface BarChartProps {
  label: string;
  categories: string[];
  /** Short labels under the bars; defaults to categories. */
  tickLabels?: string[];
  series: BarSeries[];
  max?: number;
  height?: number;
  showTable?: boolean;
  /** Extra tooltip line per category, e.g. a delivery rate. */
  footer?: (index: number) => ReactNode;
  formatValue?: (value: number) => string;
}

/** Grouped vertical bars with a per-group hover tooltip. */
export function BarChart({
  label,
  categories,
  tickLabels,
  series,
  max,
  height = 200,
  showTable = false,
  footer,
  formatValue = String,
}: BarChartProps) {
  const [hover, setHover] = useState<number | null>(null);
  const dataMax = Math.max(0, ...series.flatMap((s) => s.values));
  const ticks = niceTicks(max ?? dataMax);
  const top = ticks[ticks.length - 1] ?? 1;
  const h = (v: number) => Math.round((v / top) * height);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div className="pui-chart__frame">
        <div className="pui-chart__y" style={{ height }} aria-hidden="true">
          {ticks.map((t) => (
            <span
              key={t}
              className="pui-chart__tick"
              style={{ top: height - h(t) }}
            >
              {formatValue(t)}
            </span>
          ))}
        </div>
        <div className="pui-chart__body">
          <figure
            aria-label={label}
            className="pui-chart__plot pui-bars"
            style={{ height }}
          >
            {ticks.map((t) => (
              <div
                key={t}
                className="pui-chart__grid"
                style={{ top: height - h(t) }}
              />
            ))}
            {categories.map((category, i) => {
              const tallest = Math.max(...series.map((s) => s.values[i] ?? 0));
              return (
                <button
                  key={category}
                  type="button"
                  className="pui-bars__group"
                  data-active={hover === i || undefined}
                  aria-label={`${category}: ${series
                    .map((s) => `${s.name} ${formatValue(s.values[i] ?? 0)}`)
                    .join(", ")}`}
                  onMouseEnter={() => setHover(i)}
                  onFocus={() => setHover(i)}
                  onMouseLeave={() => setHover(null)}
                  onBlur={() => setHover(null)}
                >
                  {series.map((s, si) => (
                    <span
                      key={s.id}
                      className="pui-bars__bar"
                      style={{
                        height: h(s.values[i] ?? 0),
                        background: s.color ?? seriesColor(si),
                      }}
                    />
                  ))}
                  {hover === i ? (
                    <span
                      className="pui-chart__tooltip"
                      aria-hidden="true"
                      style={{
                        bottom: h(tallest) + 10,
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      <span className="pui-chart__tooltip-title">
                        {category}
                      </span>
                      {series.map((s) => (
                        <span key={s.id} className="pui-chart__tooltip-row">
                          <span>{s.name}</span>
                          <span>{formatValue(s.values[i] ?? 0)}</span>
                        </span>
                      ))}
                      {footer ? (
                        <span style={{ color: "var(--pui-muted)" }}>
                          {footer(i)}
                        </span>
                      ) : null}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </figure>
          <div className="pui-bars__labels" aria-hidden="true">
            {(tickLabels ?? categories).map((t, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: tick positions are fixed
              <span key={i}>{t}</span>
            ))}
          </div>
        </div>
      </div>
      {showTable ? (
        <DataTable
          caption={label}
          columns={["", ...series.map((s) => s.name)]}
          rows={categories.map((c, i) => [
            c,
            ...series.map((s) => formatValue(s.values[i] ?? 0)),
          ])}
        />
      ) : null}
    </div>
  );
}

export interface StackSegment {
  id: string;
  name: string;
  value: number;
  color?: string;
}

/** One horizontal bar split into parts, with a legend list that doubles as the table. */
export function StackedBar({
  label,
  segments,
}: {
  label: string;
  segments: StackSegment[];
}) {
  const [hover, setHover] = useState<number | null>(null);
  const total = segments.reduce((sum, s) => sum + s.value, 0) || 1;
  const colorOf = (s: StackSegment, i: number) => s.color ?? seriesColor(i);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <figure aria-label={label} className="pui-stacked">
        {segments.map((s, i) => (
          <button
            key={s.id}
            type="button"
            className="pui-stacked__seg"
            aria-label={`${s.name}: ${s.value} (${Math.round((s.value / total) * 100)}%)`}
            style={{
              flex: `${s.value} 1 0`,
              background: colorOf(s, i),
              opacity: hover === null || hover === i ? 1 : 0.35,
            }}
            onMouseEnter={() => setHover(i)}
            onFocus={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            onBlur={() => setHover(null)}
          />
        ))}
      </figure>
      <div>
        {segments.map((s, i) => (
          <div
            key={s.id}
            className="pui-stacked__row"
            data-active={hover === i || undefined}
          >
            <span
              className="pui-swatch"
              style={{
                width: 10,
                height: 10,
                borderRadius: 3,
                background: colorOf(s, i),
              }}
            />
            <span style={{ flex: 1 }}>{s.name}</span>
            <span
              className="pui-mono"
              style={{ color: "var(--pui-muted)", fontSize: 12 }}
            >
              {Math.round((s.value / total) * 100)}%
            </span>
            <span
              className="pui-mono"
              style={{ width: 28, textAlign: "right", fontWeight: 500 }}
            >
              {s.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export interface HeatmapProps {
  label: string;
  rows: string[];
  columns: string[];
  /** values[row][column] */
  values: number[][];
  /** Upper bounds for the first four steps; anything above lands in step five. */
  thresholds?: [number, number, number, number];
  /** Unit used in the hover readout, e.g. "issues". */
  unit?: string;
}

const heatSteps = [12, 30, 50, 72, 100];

/** Single-hue sequential grid. Darker in light mode, brighter in dark mode. */
export function Heatmap({
  label,
  rows,
  columns,
  values,
  thresholds = [1, 3, 4, 5],
  unit = "",
}: HeatmapProps) {
  const [hover, setHover] = useState<[number, number] | null>(null);
  const ramp = heatSteps.map(
    (p) => `color-mix(in srgb, var(--pui-series-1) ${p}%, var(--pui-surface))`,
  );
  const stepOf = (v: number) => {
    const index = thresholds.findIndex((t) => v <= t);
    return index === -1 ? 4 : index;
  };
  const readout = hover
    ? `${rows[hover[0]]} · ${columns[hover[1]]}: ${values[hover[0]]?.[hover[1]] ?? 0}${unit ? ` ${unit}` : ""}`
    : "Hover or focus a cell for details";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <figure
        aria-label={label}
        className="pui-heatmap"
        style={{
          gridTemplateColumns: `88px repeat(${columns.length}, minmax(0, 1fr))`,
        }}
      >
        <span />
        {columns.map((c) => (
          <span key={c} className="pui-heatmap__head" aria-hidden="true">
            {c}
          </span>
        ))}
        {rows.map((r, ri) => (
          <div key={r} style={{ display: "contents" }}>
            <span style={{ fontSize: 12 }} aria-hidden="true">
              {r}
            </span>
            {columns.map((c, ci) => {
              const v = values[ri]?.[ci] ?? 0;
              const step = stepOf(v);
              const on = hover?.[0] === ri && hover?.[1] === ci;
              return (
                <button
                  key={c}
                  type="button"
                  className="pui-heatmap__cell"
                  aria-label={`${r}, ${c}: ${v}${unit ? ` ${unit}` : ""}`}
                  style={{
                    background: ramp[step],
                    color: step >= 3 ? "var(--pui-on-accent)" : "var(--pui-fg)",
                    boxShadow: on ? "0 0 0 2px var(--pui-fg)" : undefined,
                  }}
                  onMouseEnter={() => setHover([ri, ci])}
                  onFocus={() => setHover([ri, ci])}
                  onMouseLeave={() => setHover(null)}
                  onBlur={() => setHover(null)}
                >
                  {v}
                </button>
              );
            })}
          </div>
        ))}
      </figure>
      <div className="pui-heatmap__legend">
        <span>Low</span>
        {ramp.map((color) => (
          <span
            key={color}
            className="pui-heatmap__legend-step"
            style={{ background: color }}
          />
        ))}
        <span>High</span>
        <span style={{ flex: 1 }} />
        <span
          aria-hidden="true"
          style={{ color: "var(--pui-fg)", fontSize: 12 }}
        >
          {readout}
        </span>
      </div>
    </div>
  );
}
