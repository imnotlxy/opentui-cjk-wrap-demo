import { existsSync, mkdirSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const vendorDir = join(root, "vendor")
const repoDir = join(vendorDir, "opentui-pr-1143")
const coreDir = join(repoDir, "packages", "core")

async function run(command: string[], cwd = root) {
  console.log(`$ ${command.join(" ")}`)

  const process = Bun.spawn(command, {
    cwd,
    stdout: "inherit",
    stderr: "inherit",
  })

  const exitCode = await process.exited
  if (exitCode !== 0) {
    throw new Error(`Command failed with exit code ${exitCode}: ${command.join(" ")}`)
  }
}

mkdirSync(vendorDir, { recursive: true })

if (!existsSync(join(repoDir, ".git"))) {
  await run(["gh", "repo", "clone", "anomalyco/opentui", repoDir])
}

await run(["gh", "pr", "checkout", "1143"], repoDir)
await run(["bun", "install"], repoDir)
await run(["bun", "run", "--filter", "@opentui/core", "build"], repoDir)
await run(["bun", "link"], coreDir)
await run(["bun", "install"], root)
await run(["bun", "link", "@opentui/core"], root)

console.log("\n已切换到 anomalyco/opentui#1143 的 @opentui/core。")
