import { type ReactNode } from "react";
/** Series colors in fixed order; a fifth series should fold into "Other". */
export declare function seriesColor(index: number): string;
/** Round a maximum up to a readable axis bound and return evenly spaced ticks. */
export declare function niceTicks(max: number, count?: number): number[];
export interface LegendItem {
    name: string;
    color: string;
    kind?: "box" | "line" | "dashed";
}
export declare function Legend({ items }: {
    items: LegendItem[];
}): import("react").JSX.Element;
export interface ChartCardProps {
    title: ReactNode;
    legend?: ReactNode;
    children: ReactNode;
    className?: string;
}
/** Panel with a title row and optional legend, used around every chart. */
export declare function ChartCard({ title, legend, children, className, }: ChartCardProps): import("react").JSX.Element;
export interface DataTableProps {
    caption: string;
    columns: string[];
    rows: Array<Array<ReactNode>>;
}
/** Plain table view of chart data; the accessible alternative to hover tooltips. */
export declare function DataTable({ caption, columns, rows }: DataTableProps): import("react").JSX.Element;
export interface SparklineProps {
    values: number[];
    width?: number;
    height?: number;
    color?: string;
}
export declare function Sparkline({ values, width, height, color, }: SparklineProps): import("react").JSX.Element;
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
export declare function StatTile({ label, value, unit, delta, trend, comparison, spark, className, }: StatTileProps): import("react").JSX.Element;
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
    marker?: {
        index: number;
        label: string;
    };
    showTable?: boolean;
    formatValue?: (value: number) => string;
}
export declare function LineChart({ label, labels, series, tickLabels, max, height, marker, showTable, formatValue, }: LineChartProps): import("react").JSX.Element;
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
export declare function BarChart({ label, categories, tickLabels, series, max, height, showTable, footer, formatValue, }: BarChartProps): import("react").JSX.Element;
export interface StackSegment {
    id: string;
    name: string;
    value: number;
    color?: string;
}
/** One horizontal bar split into parts, with a legend list that doubles as the table. */
export declare function StackedBar({ label, segments, }: {
    label: string;
    segments: StackSegment[];
}): import("react").JSX.Element;
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
/** Single-hue sequential grid. Darker in light mode, brighter in dark mode. */
export declare function Heatmap({ label, rows, columns, values, thresholds, unit, }: HeatmapProps): import("react").JSX.Element;
//# sourceMappingURL=Charts.d.ts.map