# ResponsivePage 响应式页面

用于创建响应式页面的容器组件，支持不同分辨率自适应（如 1920×1080、1366×768 等），提供缩放和布局控制功能。

<script setup>
import { ref } from 'vue'

const enableScale = ref(false)
const scaleMode = ref('fit')
const fullscreen = ref(false)
const backgroundColor = ref('#f5f5f5')
const padding = ref('20px')
</script>

## 基础用法

基础的响应式页面容器。

<Demo>
  <div style="width: 100%; height: 400px; border: 1px solid #ddd;">
    <MResponsivePage style="background: #f0f0f0;">
      <div style="padding: 20px;">
        <h3 style="margin: 0 0 16px 0;">响应式页面内容</h3>
        <p>这是一个响应式页面容器，会根据屏幕尺寸自动调整。</p>
        <p>当前窗口尺寸会自动适应不同分辨率。</p>
      </div>
    </MResponsivePage>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MResponsivePage>
    <div style="padding: 20px;">
      <h3>响应式页面内容</h3>
      <p>这是一个响应式页面容器</p>
    </div>
  </MResponsivePage>
</template>

<script setup>
import { MResponsivePage } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 全屏模式

通过 `fullscreen` 属性可以设置全屏模式。

<Demo>
  <div style="width: 100%; height: 400px; border: 1px solid #ddd; position: relative;">
    <MResponsivePage :fullscreen="fullscreen" :background-color="backgroundColor">
      <div style="padding: 20px;">
        <h3 style="margin: 0 0 16px 0;">全屏模式示例</h3>
        <p>设置 fullscreen 为 true 时，容器会占满整个视口。</p>
        <el-checkbox v-model="fullscreen">启用全屏</el-checkbox>
      </div>
    </MResponsivePage>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <div style="width: 100%; height: 400px; border: 1px solid #ddd; position: relative;">
    <MResponsivePage :fullscreen="fullscreen" :background-color="backgroundColor">
      <div style="padding: 20px;">
        <h3 style="margin: 0 0 16px 0;">全屏模式示例</h3>
        <p>设置 fullscreen 为 true 时，容器会占满整个视口。</p>
        <el-checkbox v-model="fullscreen">启用全屏</el-checkbox>
      </div>
    </MResponsivePage>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { MResponsivePage } from '@jqkgg/m-ui'

