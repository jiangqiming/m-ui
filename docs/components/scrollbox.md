# ScrollBox 滚动容器

用于创建自动滚动容器的组件，支持内容超出时自动滚动，鼠标悬浮时暂停滚动，移开后恢复滚动。

<script setup>
import { ref } from 'vue'

const disabled = ref(false)
const scrollSpeed = ref(50)
const height = ref('300px')
const direction = ref('up')
const loop = ref(true)
const scrollStep = ref(1)
</script>

## 基础用法

基础的自动滚动容器，当内容超出容器高度时会自动向上滚动。

<Demo>
  <div style="width: 100%;">
    <MScrollBox :height="height">
      <div style="padding: 10px;">
        <p style="margin: 10px 0;">这是第一行内容</p>
        <p style="margin: 10px 0;">这是第二行内容</p>
        <p style="margin: 10px 0;">这是第三行内容</p>
        <p style="margin: 10px 0;">这是第四行内容</p>
        <p style="margin: 10px 0;">这是第五行内容</p>
        <p style="margin: 10px 0;">这是第六行内容</p>
        <p style="margin: 10px 0;">这是第七行内容</p>
        <p style="margin: 10px 0;">这是第八行内容</p>
        <p style="margin: 10px 0;">这是第九行内容</p>
        <p style="margin: 10px 0;">这是第十行内容</p>
        <p style="margin: 10px 0;">这是第十一行内容</p>
        <p style="margin: 10px 0;">这是第十二行内容</p>
        <p style="margin: 10px 0;">这是第十三行内容</p>
        <p style="margin: 10px 0;">这是第十四行内容</p>
        <p style="margin: 10px 0;">这是第十五行内容</p>
      </div>
    </MScrollBox>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MScrollBox height="300px">
    <div style="padding: 10px;">
      <p>这是第一行内容</p>
      <p>这是第二行内容</p>
      <p>这是第三行内容</p>
      <!-- 更多内容... -->
    </div>
  </MScrollBox>
</template>

<script setup>
import { MScrollBox } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 自定义滚动速度

通过 `scroll-speed` 属性可以自定义滚动速度（像素/秒）。

<Demo>
  <div style="width: 100%;">
    <MScrollBox :height="height" :scroll-speed="scrollSpeed">
      <div style="padding: 10px;">
        <p style="margin: 10px 0;">滚动速度: {{ scrollSpeed }} 像素/秒</p>
        <p style="margin: 10px 0;">这是第一行内容</p>
        <p style="margin: 10px 0;">这是第二行内容</p>
        <p style="margin: 10px 0;">这是第三行内容</p>
        <p style="margin: 10px 0;">这是第四行内容</p>
        <p style="margin: 10px 0;">这是第五行内容</p>
        <p style="margin: 10px 0;">这是第六行内容</p>
        <p style="margin: 10px 0;">这是第七行内容</p>
        <p style="margin: 10px 0;">这是第八行内容</p>
        <p style="margin: 10px 0;">这是第九行内容</p>
        <p style="margin: 10px 0;">这是第十行内容</p>
      </div>
    </MScrollBox>
  </div>
  <div style="margin-top: 16px;">
    <label>
      滚动速度: <input type="range" v-model="scrollSpeed" min="10" max="200" step="10" style="margin-left: 8px;" />
      <span style="margin-left: 8px;">{{ scrollSpeed }} 像素/秒</span>
    </label>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MScrollBox height="300px" :scroll-speed="100">
    <div style="padding: 10px;">
      <p>内容会自动滚动</p>
      <!-- 更多内容... -->
    </div>
  </MScrollBox>
</template>

<script setup>
import { MScrollBox } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 禁用滚动

通过 `disabled` 属性可以禁用滚动功能。

