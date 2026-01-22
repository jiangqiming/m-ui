# EllipsisText 文本省略

当文本超出容器宽度（或行数限制）时显示省略号，鼠标悬浮可查看完整内容；支持多行省略、可复制等。

<script setup>
import { ref } from 'vue'

const disableTooltip = ref(false)
const lineClamp = ref(1)
const maxWidth = ref('200px')
const placement = ref('top')
const copyable = ref(false)
const content1 = '这是一段很长很长的文本内容，当超出容器宽度时会显示省略号，鼠标悬浮可查看完整内容。'
const content2 = '多行省略示例。这是第一行。这是第二行。这是第三行。这是第四行。这是第五行。'
</script>

## 基础用法

通过 `content` 传入文本，或使用默认插槽。超出宽度时省略，悬浮显示完整内容。

<Demo>
  <div style="width: 100%;">
    <MEllipsisText :content="content1" max-width="200px" />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MEllipsisText
    content="这是一段很长很长的文本内容，当超出容器宽度时会显示省略号，鼠标悬浮可查看完整内容。"
    max-width="200px"
  />
</template>

<script setup>
import { MEllipsisText } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 禁用悬浮提示

通过 `disable-tooltip` 禁用鼠标悬浮显示完整内容。

<Demo>
  <div style="width: 100%;">
    <MEllipsisText :content="content1" :max-width="maxWidth" :disable-tooltip="disableTooltip" />
  </div>
  <div style="margin-top: 12px;">
    <el-checkbox v-model="disableTooltip">禁用悬浮提示</el-checkbox>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <div>
    <MEllipsisText :content="content" :max-width="maxWidth" :disable-tooltip="disableTooltip" />
    <div style="margin-top: 12px;">
      <el-checkbox v-model="disableTooltip">禁用悬浮提示</el-checkbox>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { MEllipsisText } from '@jqkgg/m-ui'

const content = ref('很长很长的文本...')
const maxWidth = ref('200px')
const disableTooltip = ref(false)
</script>
```
</CodeBlock>

## 多行省略

通过 `line-clamp` 设置可展示行数，大于 1 时启用多行省略。

<Demo>
  <div style="width: 100%;">
    <MEllipsisText :content="content2" :line-clamp="lineClamp" max-width="300px" />
  </div>
  <div style="margin-top: 12px;">
    <label>行数：</label>
    <el-input-number v-model="lineClamp" :min="1" :max="5" style="width: 120px;" />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <div>
    <MEllipsisText :content="content" :line-clamp="lineClamp" max-width="300px" />
    <div style="margin-top: 12px;">
      <label>行数：</label>
      <el-input-number v-model="lineClamp" :min="1" :max="5" style="width: 120px;" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { MEllipsisText } from '@jqkgg/m-ui'

const content = ref('多行省略示例。这是第一行。这是第二行。这是第三行。这是第四行。这是第五行。')
const lineClamp = ref(3)
</script>
```
</CodeBlock>

## 使用插槽

不传 `content` 时使用默认插槽作为文本来源。

<Demo>
  <div style="width: 100%;">
    <MEllipsisText :max-width="maxWidth">
      通过默认插槽传入的文本，同样支持省略与悬浮查看完整内容。
    </MEllipsisText>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MEllipsisText max-width="200px">
    通过默认插槽传入的文本，同样支持省略与悬浮查看完整内容。
  </MEllipsisText>
</template>

<script setup>
import { MEllipsisText } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 可复制

通过 `copyable` 开启复制，点击文本或复制图标可复制完整内容，并显示成功/失败提示。

<Demo>
  <div style="width: 100%;">
    <MEllipsisText :content="content1" max-width="200px" :copyable="copyable" />
  </div>
  <div style="margin-top: 12px;">
    <el-checkbox v-model="copyable">可复制</el-checkbox>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <div>
    <MEllipsisText :content="content" max-width="200px" :copyable="copyable" />
    <div style="margin-top: 12px;">
      <el-checkbox v-model="copyable">可复制</el-checkbox>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { MEllipsisText } from '@jqkgg/m-ui'

