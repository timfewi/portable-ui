// Use the locked native binary, or the same version's static musl build on NixOS.
import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const architecture = { x64: "x64", arm64: "arm64" }[process.arch];
const packages = [`@biomejs/cli-${process.platform}-${architecture}`];
if (process.platform === "linux") packages.push(`${packages[0]}-musl`);

for (const name of packages) {
  let binary;
  try {
    binary = require.resolve(`${name}/biome`);
  } catch {
    continue;
  }
  if (spawnSync(binary, ["--version"], { stdio: "ignore" }).status !== 0)
    continue;
  const result = spawnSync(binary, process.argv.slice(2), { stdio: "inherit" });
  process.exit(result.status ?? 1);
}
console.error("biome: blocked: no runnable locked binary; run just setup.");
process.exit(127);
