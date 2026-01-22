# ChartBar3D 3D柱状图

用于展示数据的3D柱状图组件，支持渐变颜色、深色模式、自定义标签等丰富的业务场景配置。

<script setup>
import { ref } from 'vue'

const data1 = ref([297, 69])
const categories1 = ref(['等级认定', '考核鉴定'])

const data2 = ref([120, 200, 150, 80, 250])
const categories2 = ref(['类别1', '类别2', '类别3', '类别4', '类别5'])

const data3 = ref([
  { value: 297, name: '等级认定' },
  { value: 69, name: '考核鉴定' }
])

const data4 = ref([180, 220, 160, 300, 140])
const categories4 = ref(['产品A', '产品B', '产品C', '产品D', '产品E'])

const colors1 = ref({
  start: 'rgba(255, 99, 132, 1)',
  end: 'rgba(255, 159, 64, 1)'
})

const colors2 = ref([
  'rgba(66, 133, 244, 1)',
  'rgba(52, 168, 83, 1)',
  'rgba(251, 188, 5, 1)',
  'rgba(234, 67, 53, 1)',
  'rgba(156, 39, 176, 1)'
])

const darkMode = ref(true)
const showLabel = ref(true)
const unit = ref('家')
const height = ref(400)
const yAxisMax = ref(300)
</script>

## 基础用法

基础的3D柱状图用法，使用默认的蓝色到青色渐变。

<Demo>
  <div style="width: 100%;">
    <MChartBar3D
      :data="data1"
      :categories="categories1"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartBar3D
    :data="[297, 69]"
    :categories="['等级认定', '考核鉴定']"
  />
</template>

<script setup>
import { MChartBar3D } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 多个数据项

支持显示多个数据项的3D柱状图。

<Demo>
  <div style="width: 100%;">
    <MChartBar3D
      :data="data2"
      :categories="categories2"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartBar3D
    :data="[120, 200, 150, 80, 250]"
    :categories="['类别1', '类别2', '类别3', '类别4', '类别5']"
  />
</template>

<script setup>
import { MChartBar3D } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 对象数组数据

支持使用对象数组格式的数据，可以包含名称信息。

<Demo>
  <div style="width: 100%;">
    <MChartBar3D
      :data="data3"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartBar3D
    :data="[
      { value: 297, name: '等级认定' },
      { value: 69, name: '考核鉴定' }
    ]"
  />
</template>

<script setup>
import { MChartBar3D } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 自定义单位

通过 `unit` 属性可以自定义数值后面的单位显示。

<Demo>
  <div style="width: 100%;">
    <MChartBar3D
      :data="data2"
      :categories="categories2"
      unit="个"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartBar3D
    :data="[120, 200, 150, 80, 250]"
    :categories="['类别1', '类别2', '类别3', '类别4', '类别5']"
    unit="个"
  />
</template>

<script setup>
import { MChartBar3D } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 自定义渐变颜色

通过 `colors` 属性可以自定义渐变颜色，支持渐变对象配置。

<Demo>
  <div style="width: 100%;">
    <MChartBar3D
      :data="data2"
      :categories="categories2"
      :colors="colors1"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartBar3D
    :data="[120, 200, 150, 80, 250]"
    :categories="['类别1', '类别2', '类别3', '类别4', '类别5']"
    :colors="{
      start: 'rgba(255, 99, 132, 1)',
      end: 'rgba(255, 159, 64, 1)'
    }"
  />
</template>

<script setup>
import { MChartBar3D } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 多色数组

支持传入颜色数组，每个柱子会循环使用数组中的颜色。

<Demo>
  <div style="width: 100%;">
    <MChartBar3D
      :data="data4"
      :categories="categories4"
      :colors="colors2"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartBar3D
    :data="[180, 220, 160, 300, 140]"
    :categories="['产品A', '产品B', '产品C', '产品D', '产品E']"
    :colors="[
      'rgba(66, 133, 244, 1)',
      'rgba(52, 168, 83, 1)',
      'rgba(251, 188, 5, 1)',
      'rgba(234, 67, 53, 1)',
      'rgba(156, 39, 176, 1)'
    ]"
  />
</template>

<script setup>
import { MChartBar3D } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 浅色模式

通过 `dark-mode` 属性可以切换为浅色模式。

<Demo>
  <div style="width: 100%; background: #f5f5f5; padding: 20px; border-radius: 8px;">
    <MChartBar3D
      :data="data2"
      :categories="categories2"
      :dark-mode="false"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartBar3D
    :data="[120, 200, 150, 80, 250]"
    :categories="['类别1', '类别2', '类别3', '类别4', '类别5']"
    :dark-mode="false"
  />
</template>

<script setup>
import { MChartBar3D } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 隐藏标签

通过 `show-label` 属性可以隐藏数值标签。

<Demo>
  <div style="width: 100%;">
    <MChartBar3D
      :data="data2"
      :categories="categories2"
      :show-label="false"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartBar3D
    :data="[120, 200, 150, 80, 250]"
    :categories="['类别1', '类别2', '类别3', '类别4', '类别5']"
    :show-label="false"
  />
</template>

<script setup>
import { MChartBar3D } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 自定义Y轴范围

通过 `y-axis-max` 和 `y-axis-min` 属性可以自定义Y轴的范围。

