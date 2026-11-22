// Bundle the library with Bun, emit declarations with the locked TypeScript,
// and ship the stylesheet beside the bundle.
import { rmSync } from "node:fs";

rmSync("dist", { recursive: true, force: true });

const bundle = await Bun.build({
  entrypoints: ["src/index.ts"],
  outdir: "dist",
  format: "esm",
  target: "browser",
  sourcemap: "linked",
  jsx: { runtime: "automatic", development: false },
  external: ["react", "react-dom", "react/jsx-runtime"],
});
if (!bundle.success) {
  for (const log of bundle.logs) console.error(log);
  process.exit(1);
}

const tsc = Bun.spawnSync(
  ["bun", "x", "--bun", "tsc", "-p", "tsconfig.build.json"],
  { stdout: "inherit", stderr: "inherit" },
);
if (tsc.exitCode !== 0) process.exit(tsc.exitCode ?? 1);

await Bun.write("dist/portable-ui.css", Bun.file("src/portable-ui.css"));
console.log("built dist/index.js, dist/index.d.ts and dist/portable-ui.css");