const content = ref('很长很长的文本...')
const copyable = ref(false)
</script>
```
</CodeBlock>

## 悬浮提示位置

通过 `placement` 设置提示框出现位置：`top`、`bottom`、`left`、`right`。

<Demo>
  <div style="width: 100%;">
    <MEllipsisText :content="content1" max-width="200px" :placement="placement" />
  </div>
  <div style="margin-top: 12px;">
    <label>位置：</label>
    <el-select v-model="placement" style="width: 120px; margin-left: 8px;">
      <el-option label="top" value="top" />
      <el-option label="bottom" value="bottom" />
      <el-option label="left" value="left" />
      <el-option label="right" value="right" />
    </el-select>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <div>
    <MEllipsisText :content="content" max-width="200px" :placement="placement" />
    <div style="margin-top: 12px;">
      <label>位置：</label>
      <el-select v-model="placement" style="width: 120px; margin-left: 8px;">
        <el-option label="top" value="top" />
        <el-option label="bottom" value="bottom" />
        <el-option label="left" value="left" />
        <el-option label="right" value="right" />
      </el-select>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { MEllipsisText } from '@jqkgg/m-ui'

const content = ref('很长很长的文本...')
const placement = ref('top')
</script>
```
</CodeBlock>

## 最大宽度与根标签

通过 `max-width` 限制宽度，`tag` 指定根元素标签（`span`、`div`、`p`）。

<Demo>
  <div style="width: 100%;">
    <MEllipsisText :content="content1" :max-width="maxWidth" tag="div" />
  </div>
  <div style="margin-top: 12px;">
    <label>maxWidth: </label>
    <el-input v-model="maxWidth" style="width: 100px;" />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <div>
    <MEllipsisText :content="content" :max-width="maxWidth" tag="div" />
    <div style="margin-top: 12px;">
      <label>maxWidth: </label>
      <el-input v-model="maxWidth" style="width: 100px;" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { MEllipsisText } from '@jqkgg/m-ui'

const content = ref('很长很长的文本...')
const maxWidth = ref('200px')
</script>
```
</CodeBlock>

## 自定义复制文案与悬浮延迟

通过 `copy-success-text`、`copy-error-text` 自定义复制提示，`tooltip-delay` 设置悬浮延迟（毫秒）。

<Demo>
  <div style="width: 100%;">
    <MEllipsisText
      :content="content1"
      max-width="200px"
      copyable
      copy-success-text="复制成功"
      copy-error-text="复制失败，请重试"
      :tooltip-delay="200"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MEllipsisText
    content="很长很长的文本..."
    max-width="200px"
    copyable
    copy-success-text="复制成功"
    copy-error-text="复制失败，请重试"
    :tooltip-delay="200"
  />
</template>

<script setup>
import { MEllipsisText } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| content | 文本内容，不传则使用默认 slot | string | — | '' |
| disableTooltip | 是否禁用鼠标悬浮显示完整内容 | boolean | — | false |
| lineClamp | 可展示行数，1 为单行省略 | number | — | 1 |
| maxWidth | 最大宽度 | number \| string | — | — |
| tag | 根元素标签 | string | span / div / p | span |
| placement | 悬浮提示位置 | string | top / bottom / left / right | top |
| ellipsisSymbol | 省略号符号（预留） | string | — | '...' |
| truncateFrom | 从开头或结尾省略（预留） | string | end / start | end |
| copyable | 是否可复制 | boolean | — | false |
| copySuccessText | 复制成功提示 | string | — | '已复制' |
| copyErrorText | 复制失败提示 | string | — | '复制失败' |
| tooltipDelay | 悬浮延迟（毫秒） | number | — | 100 |
| customClass | 自定义 class | string | — | '' |

### 说明

- 仅当文本**实际溢出**时才会显示悬浮提示；未溢出不显示。
- 使用 `content` 或默认插槽的纯文本即可，富文本（如加粗、链接）会按渲染后的文本处理。
- `copyable` 开启后，点击文本或复制图标均可触发复制。

