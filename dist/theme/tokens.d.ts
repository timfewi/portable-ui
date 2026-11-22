export type ThemeMode = "dark" | "light";
export interface PortablePalette {
    background: string;
    surface: string;
    surfaceRaised: string;
    surfaceVariant: string;
    surfaceHover: string;
    surfaceSelected: string;
    border: string;
    foreground: string;
    muted: string;
    suggestion: string;
    accent: string;
    onAccent: string;
    success: string;
    warning: string;
    error: string;
    info: string;
    terminalAmber: string;
    terminalGreen: string;
    terminalRed: string;
    series: readonly [string, string, string, string];
}
export declare const palette: Record<ThemeMode, PortablePalette>;
/** CSS variable names, so components and consumers never hard-code colors. */
export declare const cssVar: {
    readonly background: "var(--pui-bg)";
    readonly surface: "var(--pui-surface)";
    readonly surfaceRaised: "var(--pui-surface-raised)";
    readonly surfaceVariant: "var(--pui-surface-variant)";
    readonly surfaceHover: "var(--pui-surface-hover)";
    readonly surfaceSelected: "var(--pui-surface-selected)";
    readonly border: "var(--pui-border)";
    readonly line: "var(--pui-line)";
    readonly foreground: "var(--pui-fg)";
    readonly muted: "var(--pui-muted)";
    readonly suggestion: "var(--pui-suggestion)";
    readonly accent: "var(--pui-accent)";
    readonly onAccent: "var(--pui-on-accent)";
    readonly success: "var(--pui-success)";
    readonly warning: "var(--pui-warning)";
    readonly error: "var(--pui-error)";
    readonly info: "var(--pui-info)";
    readonly series: readonly ["var(--pui-series-1)", "var(--pui-series-2)", "var(--pui-series-3)", "var(--pui-series-4)"];
};
//# sourceMappingURL=tokens.d.ts.map