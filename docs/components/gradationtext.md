# GradationText 文字颜色渐变

用于创建文字颜色渐变效果的组件，支持自定义渐变方向、起始和结束颜色，以及多色渐变。

<script setup>
import { ref } from 'vue'

const fromColor = ref('#409eff')
const toColor = ref('#67c23a')
const direction = ref('to right')
const content = ref('这是一段渐变文字')
const colors = ref(['#409eff', '#67c23a', '#e6a23c'])
</script>

## 基础用法

通过 `from-color` 和 `to-color` 设置渐变的起始和结束颜色。

<Demo>
  <div style="width: 100%;">
    <MGradationText content="这是一段渐变文字" from-color="#409eff" to-color="#67c23a" />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MGradationText
    content="这是一段渐变文字"
    from-color="#409eff"
    to-color="#67c23a"
  />
</template>

<script setup>
import { MGradationText } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 渐变方向

通过 `direction` 属性可以设置渐变方向，支持 `to right`、`to left`、`to bottom`、`to top`、`to bottom right`、`to bottom left`、`to top right`、`to top left`。

<Demo>
  <div style="width: 100%;">
    <div style="margin-bottom: 16px;">
      <MGradationText :content="content" :from-color="fromColor" :to-color="toColor" :direction="direction" />
    </div>
    <div style="margin-top: 16px;">
      <label>渐变方向: </label>
      <el-select v-model="direction" style="width: 200px; margin-left: 8px;">
        <el-option label="向右" value="to right" />
        <el-option label="向左" value="to left" />
        <el-option label="向下" value="to bottom" />
        <el-option label="向上" value="to top" />
        <el-option label="向右下" value="to bottom right" />
        <el-option label="向左下" value="to bottom left" />
        <el-option label="向右上" value="to top right" />
        <el-option label="向左上" value="to top left" />
      </el-select>
    </div>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <div>
    <MGradationText
      content="这是一段渐变文字"
      from-color="#409eff"
      to-color="#67c23a"
      :direction="direction"
    />
    <div style="margin-top: 16px;">
      <label>渐变方向: </label>
      <el-select v-model="direction" style="width: 200px; margin-left: 8px;">
        <el-option label="向右" value="to right" />
        <el-option label="向左" value="to left" />
        <el-option label="向下" value="to bottom" />
        <el-option label="向上" value="to top" />
        <el-option label="向右下" value="to bottom right" />
        <el-option label="向左下" value="to bottom left" />
        <el-option label="向右上" value="to top right" />
        <el-option label="向左上" value="to top left" />
      </el-select>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { MGradationText } from '@jqkgg/m-ui'

const direction = ref('to right')
</script>
```
</CodeBlock>

## 自定义颜色

通过 `from-color` 和 `to-color` 可以自定义渐变的起始和结束颜色。

<Demo>
  <div style="width: 100%;">
    <div style="margin-bottom: 16px;">
      <MGradationText :content="content" :from-color="fromColor" :to-color="toColor" />
    </div>
    <div style="margin-top: 16px;">
      <div style="margin-bottom: 8px;">
        <label>起始颜色: </label>
        <el-color-picker v-model="fromColor" style="margin-left: 8px;" />
        <span style="margin-left: 8px;">{{ fromColor }}</span>
      </div>
      <div>
        <label>结束颜色: </label>
        <el-color-picker v-model="toColor" style="margin-left: 8px;" />
        <span style="margin-left: 8px;">{{ toColor }}</span>
      </div>
    </div>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <div>
    <MGradationText
      content="这是一段渐变文字"
      :from-color="fromColor"
      :to-color="toColor"
    />
    <div style="margin-top: 16px;">
      <div style="margin-bottom: 8px;">
        <label>起始颜色: </label>
        <el-color-picker v-model="fromColor" style="margin-left: 8px;" />
      </div>
      <div>
        <label>结束颜色: </label>
        <el-color-picker v-model="toColor" style="margin-left: 8px;" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { MGradationText } from '@jqkgg/m-ui'

const fromColor = ref('#409eff')
const toColor = ref('#67c23a')
</script>
```
</CodeBlock>

## 多色渐变

通过 `colors` 属性可以设置多个颜色，实现多色渐变效果。

