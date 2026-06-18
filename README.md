# OpenTUI CJK Wrap Demo

This demo uses a full-width, full-height multi-line `TextareaRenderable` to demonstrate CJK soft wrapping from [anomalyco/opentui#1143](https://github.com/anomalyco/opentui/pull/1143).

## Run

```sh
bun run dev
```

This demo only runs against [anomalyco/opentui#1143](https://github.com/anomalyco/opentui/pull/1143). `bun run dev` automatically uses `gh` to fetch PR #1143, builds and links the local `@opentui/core`, then starts the demo.

After the UI starts, resize your terminal to observe how Chinese, Japanese, and Korean text without spaces wraps between CJK characters with `wrapMode: "word"`. Press `Ctrl+C` to exit.
