# ChartBar 柱状图

用于展示数据的柱状图组件，支持横向和纵向显示，支持多个系列数据。

<script setup>
import { ref } from 'vue'

const series1 = ref([
  { name: '系列1', data: [100, 200, 300, 400, 500] }
])

const categories1 = ref(['类别1', '类别2', '类别3', '类别4', '类别5'])

const series2 = ref([
  { name: '鉴定人次', data: [2131, 2131, 2131, 2131, 2131, 2131, 2131] },
  { name: '获证人次', data: [2324, 2324, 2324, 2324, 2324, 2324, 2324] }
])

const categories2 = ref(['涪陵区', '渝中区', '大渡口区', '江北区', '沙坪坝区', '九龙坡区', '南岸区'])

const series3 = ref([
  { name: '系列1', data: [100, 200, 300, 400, 500] },
  { name: '系列2', data: [150, 250, 350, 450, 550] }
])

const series4 = ref([
  { name: '系列1', data: [100, 200, 300, 400, 500] },
  { name: '系列2', data: [150, 250, 350, 450, 550] },
  { name: '系列3', data: [80, 180, 280, 380, 480] }
])

const colors1 = ref([
  'rgba(66, 133, 244, 0.6)',
  'rgba(255, 193, 7, 0.8)',
  'rgba(76, 175, 80, 1)'
])

const series5 = ref([
  { name: '系列1', data: [100, 200, 300, 400, 500], color: 'rgba(255, 99, 132, 0.8)' },
  { name: '系列2', data: [150, 250, 350, 450, 550], color: 'rgba(54, 162, 235, 0.8)' }
])

const showLegend = ref(false)

const height1 = ref(400)
const barGap1 = ref(15)
const barCategoryGap1 = ref(30)

// 滚动示例数据
const scrollSeries = ref([
  { name: '系列1', data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500] },
  { name: '系列2', data: [150, 250, 350, 450, 550, 650, 750, 850, 950, 1050, 1150, 1250, 1350, 1450, 1550] }
])

const scrollCategories = ref([
  '类别1', '类别2', '类别3', '类别4', '类别5', '类别6', '类别7', '类别8',
  '类别9', '类别10', '类别11', '类别12', '类别13', '类别14', '类别15'
])
</script>

## 基础用法

基础的横向柱状图用法。

<Demo>
  <div style="width: 100%;">
    <MChartBar
      :series="series1"
      :categories="categories1"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartBar
    :series="[
      { name: '系列1', data: [100, 200, 300, 400, 500] }
    ]"
    :categories="['类别1', '类别2', '类别3', '类别4', '类别5']"
  />
</template>

<script setup>
import { MChartBar } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 多个系列

支持显示多个系列的数据，每个系列对应一个柱子。

<Demo>
  <div style="width: 100%;">
    <MChartBar
      :series="series2"
      :categories="categories2"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartBar
    :series="[
      { name: '鉴定人次', data: [2131, 2131, 2131, 2131, 2131, 2131, 2131] },
      { name: '获证人次', data: [2324, 2324, 2324, 2324, 2324, 2324, 2324] }
    ]"
    :categories="['涪陵区', '渝中区', '大渡口区', '江北区', '沙坪坝区', '九龙坡区', '南岸区']"
  />
</template>

<script setup>
import { MChartBar } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 纵向柱状图

通过 `direction` 属性设置为 `vertical` 来显示纵向柱状图。

<Demo>
  <div style="width: 100%;">
    <MChartBar
      :series="series3"
      :categories="categories1"
      direction="vertical"
      :height="300"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartBar
    :series="[
      { name: '系列1', data: [100, 200, 300, 400, 500] },
      { name: '系列2', data: [150, 250, 350, 450, 550] }
    ]"
    :categories="['类别1', '类别2', '类别3', '类别4', '类别5']"
    direction="vertical"
    :height="300"
  />
</template>

<script setup>
import { MChartBar } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 自定义颜色

通过 `colors` 属性可以自定义柱子的颜色，支持透明度设置。

<Demo>
  <div style="width: 100%;">
    <MChartBar
      :series="series4"
      :categories="categories1"
      :colors="colors1"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartBar
    :series="[
      { name: '系列1', data: [100, 200, 300, 400, 500] },
      { name: '系列2', data: [150, 250, 350, 450, 550] },
      { name: '系列3', data: [80, 180, 280, 380, 480] }
    ]"
    :categories="['类别1', '类别2', '类别3', '类别4', '类别5']"
    :colors="[
      'rgba(66, 133, 244, 0.6)',
      'rgba(255, 193, 7, 0.8)',
      'rgba(76, 175, 80, 1)'
    ]"
  />
</template>

<script setup>
import { MChartBar } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 系列自定义颜色

每个系列可以单独设置颜色，通过 `series` 中的 `color` 属性。

<Demo>
  <div style="width: 100%;">
    <MChartBar
      :series="series5"
      :categories="categories1"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartBar
    :series="[
      { name: '系列1', data: [100, 200, 300, 400, 500], color: 'rgba(255, 99, 132, 0.8)' },
      { name: '系列2', data: [150, 250, 350, 450, 550], color: 'rgba(54, 162, 235, 0.8)' }
    ]"
    :categories="['类别1', '类别2', '类别3', '类别4', '类别5']"
  />
</template>

<script setup>
import { MChartBar } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 隐藏图例

