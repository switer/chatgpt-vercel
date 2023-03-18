export const setting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: ""
}

export const message = `- 由 [OpenAI API (gpt-3.5-turbo)](https://platform.openai.com/docs/guides/chat) 和 [Vercel](http://vercel.com/) 提供支持。
- 该网站仅作为演示，不提供长期服务，请勿滥用。
- 如果本项目对你有所帮助，可以给小猫 [买点零食](https://files.wujicode.cn/wuji_material/openai/9kcr99ryy1q.jpeg)，但不接受任何付费功能请求。
- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] Prompt 预设。[[↑]] 可编辑最近一次提问。点击名称滚动到顶部，点击输入框滚动到底部。`

export type Setting = typeof setting

export const resetContinuousDialogue = false