<Demo>
  <div style="width: 100%;">
    <MChartBar3D
      :data="data1"
      :categories="categories1"
      :y-axis-max="300"
      :y-axis-min="0"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartBar3D
    :data="[297, 69]"
    :categories="['等级认定', '考核鉴定']"
    :y-axis-max="300"
    :y-axis-min="0"
  />
</template>

<script setup>
import { MChartBar3D } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 自定义网格线

通过 `show-grid` 和 `grid-line-style` 属性可以自定义网格线的显示和样式。

<Demo>
  <div style="width: 100%;">
    <MChartBar3D
      :data="data2"
      :categories="categories2"
      :show-grid="true"
      :grid-line-style="{
        color: 'rgba(255, 255, 255, 0.2)',
        width: 2,
        type: 'dotted'
      }"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartBar3D
    :data="[120, 200, 150, 80, 250]"
    :categories="['类别1', '类别2', '类别3', '类别4', '类别5']"
    :show-grid="true"
    :grid-line-style="{
      color: 'rgba(255, 255, 255, 0.2)',
      width: 2,
      type: 'dotted'
    }"
  />
</template>

<script setup>
import { MChartBar3D } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 自定义柱子样式

通过 `bar-width` 和 `bar-border-radius` 属性可以自定义柱子的宽度和圆角。

<Demo>
  <div style="width: 100%;">
    <MChartBar3D
      :data="data2"
      :categories="categories2"
      bar-width="60%"
      :bar-border-radius="[8, 8, 0, 0]"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartBar3D
    :data="[120, 200, 150, 80, 250]"
    :categories="['类别1', '类别2', '类别3', '类别4', '类别5']"
    bar-width="60%"
    :bar-border-radius="[8, 8, 0, 0]"
  />
</template>

<script setup>
import { MChartBar3D } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 自定义标签格式化

通过 `label-formatter` 属性可以自定义标签的显示格式。

<Demo>
  <div style="width: 100%;">
    <MChartBar3D
      :data="data2"
      :categories="categories2"
      :label-formatter="(value) => `¥${value}万`"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartBar3D
    :data="[120, 200, 150, 80, 250]"
    :categories="['类别1', '类别2', '类别3', '类别4', '类别5']"
    :label-formatter="(value) => `¥${value}万`"
  />
</template>

<script setup>
import { MChartBar3D } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 自定义背景和内边距

通过 `background-color` 和 `grid` 属性可以自定义图表的背景色和内边距。

<Demo>
  <div style="width: 100%;">
    <MChartBar3D
      :data="data2"
      :categories="categories2"
      background-color="rgba(0, 0, 0, 0.3)"
      :grid="{
        left: '15%',
        right: '15%',
        top: '15%',
        bottom: '20%'
      }"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartBar3D
    :data="[120, 200, 150, 80, 250]"
    :categories="['类别1', '类别2', '类别3', '类别4', '类别5']"
    background-color="rgba(0, 0, 0, 0.3)"
    :grid="{
      left: '15%',
      right: '15%',
      top: '15%',
      bottom: '20%'
    }"
  />
</template>

<script setup>
import { MChartBar3D } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 数据数组，可以是数字数组或对象数组 | ChartBar3DDataItem[] \| number[] | — | `[297, 69]` |
| categories | 分类标签数组 | string[] | — | `['等级认定', '考核鉴定']` |
| unit | 单位，显示在数值后面 | string | — | `'家'` |
| colors | 颜色配置，可以是单个颜色字符串、颜色数组或渐变对象 | string \| string[] \| ChartBar3DGradientColor | — | `{ start: 'rgba(66, 133, 244, 1)', end: 'rgba(0, 255, 255, 1)' }` |
| height | 图表高度 | number \| string | — | `400` |
| width | 图表宽度 | number \| string | — | `'100%'` |
| showLabel | 是否显示数值标签 | boolean | — | `true` |
| darkMode | 是否启用深色模式 | boolean | — | `true` |
| yAxisMax | Y轴最大值，不设置则自动计算 | number | — | `undefined` |
| yAxisMin | Y轴最小值 | number | — | `0` |
| yAxisSplitNumber | Y轴分割段数 | number | — | `6` |
| showGrid | 是否显示Y轴网格线 | boolean | — | `true` |
| gridLineStyle | 网格线样式 | object | — | `{ color: 'rgba(255, 255, 255, 0.1)', width: 1, type: 'dashed' }` |
| barWidth | 柱子宽度（相对于类目宽度的百分比） | number \| string | — | `'40%'` |
| barBorderRadius | 柱子圆角半径 | number \| [number, number, number, number] | — | `4` |
| showLegend | 是否显示图例 | boolean | — | `false` |
| showTooltip | 是否显示提示框 | boolean | — | `true` |
| backgroundColor | 背景颜色 | string | — | `undefined` |
| grid | 图表内边距配置 | object | — | `{ left: '10%', right: '10%', top: '10%', bottom: '15%' }` |
| depth | 3D深度（影响3D视觉效果） | number | — | `20` |
| labelFormatter | 标签格式化函数 | (value: number, index: number) => string | — | `undefined` |

### ChartBar3DDataItem

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| value | 数据值 | number | — | — |
| name | 数据名称（可选） | string | — | — |

### ChartBar3DGradientColor

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| start | 起始颜色 | string | — | — |
| end | 结束颜色 | string | — | — |

