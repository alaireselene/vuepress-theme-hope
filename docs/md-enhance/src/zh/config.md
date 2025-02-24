---
title: 配置
icon: config
---

你可以设置以下插件选项来启用或禁用一些功能。

## enableAll

- 类型: `boolean`
- 默认值: `false`

启用全部功能。

::: danger

请仅将此选项用于体验或测试。

随着时间的增长，`vupress-plugin-md-enhance` 变得越来越强大。它为 Markdown 解析器添加了更多语法，并输出了更多代码。

启用不需要的功能将增加开发和构建时间。 (`markdown-it` 必须检查额外的语法)

同样，幻灯片演示功能将在输出中添加 700KB 大小的代码 (主要是 `reveal.js`)。

因此，请使用下面的选项，仅启用需要的功能。

:::

## gfm

- 类型: `boolean`
- 默认值: `false`

是否支持完整的 GFM 语法。

::: note

有关完整的 GFM 语法，请参阅 [GFM](https://github.github.com/gfm/)。

老实说，我们并不是 100% 支持它，我们只补全了它的语法，包括任务列表、脚注等。

某些行为可能会有所不同，例如，为了允许 Vue 语法，我们并没有禁止 `<script>` 标签。 但在大多数情况下，行为应该是相同的。

:::

## container

- 类型: `boolean`
- 默认值: `false`

是否启用自定义容器支持:

- info
- note
- tip
- warning
- danger
- details

::: warning

最后四个会和默认主题冲突，且会覆盖默认主题的样式与行为。

:::

## vpre

- 类型: `boolean`
- 默认值: `false`

是否启用 v-pre 容器。

## codegroup

- 类型: `boolean`
- 默认值: `false`

是否启用代码组。

## align

- 类型: `boolean`
- 默认值: `false`

是否启用自定义对齐格式支持。

## sup

- 类型: `boolean`
- 默认值: `false`

是否启用上角标格式支持。

## sub

- 类型: `boolean`
- 默认值: `false`

是否启用下角标格式支持。

## footnote

- 类型: `boolean`
- 默认值: `false`

是否启用脚注格式支持。

## lazyLoad

- 类型: `boolean`
- 默认值: `false`

是否使用原生方式懒加载页面图片。

## mark

- 类型: `boolean`
- 默认值: `false`

是否启用标记格式支持。

## imageMark

- 类型: `ImageMarkOptions | boolean`
- 默认值: `false`

是否启用图片标注支持

```ts
interface ImageMarkOptions {
  /** lightmode only ids */
  light?: string[];
  /** darkmode only ids */
  dark?: string[];
}
```

## tasklist

- 类型: `TaskListOptions | boolean`
- 默认值: `false`

是否启用任务列表格式支持。你可以传入一个对象作为任务列表的配置选项。

```ts
interface TaskListOptions {
  /**
   * 是否使用 `<label>` 来包裹文字
   *
   * @default true
   */
  label?: boolean;
  /**
   * 是否将 `<label>` 放置在 `<input>` 后还是包裹住 `<input>`
   *
   * @default true
   */
  labelAfter?: boolean;
}
```

## tex

- 类型: `KatexOptions | boolean`
- 默认值: `false`

是否启用 $\TeX$ 语法支持。你可以传入一个对象作为 $\KaTeX$ 的配置选项。

可用的选项，详见 [Katex 文档](https://katex.org/docs/options.html)。

## chart

- 类型: `boolean`
- 默认值: `false`

是否启用图表支持。

## flowchart

- 类型: `boolean`
- 默认值: `false`

是否启用流程图支持。

## mermaid

- 类型: `boolean`
- 默认值: `false`

是否启用 [Mermaid](https://mermaid-js.github.io/mermaid/#/) 支持。

## demo

- 类型: `CodeDemoGlobalOptions | boolean`
- 默认值: `false`

是否启用代码案例支持。

### demo.jsLib

- 类型: `string[]`
- 必填: 否

CodePen, JsFiddle 需要引入的外部 JS 库。

### demo.cssLib

- 类型: `string[]`
- 必填: 否

CodePen, JsFiddle 需要引入的外部 CSS 库。

::: warning

上述两个选项仅仅是给第三方代码演示使用的，你需要自行在 `head` 中导入这些库。

:::

### demo.jsfiddle

- 类型: `boolean`
- 默认值: `true`

是否显示 JSFiddle 按钮

### demo.codepen

- 类型: `boolean`
- 默认值: `true`

是否显示 CodePen 按钮

### demo.codepenLayout

- 类型: `"top" | "left" | "right"`
- 默认值: `"left"`

CodePen 编辑器布局

### demo.codepenEditors

- Type: `string`
- Default value: `"101"`

CodePen 编辑器状态

### demo.editors

- 类型: `string`
- 默认值: `"101"`

CodePen 编辑器显示情况，第一位代表 HTML ，第二位代表 JS，第三位代表演示页面。

### 其他

以下是第三方代码演示使用的库地址，除非你的环境无法访问 jsdelivr 或访问缓慢，否则无需覆盖默认设置。

#### demo.babel

默认值: `"https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js"`

#### demo.vue

默认值: `"https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"`

#### demo.react

默认值: `"https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"`

#### demo.reactDOM

默认值: `"https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"`

## presentation

- 类型: `PresentationOptions | boolean`
- 默认值: `false`

是否启用幻灯片支持。

你可以传入一个对象，这个对象将用于 reveal.js 配置。

### presentation.plugins

- 类型: `string[]`
- 必填: No

你想启用的 Reveal.js 插件

可接受的插件有:

- `"highlight"`
- `"math"`
- `"search"`
- `"notes"`
- `"zoom"`

<!-- - `"anything"`
- `"audio"`
- `"chalkboard"` -->

### presentation.revealConfig

- 类型: `Partial<RevealOptions>`
- 必填: No

你想要传递给 Reveal.js 的配置选项

## delay

- 类型: `number`
- 默认值: `500`

操作页面 DOM 的延时，单位 ms。

::: tip

如果你使用的主题有切换动画，建议配置此选项为 `切换动画时长 + 200`。

:::

## locales

- 类型: `MarkdownEnhanceLocaleConfig`

  ```ts
  interface MarkdownEnhanceLocaleData {
    /**
     * 信息块的默认标题
     */
    info: string;

    /**
     * 注释块的默认标题
     */
    note: string;

    /**
     * 提示块的默认标题
     */
    tip: string;

    /**
     * 注意块的默认标题
     */
    warning: string;

    /**
     * 警告块的默认标题
     */
    danger: string;

    /**
     * 详情块的默认标题
     */
    details: string;
  }

  interface MarkdownEnhanceLocaleConfig {
    [localePath: string]: MarkdownEnhanceLocaleData;
  }
  ```

- 必填: 否

Markdown 增强插件的国际化配置。