通过 `show-legend` 属性可以隐藏图例。

<Demo>
  <div style="width: 100%;">
    <MChartBar
      :series="series3"
      :categories="categories1"
      :show-legend="showLegend"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartBar
    :series="[
      { name: '系列1', data: [100, 200, 300, 400, 500] },
      { name: '系列2', data: [150, 250, 350, 450, 550] }
    ]"
    :categories="['类别1', '类别2', '类别3', '类别4', '类别5']"
    :show-legend="false"
  />
</template>

<script setup>
import { MChartBar } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 自定义尺寸和间距

通过 `height`、`width`、`bar-gap` 和 `bar-category-gap` 属性可以自定义图表尺寸和柱子间距。

<Demo>
  <div style="width: 100%;">
    <MChartBar
      :series="series3"
      :categories="categories1"
      :height="height1"
      :bar-gap="barGap1"
      :bar-category-gap="barCategoryGap1"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartBar
    :series="[
      { name: '系列1', data: [100, 200, 300, 400, 500] },
      { name: '系列2', data: [150, 250, 350, 450, 550] }
    ]"
    :categories="['类别1', '类别2', '类别3', '类别4', '类别5']"
    :height="400"
    :bar-gap="15"
    :bar-category-gap="30"
  />
</template>

<script setup>
import { MChartBar } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 滚动展示

当数据量较大时，组件支持自动滚动展示。鼠标悬浮时暂停滚动，移开后恢复滚动。

<Demo>
  <div style="width: 100%;">
    <MChartBar
      :series="scrollSeries"
      :categories="scrollCategories"
      :scroll-threshold="10"
      :scroll-speed="1"
      :scroll-interval="2000"
      :visible-count="8"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartBar
    :series="[
      { name: '系列1', data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500] },
      { name: '系列2', data: [150, 250, 350, 450, 550, 650, 750, 850, 950, 1050, 1150, 1250, 1350, 1450, 1550] }
    ]"
    :categories="[
      '类别1', '类别2', '类别3', '类别4', '类别5', '类别6', '类别7', '类别8',
      '类别9', '类别10', '类别11', '类别12', '类别13', '类别14', '类别15'
    ]"
    :scroll-threshold="10"
    :scroll-speed="1"
    :scroll-interval="2000"
    :visible-count="8"
  />
</template>

<script setup>
import { MChartBar } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 完全自定义配置

通过 `options` 属性可以完全自定义 ECharts 配置项，传入后将以 `options` 为准，忽略其他属性。这允许你使用 ECharts 的所有功能。

<Demo>
  <div style="width: 100%; height: 400px;">
    <MChartBar
      :options="{
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: '#83bff6' },
                { offset: 0.5, color: '#188df0' },
                { offset: 1, color: '#188df0' }
              ]
            }
          },
          emphasis: {
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  { offset: 0, color: '#2378f7' },
                  { offset: 0.7, color: '#2378f7' },
                  { offset: 1, color: '#83bff6' }
                ]
              }
            }
          }
        }]
      }"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartBar
    :options="{
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: '#83bff6' },
              { offset: 0.5, color: '#188df0' },
              { offset: 1, color: '#188df0' }
            ]
          }
        }
      }]
    }"
  />
</template>

<script setup>
import { MChartBar } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

**注意**：使用 `options` 时，需要参考 [ECharts 柱状图配置项文档](https://echarts.apache.org/zh/option.html#series-bar.type) 来配置所有选项。

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| series | 系列数据，默认一个系列 | ChartBarSeries[] | — | `[{ name: '系列1', data: [100, 200, 300, 400, 500] }]` |
| categories | 类别数据 | string[] | — | `['类别1', '类别2', '类别3', '类别4', '类别5']` |
| direction | 方向，横向或纵向 | ChartBarDirection | horizontal / vertical | horizontal |
| colors | 颜色数组，默认三个颜色，作用于柱子 | string[] | — | `['rgba(66, 133, 244, 0.8)', 'rgba(255, 193, 7, 0.8)', 'rgba(76, 175, 80, 0.8)']` |
| showLegend | 是否显示图例 | boolean | — | true |
| height | 图表高度 | number \| string | — | 'auto' |
| width | 图表宽度 | number \| string | — | '100%' |
| barGap | 同一类别柱子间距 | number | — | 10 |
| barCategoryGap | 柱子间距 | number | — | 20 |
| scrollThreshold | 启用滚动的数据量阈值，超过此数量自动启用滚动 | number | — | 10 |
| scrollSpeed | 滚动速度（每次滚动的数据项数量） | number | — | 1 |
| scrollInterval | 滚动间隔（毫秒） | number | — | 2000 |
| enableScroll | 是否启用滚动（undefined 表示自动判断） | boolean \| undefined | — | undefined |
| visibleCount | 每次显示的数据项数量 | number | — | 8 |
| options | 完全自定义的 ECharts 配置项，传入后将以 options 为准，忽略其他属性 | object<br>**注意**：`options` 的类型定义请参考 [ECharts 柱状图配置项文档](https://echarts.apache.org/zh/option.html#series-bar.type) | — | undefined |


### ChartBarSeries

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| name | 系列名称 | string | — | — |
| data | 系列数据数组 | number[] | — | — |
| color | 系列颜色（可选，会覆盖 colors 中的对应颜色） | string | — | — |

