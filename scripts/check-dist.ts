// dist/ is committed so GitHub installs work without a build step on the
// consumer side. Rebuild it and fail when the result differs from Git's index.
const build = Bun.spawnSync(["bun", "scripts/build.ts"], {
  stdout: "inherit",
  stderr: "inherit",
});
if (build.exitCode !== 0) process.exit(build.exitCode ?? 1);

const changed = Bun.spawnSync(["git", "diff", "--name-only", "--", "dist"]);
const untracked = Bun.spawnSync([
  "git",
  "ls-files",
  "--others",
  "--exclude-standard",
  "--",
  "dist",
]);
const stale = `${changed.stdout}${untracked.stdout}`.trim();
if (stale) {
  console.error(
    `dist/ is out of date with src/. Stage the rebuilt files:\n${stale}`,
  );
  process.exit(1);
}
console.log("dist/ matches the staged build");