const fullscreen = ref(false)
const backgroundColor = ref('#f5f5f5')
</script>
```
</CodeBlock>

## 自定义尺寸

通过 `width`、`height`、`min-width`、`max-width` 等属性可以自定义容器尺寸。

<Demo>
  <div style="width: 100%; height: 400px; border: 1px solid #ddd;">
    <MResponsivePage width="800px" height="300px" :background-color="backgroundColor">
      <div style="padding: 20px;">
        <h3 style="margin: 0 0 16px 0;">自定义尺寸</h3>
        <p>宽度: 800px</p>
        <p>高度: 300px</p>
      </div>
    </MResponsivePage>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MResponsivePage width="800px" height="300px">
    <div style="padding: 20px;">
      <h3>自定义尺寸</h3>
      <p>宽度: 800px，高度: 300px</p>
    </div>
  </MResponsivePage>
</template>

<script setup>
import { MResponsivePage } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 响应式缩放

通过 `enable-scale` 属性可以启用响应式缩放功能，适用于固定设计稿尺寸（如 1920×1080）在不同分辨率下的适配。

<Demo>
  <div style="width: 100%; height: 500px; border: 1px solid #ddd; overflow: hidden;">
    <MResponsivePage 
      :enable-scale="enableScale" 
      :scale-mode="scaleMode"
      base-width="1920" 
      base-height="1080"
      :background-color="backgroundColor"
    >
      <div style="padding: 40px; width: 1920px; height: 1080px; box-sizing: border-box;">
        <h2 style="font-size: 48px; margin: 0 0 30px 0;">1920×1080 设计稿</h2>
        <p style="font-size: 24px; margin: 0 0 20px 0;">这是基于 1920×1080 分辨率的设计</p>
        <p style="font-size: 20px; color: #666;">启用缩放后，内容会根据容器大小自动缩放</p>
        <div style="margin-top: 40px;">
          <button style="padding: 15px 30px; font-size: 20px; margin-right: 20px;">按钮1</button>
          <button style="padding: 15px 30px; font-size: 20px;">按钮2</button>
        </div>
      </div>
    </MResponsivePage>
  </div>
  <div style="margin-top: 16px;">
    <el-checkbox v-model="enableScale">启用缩放</el-checkbox>
    <label style="margin-left: 16px;">
      缩放模式: 
      <el-select v-model="scaleMode" style="width: 150px; margin-left: 8px;">
        <el-option label="fit（适配）" value="fit" />
        <el-option label="width（按宽度）" value="width" />
        <el-option label="height（按高度）" value="height" />
        <el-option label="both（同时）" value="both" />
      </el-select>
    </label>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <div>
    <div style="width: 100%; height: 500px; border: 1px solid #ddd; overflow: hidden;">
      <MResponsivePage 
        :enable-scale="enableScale" 
        :scale-mode="scaleMode"
        base-width="1920" 
        base-height="1080"
        :background-color="backgroundColor"
      >
        <div style="padding: 40px; width: 1920px; height: 1080px; box-sizing: border-box;">
          <h2 style="font-size: 48px; margin: 0 0 30px 0;">1920×1080 设计稿</h2>
          <p style="font-size: 24px; margin: 0 0 20px 0;">这是基于 1920×1080 分辨率的设计</p>
          <p style="font-size: 20px; color: #666;">启用缩放后，内容会根据容器大小自动缩放</p>
        </div>
      </MResponsivePage>
    </div>
    <div style="margin-top: 16px;">
      <el-checkbox v-model="enableScale">启用缩放</el-checkbox>
      <label style="margin-left: 16px;">
        缩放模式: 
        <el-select v-model="scaleMode" style="width: 150px; margin-left: 8px;">
          <el-option label="fit（适配）" value="fit" />
          <el-option label="width（按宽度）" value="width" />
          <el-option label="height（按高度）" value="height" />
          <el-option label="both（同时）" value="both" />
        </el-select>
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { MResponsivePage } from '@jqkgg/m-ui'

const enableScale = ref(false)
const scaleMode = ref('fit')
const backgroundColor = ref('#f5f5f5')
</script>
```
</CodeBlock>

## 自定义背景和内边距

通过 `background-color` 和 `padding` 属性可以自定义容器的背景色和内边距。

<Demo>
  <div style="width: 100%; height: 400px; border: 1px solid #ddd;">
    <MResponsivePage :background-color="backgroundColor" :padding="padding">
      <div>
        <h3 style="margin: 0 0 16px 0;">自定义样式</h3>
        <p>背景色: {{ backgroundColor }}</p>
        <p>内边距: {{ padding }}</p>
      </div>
    </MResponsivePage>
  </div>
  <div style="margin-top: 16px;">
    <label>
      背景色: <el-color-picker v-model="backgroundColor" style="margin-left: 8px;" />
    </label>
    <label style="margin-left: 16px;">
      内边距: <el-input v-model="padding" style="width: 80px; margin-left: 8px;" />
    </label>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <div>
    <div style="width: 100%; height: 400px; border: 1px solid #ddd;">
      <MResponsivePage :background-color="backgroundColor" :padding="padding">
        <div>
          <h3 style="margin: 0 0 16px 0;">自定义样式</h3>
          <p>背景色: {{ backgroundColor }}</p>
          <p>内边距: {{ padding }}</p>
        </div>
      </MResponsivePage>
    </div>
    <div style="margin-top: 16px;">
      <label>
        背景色: <el-color-picker v-model="backgroundColor" style="margin-left: 8px;" />
      </label>
      <label style="margin-left: 16px;">
        内边距: <el-input v-model="padding" style="width: 80px; margin-left: 8px;" />
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { MResponsivePage } from '@jqkgg/m-ui'