<Demo>
  <div style="width: 100%;">
    <MScrollBox :height="height" :disabled="disabled">
      <div style="padding: 10px;">
        <p style="margin: 10px 0;">这是第一行内容</p>
        <p style="margin: 10px 0;">这是第二行内容</p>
        <p style="margin: 10px 0;">这是第三行内容</p>
        <p style="margin: 10px 0;">这是第四行内容</p>
        <p style="margin: 10px 0;">这是第五行内容</p>
        <p style="margin: 10px 0;">这是第六行内容</p>
        <p style="margin: 10px 0;">这是第七行内容</p>
        <p style="margin: 10px 0;">这是第八行内容</p>
        <p style="margin: 10px 0;">这是第九行内容</p>
        <p style="margin: 10px 0;">这是第十行内容</p>
      </div>
    </MScrollBox>
  </div>
  <div style="margin-top: 16px;">
    <label>
      <input type="checkbox" v-model="disabled" /> 禁用滚动
    </label>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MScrollBox height="300px" :disabled="true">
    <div style="padding: 10px;">
      <p>滚动已禁用</p>
      <!-- 更多内容... -->
    </div>
  </MScrollBox>
</template>

<script setup>
import { MScrollBox } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 滚动方向

通过 `direction` 属性可以设置滚动方向，支持 `up`（向上）和 `down`（向下）。

<Demo>
  <div style="width: 100%;">
    <MScrollBox :height="height" :direction="direction">
      <div style="padding: 10px;">
        <p style="margin: 10px 0;">滚动方向: {{ direction === 'up' ? '向上' : '向下' }}</p>
        <p style="margin: 10px 0;">这是第一行内容</p>
        <p style="margin: 10px 0;">这是第二行内容</p>
        <p style="margin: 10px 0;">这是第三行内容</p>
        <p style="margin: 10px 0;">这是第四行内容</p>
        <p style="margin: 10px 0;">这是第五行内容</p>
        <p style="margin: 10px 0;">这是第六行内容</p>
        <p style="margin: 10px 0;">这是第七行内容</p>
        <p style="margin: 10px 0;">这是第八行内容</p>
        <p style="margin: 10px 0;">这是第九行内容</p>
        <p style="margin: 10px 0;">这是第十行内容</p>
      </div>
    </MScrollBox>
  </div>
  <div style="margin-top: 16px;">
    <label>
      滚动方向: 
      <select v-model="direction" style="margin-left: 8px;">
        <option value="up">向上</option>
        <option value="down">向下</option>
      </select>
    </label>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MScrollBox height="300px" direction="down">
    <div style="padding: 10px;">
      <p>内容会向下滚动</p>
      <!-- 更多内容... -->
    </div>
  </MScrollBox>
</template>

<script setup>
import { MScrollBox } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 循环滚动

通过 `loop` 属性可以控制是否循环滚动。当设置为 `false` 时，滚动到底部（或顶部）后会停止。

<Demo>
  <div style="width: 100%;">
    <MScrollBox :height="height" :loop="loop">
      <div style="padding: 10px;">
        <p style="margin: 10px 0;">循环滚动: {{ loop ? '是' : '否' }}</p>
        <p style="margin: 10px 0;">这是第一行内容</p>
        <p style="margin: 10px 0;">这是第二行内容</p>
        <p style="margin: 10px 0;">这是第三行内容</p>
        <p style="margin: 10px 0;">这是第四行内容</p>
        <p style="margin: 10px 0;">这是第五行内容</p>
        <p style="margin: 10px 0;">这是第六行内容</p>
        <p style="margin: 10px 0;">这是第七行内容</p>
        <p style="margin: 10px 0;">这是第八行内容</p>
        <p style="margin: 10px 0;">这是第九行内容</p>
        <p style="margin: 10px 0;">这是第十行内容</p>
      </div>
    </MScrollBox>
  </div>
  <div style="margin-top: 16px;">
    <label>
      <input type="checkbox" v-model="loop" /> 循环滚动
    </label>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MScrollBox height="300px" :loop="false">
    <div style="padding: 10px;">
      <p>滚动到底部后会停止</p>
      <!-- 更多内容... -->
    </div>
  </MScrollBox>
</template>

<script setup>
import { MScrollBox } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 自定义容器高度

通过 `height` 属性可以自定义容器高度。

