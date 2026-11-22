import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { palette } from "../src/theme/tokens";

const css = readFileSync(
  new URL("../src/portable-ui.css", import.meta.url),
  "utf8",
);

function block(selector: string): string {
  const start = css.indexOf(selector);
  if (start === -1) throw new Error(`missing ${selector}`);
  const open = css.indexOf("{", start);
  return css.slice(open, css.indexOf("}", open));
}

function cssValue(scope: string, name: string): string | undefined {
  return scope.match(new RegExp(`--pui-${name}:\\s*([^;]+);`))?.[1]?.trim();
}

const names: Array<[keyof (typeof palette)["dark"], string]> = [
  ["background", "bg"],
  ["surface", "surface"],
  ["surfaceRaised", "surface-raised"],
  ["surfaceVariant", "surface-variant"],
  ["surfaceHover", "surface-hover"],
  ["surfaceSelected", "surface-selected"],
  ["border", "border"],
  ["foreground", "fg"],
  ["muted", "muted"],
  ["suggestion", "suggestion"],
  ["accent", "accent"],
  ["onAccent", "on-accent"],
  ["success", "success"],
  ["warning", "warning"],
  ["error", "error"],
  ["info", "info"],
  ["terminalAmber", "terminal-amber"],
  ["terminalGreen", "terminal-green"],
  ["terminalRed", "terminal-red"],
];

describe("stylesheet tokens match the TypeScript palette", () => {
  for (const mode of ["dark", "light"] as const) {
    const scope = block(`[data-pui-theme="${mode}"]`);
    test(`${mode} palette`, () => {
      for (const [key, name] of names) {
        expect({ name, value: cssValue(scope, name) }).toEqual({
          name,
          value: palette[mode][key] as string,
        });
      }
      palette[mode].series.forEach((hex, i) => {
        expect(cssValue(scope, `series-${i + 1}`)).toBe(hex);
      });
    });
  }
});