const backgroundColor = ref('#f5f5f5')
const padding = ref('20px')
</script>
```
</CodeBlock>

## 最小/最大尺寸限制

通过 `min-width`、`min-height`、`max-width`、`max-height` 属性可以设置容器的尺寸限制。

<Demo>
  <div style="width: 100%; height: 400px; border: 1px solid #ddd;">
    <MResponsivePage 
      width="100%" 
      height="100%"
      min-width="600px"
      min-height="300px"
      max-width="1200px"
      max-height="800px"
      background-color="#e8f4f8"
    >
      <div style="padding: 20px;">
        <h3 style="margin: 0 0 16px 0;">尺寸限制</h3>
        <p>最小宽度: 600px</p>
        <p>最小高度: 300px</p>
        <p>最大宽度: 1200px</p>
        <p>最大高度: 800px</p>
      </div>
    </MResponsivePage>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MResponsivePage 
    width="100%" 
    height="100%"
    min-width="600px"
    min-height="300px"
    max-width="1200px"
    max-height="800px"
  >
    <div style="padding: 20px;">
      <h3>尺寸限制</h3>
      <p>设置了最小和最大尺寸限制</p>
    </div>
  </MResponsivePage>
</template>

<script setup>
import { MResponsivePage } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 适配不同分辨率

ResponsivePage 组件内置了响应式断点，可以适配常见的分辨率：

- **1920×1080** (2xl): 超大桌面显示器
- **1366×768** (lg/xl): 笔记本电脑
- **1024×768** (md): 平板横屏
- **768×1024** (sm): 平板竖屏
- **移动设备** (xs): 手机

组件会根据当前屏幕尺寸自动应用相应的样式。

<Demo>
  <div style="width: 100%; height: 400px; border: 1px solid #ddd;">
    <MResponsivePage background-color="#fff5e6">
      <div style="padding: 20px;">
        <h3 style="margin: 0 0 16px 0;">响应式断点</h3>
        <p>组件会根据屏幕尺寸自动适配：</p>
        <ul style="margin: 10px 0; padding-left: 20px;">
          <li>xs: 0px - 移动设备</li>
          <li>sm: 640px - 平板竖屏</li>
          <li>md: 768px - 平板横屏</li>
          <li>lg: 1024px - 笔记本电脑</li>
          <li>xl: 1280px - 桌面显示器</li>
          <li>2xl: 1920px - 超大桌面</li>
        </ul>
      </div>
    </MResponsivePage>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MResponsivePage>
    <div style="padding: 20px;">
      <h3>响应式断点</h3>
      <p>组件会根据屏幕尺寸自动适配不同分辨率</p>
    </div>
  </MResponsivePage>
</template>

<script setup>
import { MResponsivePage } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| width | 容器宽度 | number \| string | — | '100%' |
| height | 容器高度 | number \| string | — | '100%' |
| minWidth | 最小宽度 | number \| string | — | — |
| minHeight | 最小高度 | number \| string | — | — |
| maxWidth | 最大宽度 | number \| string | — | — |
| maxHeight | 最大高度 | number \| string | — | — |
| fullscreen | 是否全屏 | boolean | — | false |
| backgroundColor | 背景颜色 | string | — | — |
| padding | 内边距 | number \| string | — | — |
| breakpoints | 自定义断点配置 | ResponsiveBreakpoints | — | `{ xs: 0, sm: 640, md: 768, lg: 1024, xl: 1280, '2xl': 1920 }` |
| enableScale | 是否启用响应式缩放 | boolean | — | false |
| baseWidth | 基准宽度（用于缩放计算） | number | — | 1920 |
| baseHeight | 基准高度（用于缩放计算） | number | — | 1080 |
| scaleMode | 缩放模式 | string | width / height / both / fit | fit |

### ResponsiveBreakpoints

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| xs | 超小屏幕（手机） | number | 0 |
| sm | 小屏幕（平板竖屏） | number | 640 |
| md | 中等屏幕（平板横屏） | number | 768 |
| lg | 大屏幕（桌面） | number | 1024 |
| xl | 超大屏幕（大桌面） | number | 1280 |
| 2xl | 2倍超大屏幕（超大桌面） | number | 1920 |

### 缩放模式说明

- **fit**: 按比例缩放，保持宽高比，取宽度和高度的最小缩放比例
- **width**: 仅按宽度缩放
- **height**: 仅按高度缩放
- **both**: 同时按宽度和高度缩放，取较小的缩放比例

### 使用场景

1. **固定设计稿适配**: 当设计稿基于固定分辨率（如 1920×1080）时，使用 `enable-scale` 可以自动适配不同分辨率
2. **响应式布局**: 使用默认的响应式断点，在不同屏幕尺寸下显示不同的布局
3. **全屏应用**: 使用 `fullscreen` 属性创建全屏应用容器
4. **尺寸限制**: 通过最小/最大尺寸属性控制容器的显示范围

