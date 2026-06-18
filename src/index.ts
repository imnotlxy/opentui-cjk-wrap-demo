import { createCliRenderer, TextareaRenderable } from "@opentui/core"

const sampleText = `OpenTUI PR #1143：CJK soft wrap demo

中文长句（没有空格）：这是一个用于演示中日韩文本自动折行的多行文本框，文本框宽度始终占满整个终端窗口，请尝试左右拖动终端边缘观察折行位置是否自然。

日文長文（スペースなし）：これは日本語の文章が単語区切りの空白なしでも文字の間で自然に折り返されることを確認するためのサンプルです。

한국어긴문장(공백없음)：한글문장도공백이없을때터미널폭에맞추어자연스럽게줄바꿈되는지확인할수있습니다.

ASCII mixed with CJK：OpenTUI会把English words和中文字符混排显示；英文单词仍按 word wrap 处理，CJK 字符之间允许 soft wrap。`

const renderer = await createCliRenderer({
  exitOnCtrlC: true,
})

const textarea = new TextareaRenderable(renderer, {
  id: "cjk-wrap-demo",
  width: "100%",
  height: "100%",
  initialValue: sampleText,
  wrapMode: "word",
  backgroundColor: "#101820",
  focusedBackgroundColor: "#101820",
  textColor: "#E8F1F2",
  focusedTextColor: "#E8F1F2",
  cursorColor: "#FFD166",
  selectionBg: "#264653",
  selectionFg: "#FFFFFF",
})

renderer.root.add(textarea)
textarea.focus()
textarea.gotoBufferHome()
