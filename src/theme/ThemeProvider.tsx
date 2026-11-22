import {
  createContext,
  type HTMLAttributes,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { cx } from "../utils.js";
import type { ThemeMode } from "./tokens.js";

export type ThemePreference = ThemeMode | "system";

interface ThemeContextValue {
  /** The mode actually rendered. */
  mode: ThemeMode;
  /** What the app asked for; "system" follows prefers-color-scheme. */
  preference: ThemePreference;
}

const ThemeContext = createContext<ThemeContextValue>({
  mode: "dark",
  preference: "dark",
});

function systemMode(): ThemeMode {
  if (typeof window === "undefined" || !window.matchMedia) return "dark";
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
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
export function PortableProvider({
  mode = "dark",
  className,
  children,
  ...rest
}: PortableProviderProps) {
  const [system, setSystem] = useState<ThemeMode>(systemMode);

  useEffect(() => {
    if (mode !== "system" || !window.matchMedia) return;
    const query = window.matchMedia("(prefers-color-scheme: light)");
    const update = () => setSystem(query.matches ? "light" : "dark");
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, [mode]);

  const resolved: ThemeMode = mode === "system" ? system : mode;
  return (
    <ThemeContext.Provider value={{ mode: resolved, preference: mode }}>
      <div
        data-pui-theme={resolved}
        className={cx("pui-root", className)}
        {...rest}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  return useContext(ThemeContext);
}
