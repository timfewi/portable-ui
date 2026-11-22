// Palette values mirror themes/portable.json in the dotfiles repository.
// Chart series are not part of that file: they keep Portable's hues but raise
// chroma so adjacent series stay distinguishable for color-vision deficiencies.
// portable-ui.css declares the same values as CSS variables; test/tokens.test.ts
// keeps the two in sync.

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

export const palette: Record<ThemeMode, PortablePalette> = {
  dark: {
    background: "#000000",
    surface: "#161616",
    surfaceRaised: "#1e1e1e",
    surfaceVariant: "#262626",
    surfaceHover: "#303030",
    surfaceSelected: "#383838",
    border: "#555555",
    foreground: "#e8e8e8",
    muted: "#8a8a8a",
    suggestion: "#9a9a9a",
    accent: "#9482ad",
    onAccent: "#000000",
    success: "#80977d",
    warning: "#b59c6c",
    error: "#b96f7d",
    info: "#71979a",
    terminalAmber: "#e8a064",
    terminalGreen: "#98c379",
    terminalRed: "#e06c75",
    series: ["#9372c8", "#bb731b", "#0098b7", "#58994a"],
  },
  light: {
    background: "#f4f4f4",
    surface: "#e8e8e8",
    surfaceRaised: "#dfdfdf",
    surfaceVariant: "#d6d6d6",
    surfaceHover: "#cdcdcd",
    surfaceSelected: "#c3c3c3",
    border: "#696969",
    foreground: "#151515",
    muted: "#4b4b4b",
    suggestion: "#555555",
    accent: "#6200a3",
    onAccent: "#ffffff",
    success: "#005020",
    warning: "#783000",
    error: "#94082c",
    info: "#004090",
    terminalAmber: "#9a4b13",
    terminalGreen: "#2e7d32",
    terminalRed: "#b3261e",
    series: ["#7a3fc0", "#b0652a", "#2a6fb8", "#3f8a46"],
  },
};

/** CSS variable names, so components and consumers never hard-code colors. */
export const cssVar = {
  background: "var(--pui-bg)",
  surface: "var(--pui-surface)",
  surfaceRaised: "var(--pui-surface-raised)",
  surfaceVariant: "var(--pui-surface-variant)",
  surfaceHover: "var(--pui-surface-hover)",
  surfaceSelected: "var(--pui-surface-selected)",
  border: "var(--pui-border)",
  line: "var(--pui-line)",
  foreground: "var(--pui-fg)",
  muted: "var(--pui-muted)",
  suggestion: "var(--pui-suggestion)",
  accent: "var(--pui-accent)",
  onAccent: "var(--pui-on-accent)",
  success: "var(--pui-success)",
  warning: "var(--pui-warning)",
  error: "var(--pui-error)",
  info: "var(--pui-info)",
  series: [
    "var(--pui-series-1)",
    "var(--pui-series-2)",
    "var(--pui-series-3)",
    "var(--pui-series-4)",
  ],
} as const;