<Demo>
  <div style="width: 100%;">
    <MScrollBox :height="height">
      <div style="padding: 10px;">
        <p style="margin: 10px 0;">容器高度: {{ height }}</p>
        <p style="margin: 10px 0;">这是第一行内容</p>
        <p style="margin: 10px 0;">这是第二行内容</p>
        <p style="margin: 10px 0;">这是第三行内容</p>
        <p style="margin: 10px 0;">这是第四行内容</p>
        <p style="margin: 10px 0;">这是第五行内容</p>
        <p style="margin: 10px 0;">这是第六行内容</p>
        <p style="margin: 10px 0;">这是第七行内容</p>
        <p style="margin: 10px 0;">这是第八行内容</p>
        <p style="margin: 10px 0;">这是第九行内容</p>
        <p style="margin: 10px 0;">这是第十行内容</p>
      </div>
    </MScrollBox>
  </div>
  <div style="margin-top: 16px;">
    <label>
      容器高度: <input type="text" v-model="height" style="width: 100px; margin-left: 8px;" />
    </label>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MScrollBox height="400px">
    <div style="padding: 10px;">
      <p>自定义高度的滚动容器</p>
      <!-- 更多内容... -->
    </div>
  </MScrollBox>
</template>

<script setup>
import { MScrollBox } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 鼠标悬浮控制

组件支持鼠标悬浮时自动暂停滚动，移开后恢复滚动。这是默认行为，无需额外配置。

<Demo>
  <div style="width: 100%;">
    <MScrollBox :height="height">
      <div style="padding: 10px;">
        <p style="margin: 10px 0;">提示：将鼠标移到容器上，滚动会暂停</p>
        <p style="margin: 10px 0;">移开鼠标后，滚动会恢复</p>
        <p style="margin: 10px 0;">这是第一行内容</p>
        <p style="margin: 10px 0;">这是第二行内容</p>
        <p style="margin: 10px 0;">这是第三行内容</p>
        <p style="margin: 10px 0;">这是第四行内容</p>
        <p style="margin: 10px 0;">这是第五行内容</p>
        <p style="margin: 10px 0;">这是第六行内容</p>
        <p style="margin: 10px 0;">这是第七行内容</p>
        <p style="margin: 10px 0;">这是第八行内容</p>
        <p style="margin: 10px 0;">这是第九行内容</p>
        <p style="margin: 10px 0;">这是第十行内容</p>
      </div>
    </MScrollBox>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MScrollBox height="300px">
    <div style="padding: 10px;">
      <p>鼠标悬浮时会暂停滚动</p>
      <!-- 更多内容... -->
    </div>
  </MScrollBox>
</template>

<script setup>
import { MScrollBox } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 内容不足时不滚动

当内容高度小于或等于容器高度时，组件不会滚动。只有当内容超出容器高度时才会自动滚动。

<Demo>
  <div style="width: 100%;">
    <MScrollBox :height="height">
      <div style="padding: 10px;">
        <p style="margin: 10px 0;">内容较少，不会滚动</p>
        <p style="margin: 10px 0;">只有一行内容</p>
      </div>
    </MScrollBox>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MScrollBox height="300px">
    <div style="padding: 10px;">
      <p>内容较少，不会滚动</p>
    </div>
  </MScrollBox>
</template>

<script setup>
import { MScrollBox } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| disabled | 是否禁用滚动 | boolean | — | false |
| scrollSpeed | 滚动速度（像素/秒） | number | — | 50 |
| height | 容器高度 | number \| string | — | '300px' |
| width | 容器宽度 | number \| string | — | '100%' |
| direction | 滚动方向 | string | up / down | up |
| loop | 是否循环滚动 | boolean | — | true |
| scrollInterval | 滚动间隔（毫秒），用于控制滚动步进的频率 | number | — | 20 |
| scrollStep | 每次滚动的像素数 | number | — | 1 |

### 特性说明

1. **自动检测**: 组件会自动检测内容高度，只有当内容超出容器高度时才会滚动
2. **鼠标控制**: 鼠标悬浮时自动暂停滚动，移开后恢复滚动
3. **响应式**: 当容器或内容尺寸变化时，会自动重新计算并调整滚动
4. **循环滚动**: 支持循环滚动和单次滚动两种模式
5. **方向控制**: 支持向上和向下两种滚动方向

### 使用场景

- 公告栏、新闻列表等需要自动滚动的场景
- 数据展示区域，内容较多时需要滚动显示
- 轮播文字、跑马灯效果
- 任何需要自动滚动展示内容的场景