<Demo>
  <div style="width: 100%;">
    <div style="margin-bottom: 16px;">
      <MGradationText :content="content" :colors="colors" direction="to right" />
    </div>
    <div style="margin-top: 16px;">
      <p style="margin-bottom: 8px;">颜色数组: {{ colors.join(', ') }}</p>
      <div style="display: flex; gap: 8px; align-items: center;">
        <label>颜色1: </label>
        <el-color-picker v-model="colors[0]" />
        <label style="margin-left: 16px;">颜色2: </label>
        <el-color-picker v-model="colors[1]" />
        <label style="margin-left: 16px;">颜色3: </label>
        <el-color-picker v-model="colors[2]" />
      </div>
    </div>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <div>
    <MGradationText
      content="这是一段渐变文字"
      :colors="['#409eff', '#67c23a', '#e6a23c']"
      direction="to right"
    />
  </div>
</template>

<script setup>
import { MGradationText } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 使用插槽

不传 `content` 时使用默认插槽作为文本来源。

<Demo>
  <div style="width: 100%;">
    <MGradationText from-color="#ff6b6b" to-color="#4ecdc4" direction="to right">
      通过默认插槽传入的文本，同样支持渐变效果。
    </MGradationText>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MGradationText from-color="#ff6b6b" to-color="#4ecdc4" direction="to right">
    通过默认插槽传入的文本，同样支持渐变效果。
  </MGradationText>
</template>

<script setup>
import { MGradationText } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 自定义标签

通过 `tag` 属性可以指定根元素标签，支持 `span`、`div`、`p`、`h1`-`h6`。

<Demo>
  <div style="width: 100%;">
    <div style="margin-bottom: 16px;">
      <MGradationText content="这是 span 标签" from-color="#409eff" to-color="#67c23a" tag="span" />
    </div>
    <div style="margin-bottom: 16px;">
      <MGradationText content="这是 div 标签" from-color="#409eff" to-color="#67c23a" tag="div" />
    </div>
    <div style="margin-bottom: 16px;">
      <MGradationText content="这是 h1 标签" from-color="#409eff" to-color="#67c23a" tag="h1" />
    </div>
    <div>
      <MGradationText content="这是 h2 标签" from-color="#409eff" to-color="#67c23a" tag="h2" />
    </div>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <div>
    <MGradationText
      content="这是 span 标签"
      from-color="#409eff"
      to-color="#67c23a"
      tag="span"
    />
    <MGradationText
      content="这是 h1 标签"
      from-color="#409eff"
      to-color="#67c23a"
      tag="h1"
    />
  </div>
</template>

<script setup>
import { MGradationText } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 实际应用示例

渐变文字常用于标题、强调文本等场景。

<Demo>
  <div style="width: 100%;">
    <div style="margin-bottom: 24px;">
      <MGradationText
        content="欢迎使用 M-UI 组件库"
        :colors="['#667eea', '#764ba2']"
        direction="to right"
        tag="h1"
        style="font-size: 32px; font-weight: bold;"
      />
    </div>
    <div style="margin-bottom: 16px;">
      <MGradationText
        content="这是一个功能强大的 Vue3 组件库"
        from-color="#f093fb"
        to-color="#f5576c"
        direction="to right"
        tag="h2"
        style="font-size: 24px;"
      />
    </div>
    <div>
      <MGradationText
        content="支持多种渐变效果，让你的文字更加生动"
        from-color="#4facfe"
        to-color="#00f2fe"
        direction="to right"
        style="font-size: 16px;"
      />
    </div>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <div>
    <MGradationText
      content="欢迎使用 M-UI 组件库"
      :colors="['#667eea', '#764ba2']"
      direction="to right"
      tag="h1"
      style="font-size: 32px; font-weight: bold;"
    />
    <MGradationText
      content="这是一个功能强大的 Vue3 组件库"
      from-color="#f093fb"
      to-color="#f5576c"
      direction="to right"
      tag="h2"
      style="font-size: 24px;"
    />
  </div>
</template>

<script setup>
import { MGradationText } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| content | 文本内容，不传则使用默认 slot | string | — | '' |
| fromColor | 渐变起始颜色 | string | — | '#409eff' |
| toColor | 渐变结束颜色 | string | — | '#67c23a' |
| direction | 渐变方向 | string | to right / to left / to bottom / to top / to bottom right / to bottom left / to top right / to top left | 'to right' |
| colors | 自定义渐变颜色（支持多个颜色） | string[] | — | — |
| tag | 根元素标签 | string | span / div / p / h1 / h2 / h3 / h4 / h5 / h6 | 'span' |
| customClass | 自定义 class | string | — | '' |

### 说明

- 当同时提供 `colors` 和 `fromColor`/`toColor` 时，`colors` 优先级更高
- 渐变效果使用 CSS `background-clip: text` 实现，需要浏览器支持
- 可以通过 `customClass` 或内联样式进一步自定义文字样式（如字体大小、粗细等）

