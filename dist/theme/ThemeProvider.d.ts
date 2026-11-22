import { type HTMLAttributes, type ReactNode } from "react";
import type { ThemeMode } from "./tokens.js";
export type ThemePreference = ThemeMode | "system";
interface ThemeContextValue {
    /** The mode actually rendered. */
    mode: ThemeMode;
    /** What the app asked for; "system" follows prefers-color-scheme. */
    preference: ThemePreference;
}
export interface PortableProviderProps extends HTMLAttributes<HTMLDivElement> {
    /** Dark is the reference mode. "system" follows the OS setting. */
    mode?: ThemePreference;
    children?: ReactNode;
}
/**
 * Scopes the Portable palette to its subtree. Wrap the app once; nest another
 * provider to render a region in the other mode.
 */
export declare function PortableProvider({ mode, className, children, ...rest }: PortableProviderProps): import("react").JSX.Element;
export declare function useTheme(): ThemeContextValue;
export {};
//# sourceMappingURL=ThemeProvider.d.ts.map