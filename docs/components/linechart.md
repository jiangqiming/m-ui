# ChartLine 折线图

用于展示数据的折线图组件，支持多个系列数据、平滑曲线、面积填充等功能。

<script setup>
import { ref } from 'vue'

const series1 = ref([
  { name: '系列1', data: [100, 200, 300, 400, 500] }
])

const categories1 = ref(['类别1', '类别2', '类别3', '类别4', '类别5'])

const series2 = ref([
  { name: '系列1', data: [100, 200, 300, 400, 500] },
  { name: '系列2', data: [150, 250, 350, 450, 550] }
])

const series3 = ref([
  { name: '系列1', data: [100, 200, 300, 400, 500], smooth: true },
  { name: '系列2', data: [150, 250, 350, 450, 550], smooth: true }
])

const series4 = ref([
  { name: '系列1', data: [100, 200, 300, 400, 500], areaStyle: true },
  { name: '系列2', data: [150, 250, 350, 450, 550], areaStyle: true }
])

const series5 = ref([
  { name: '系列1', data: [100, 200, 300, 400, 500], smooth: true, areaStyle: true, areaOpacity: 0.5 },
  { name: '系列2', data: [150, 250, 350, 450, 550], smooth: true, areaStyle: true, areaOpacity: 0.5 }
])

const series6 = ref([
  { name: '系列1', data: [100, 200, 300, 400, 500], lineType: 'dashed', lineWidth: 3 },
  { name: '系列2', data: [150, 250, 350, 450, 550], lineType: 'dotted', lineWidth: 3 }
])

const series7 = ref([
  { name: '系列1', data: [100, 200, 300, 400, 500], showSymbol: true, symbolSize: 8 },
  { name: '系列2', data: [150, 250, 350, 450, 550], showSymbol: true, symbolSize: 8 }
])

const categories2 = ref(['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'])

const series8 = ref([
  { name: '销售额', data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330] }
])
</script>

## 基础用法

基础的折线图用法。

<Demo>
  <div style="width: 100%;">
    <MChartLine
      :series="series1"
      :categories="categories1"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartLine
    :series="[
      { name: '系列1', data: [100, 200, 300, 400, 500] }
    ]"
    :categories="['类别1', '类别2', '类别3', '类别4', '类别5']"
  />
</template>

<script setup>
import { MChartLine } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 多个系列

支持显示多个系列的数据，每个系列对应一条折线。

<Demo>
  <div style="width: 100%;">
    <MChartLine
      :series="series2"
      :categories="categories1"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartLine
    :series="[
      { name: '系列1', data: [100, 200, 300, 400, 500] },
      { name: '系列2', data: [150, 250, 350, 450, 550] }
    ]"
    :categories="['类别1', '类别2', '类别3', '类别4', '类别5']"
  />
</template>

<script setup>
import { MChartLine } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 平滑曲线

通过 `smooth` 属性可以启用平滑曲线。

<Demo>
  <div style="width: 100%;">
    <MChartLine
      :series="[
        { name: '系列1', data: [100, 200, 700, 400, 500], smooth: true },
        { name: '系列2', data: [150, 250, 650, 450, 550], smooth: true }
      ]"
      :categories="categories1"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartLine
    :series="[
      { name: '系列1', data: [100, 200, 700, 400, 500], smooth: true },
      { name: '系列2', data: [150, 250, 650, 450, 550], smooth: true }
    ]"
    :categories="['类别1', '类别2', '类别3', '类别4', '类别5']"
  />
</template>
```
</CodeBlock>

## 面积填充

通过 `area-style` 属性可以启用面积填充。

<Demo>
  <div style="width: 100%;">
    <MChartLine
      :series="series4"
      :categories="categories1"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartLine
    :series="[
      { name: '系列1', data: [100, 200, 300, 400, 500], areaStyle: true },
      { name: '系列2', data: [150, 250, 350, 450, 550], areaStyle: true }
    ]"
    :categories="['类别1', '类别2', '类别3', '类别4', '类别5']"
  />
</template>
```
</CodeBlock>

## 平滑曲线 + 面积填充

可以同时启用平滑曲线和面积填充。

<Demo>
  <div style="width: 100%;">
    <MChartLine
      :series="[
      { name: '系列1', data: [100, 200, 700, 400, 500], smooth: true, areaStyle: true, areaOpacity: 0.5 },
      { name: '系列2', data: [150, 250, 650, 450, 550], smooth: true, areaStyle: true, areaOpacity: 0.5 }
    ]"
      :categories="categories1"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartLine
    :series="[
      { name: '系列1', data: [100, 200, 700, 400, 500], smooth: true, areaStyle: true, areaOpacity: 0.5 },
      { name: '系列2', data: [150, 250, 650, 450, 550], smooth: true, areaStyle: true, areaOpacity: 0.5 }
    ]"
    :categories="['类别1', '类别2', '类别3', '类别4', '类别5']"
  />
</template>
```
</CodeBlock>

## 自定义线条样式

通过 `line-type` 和 `line-width` 属性可以自定义线条样式。

<Demo>
  <div style="width: 100%;">
    <MChartLine
      :series="series6"
      :categories="categories1"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartLine
    :series="[
      { name: '系列1', data: [100, 200, 300, 400, 500], lineType: 'dashed', lineWidth: 3 },
      { name: '系列2', data: [150, 250, 350, 450, 550], lineType: 'dotted', lineWidth: 3 }
    ]"
    :categories="['类别1', '类别2', '类别3', '类别4', '类别5']"
  />
</template>
```
</CodeBlock>

## 自定义标记点

通过 `show-symbol` 和 `symbol-size` 属性可以自定义标记点。

<Demo>
  <div style="width: 100%;">
    <MChartLine
      :series="series7"
      :categories="categories1"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartLine
    :series="[
      { name: '系列1', data: [100, 200, 300, 400, 500], showSymbol: true, symbolSize: 8 },
      { name: '系列2', data: [150, 250, 350, 450, 550], showSymbol: true, symbolSize: 8 }
    ]"
    :categories="['类别1', '类别2', '类别3', '类别4', '类别5']"
  />
</template>
```
</CodeBlock>

## 隐藏图例

通过 `show-legend` 属性可以隐藏图例。

<Demo>
  <div style="width: 100%;">
    <MChartLine
      :series="series2"
      :categories="categories1"
      :show-legend="false"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartLine
    :series="[
      { name: '系列1', data: [100, 200, 300, 400, 500] },
      { name: '系列2', data: [150, 250, 350, 450, 550] }
    ]"
    :categories="['类别1', '类别2', '类别3', '类别4', '类别5']"
    :show-legend="false"
  />
</template>
```
</CodeBlock>

## 自定义图例位置

通过 `legend-position` 属性可以自定义图例位置。

<Demo>
  <div style="width: 100%;">
    <MChartLine
      :series="series2"
      :categories="categories1"
      legend-position="bottom"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartLine
    :series="[
      { name: '系列1', data: [100, 200, 300, 400, 500] },
      { name: '系列2', data: [150, 250, 350, 450, 550] }
    ]"
    :categories="['类别1', '类别2', '类别3', '类别4', '类别5']"
    legend-position="bottom"
  />
</template>
```
</CodeBlock>

## 显示数据标签

通过 `show-label` 属性可以显示数据标签。

<Demo>
  <div style="width: 100%;">
    <MChartLine
      :series="series2"
      :categories="categories1"
      :show-label="true"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartLine
    :series="[
      { name: '系列1', data: [100, 200, 300, 400, 500] },
      { name: '系列2', data: [150, 250, 350, 450, 550] }
    ]"
    :categories="['类别1', '类别2', '类别3', '类别4', '类别5']"
    :show-label="true"
  />
</template>
```
</CodeBlock>

## 隐藏网格

通过 `show-grid` 属性可以隐藏网格。

<Demo>
  <div style="width: 100%;">
    <MChartLine
      :series="series2"
      :categories="categories1"
      :show-grid="false"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartLine
    :series="[
      { name: '系列1', data: [100, 200, 300, 400, 500] },
      { name: '系列2', data: [150, 250, 350, 450, 550] }
    ]"
    :categories="['类别1', '类别2', '类别3', '类别4', '类别5']"
    :show-grid="false"
  />
</template>
```
</CodeBlock>

## 自定义网格样式

通过 `grid-line-style` 属性可以自定义网格样式。

<Demo>
  <div style="width: 100%;">
    <MChartLine
      :series="series2"
      :categories="categories1"
      :grid-line-style="{
        color: 'rgba(66, 133, 244, 0.3)',
        width: 2,
        type: 'solid'
      }"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartLine
    :series="[
      { name: '系列1', data: [100, 200, 300, 400, 500] },
      { name: '系列2', data: [150, 250, 350, 450, 550] }
    ]"
    :categories="['类别1', '类别2', '类别3', '类别4', '类别5']"
    :grid-line-style="{
      color: 'rgba(66, 133, 244, 0.3)',
      width: 2,
      type: 'solid'
    }"
  />
</template>
```
</CodeBlock>

## 自定义Y轴范围

通过 `y-axis-min` 和 `y-axis-max` 属性可以自定义Y轴范围。

<Demo>
  <div style="width: 100%;">
    <MChartLine
      :series="series2"
      :categories="categories1"
      :y-axis-min="0"
      :y-axis-max="600"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartLine
    :series="[
      { name: '系列1', data: [100, 200, 300, 400, 500] },
      { name: '系列2', data: [150, 250, 350, 450, 550] }
    ]"
    :categories="['类别1', '类别2', '类别3', '类别4', '类别5']"
    :y-axis-min="0"
    :y-axis-max="600"
  />
</template>
```
</CodeBlock>

## X轴标签旋转

通过 `x-axis` 属性可以配置X轴标签旋转。

<Demo>
  <div style="width: 100%;">
    <MChartLine
      :series="series8"
      :categories="categories2"
      :x-axis="{
        axisLabel: {
          rotate: 45
        }
      }"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartLine
    :series="[
      { name: '销售额', data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330] }
    ]"
    :categories="['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']"
    :x-axis="{
      axisLabel: {
        rotate: 45
      }
    }"
  />
</template>
```
</CodeBlock>

## Y轴名称

通过 `y-axis` 属性可以配置Y轴名称。

<Demo>
  <div style="width: 100%;">
    <MChartLine
      :series="series8"
      :categories="categories2"
      :y-axis="{
        name: '销售额（万元）',
        nameLocation: 'end'
      }"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartLine
    :series="[
      { name: '销售额', data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330] }
    ]"
    :categories="['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']"
    :y-axis="{
      name: '销售额（万元）',
      nameLocation: 'end'
    }"
  />
</template>
```
</CodeBlock>

## 自定义颜色

通过 `colors` 属性可以自定义颜色数组，也可以通过系列数据的 `color` 属性为每个系列单独设置颜色。

<Demo>
  <div style="width: 100%;">
    <MChartLine
      :series="[
        { name: '系列1', data: [100, 200, 300, 400, 500], color: 'rgba(255, 99, 132, 0.8)' },
        { name: '系列2', data: [150, 250, 350, 450, 550], color: 'rgba(54, 162, 235, 0.8)' }
      ]"
      :categories="categories1"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartLine
    :series="[
      { name: '系列1', data: [100, 200, 300, 400, 500], color: 'rgba(255, 99, 132, 0.8)' },
      { name: '系列2', data: [150, 250, 350, 450, 550], color: 'rgba(54, 162, 235, 0.8)' }
    ]"
    :categories="['类别1', '类别2', '类别3', '类别4', '类别5']"
  />
</template>
```
</CodeBlock>

## 自定义网格边距

通过 `grid` 属性可以自定义网格边距。

<Demo>
  <div style="width: 100%;">
    <MChartLine
      :series="series2"
      :categories="categories1"
      :grid="{
        left: '5%',
        right: '5%',
        top: '10%',
        bottom: '10%'
      }"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartLine
    :series="[
      { name: '系列1', data: [100, 200, 300, 400, 500] },
      { name: '系列2', data: [150, 250, 350, 450, 550] }
    ]"
    :categories="['类别1', '类别2', '类别3', '类别4', '类别5']"
    :grid="{
      left: '5%',
      right: '5%',
      top: '10%',
      bottom: '10%'
    }"
  />
</template>
```
</CodeBlock>

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| series | 系列数据数组 | [ChartLineSeries[]](#ChartLineSeries) | — | `[{ name: '系列1', data: [100, 200, 300, 400, 500] }]` |
| categories | X轴类别数据 | string[] | — | `['类别1', '类别2', '类别3', '类别4', '类别5']` |
| colors | 颜色数组 | string[] | — | `['rgba(66, 133, 244, 0.8)', ...]` |
| showLegend | 是否显示图例 | boolean | — | `true` |
| legendPosition | 图例位置 | string | top / bottom / left / right | `'top'` |
| height | 图表高度 | number \| string | — | `400` |
| width | 图表宽度 | number \| string | — | `'100%'` |
| backgroundColor | 背景颜色 | string | — | `'transparent'` |
| showGrid | 是否显示网格 | boolean | — | `true` |
| gridLineStyle | 网格线样式 | [GridLineStyle](#GridLineStyle) | — | `{ color: 'rgba(0, 0, 0, 0.1)', width: 1, type: 'dashed' }` |
| showTooltip | 是否显示工具提示 | boolean | — | `true` |
| tooltipFormatter | 工具提示格式化函数 | (params: any) => string | — | `undefined` |
| showLabel | 是否显示数据标签 | boolean | — | `false` |
| yAxisMin | Y轴最小值 | number | — | `undefined` |
| yAxisMax | Y轴最大值 | number | — | `undefined` |
| yAxisSplitNumber | Y轴分割段数 | number | — | `5` |
| grid | 网格配置 | [Grid](#Grid) | — | `{ left: '10%', right: '10%', top: '15%', bottom: '15%' }` |
| xAxis | X轴配置 | [XAxis](#XAxis) | — | `{ show: true, axisLabel: { rotate: 0, interval: 'auto' } }` |
| yAxis | Y轴配置 | [YAxis](#YAxis) | — | `{ show: true, name: '', nameLocation: 'end' }` |

### ChartLineSeries {#ChartLineSeries}

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| name | 系列名称 | string | — | — |
| data | 数据数组 | number[] | — | — |
| color | 自定义颜色 | string | — | — |
| smooth | 是否平滑曲线 | boolean | — | `false` |
| areaStyle | 是否显示面积 | boolean | — | `false` |
| areaOpacity | 面积填充透明度（0-1） | number | — | `0.3` |
| lineWidth | 线条宽度 | number | — | `2` |
| lineType | 线条类型 | string | solid / dashed / dotted | `'solid'` |
| showSymbol | 是否显示标记点 | boolean | — | `true` |
| symbolSize | 标记点大小 | number | — | `6` |

### GridLineStyle {#GridLineStyle}

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| color | 网格线颜色 | string | — | `'rgba(0, 0, 0, 0.1)'` |
| width | 网格线宽度 | number | — | `1` |
| type | 网格线类型 | string | solid / dashed / dotted | `'dashed'` |

### Grid {#Grid}

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| left | 左边距 | string \| number | — | `'10%'` |
| right | 右边距 | string \| number | — | `'10%'` |
| top | 上边距 | string \| number | — | `'15%'` |
| bottom | 下边距 | string \| number | — | `'15%'` |

### XAxis {#XAxis}

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| show | 是否显示X轴 | boolean | — | `true` |
| axisLabel | X轴标签配置 | [AxisLabel](#AxisLabel) | — | `{ rotate: 0, interval: 'auto' }` |

### AxisLabel {#AxisLabel}

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| rotate | 标签旋转角度 | number | — | `0` |
| interval | 标签显示间隔 | number \| 'auto' | — | `'auto'` |

### YAxis {#YAxis}

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| show | 是否显示Y轴 | boolean | — | `true` |
| name | Y轴名称 | string | — | `''` |
| nameLocation | 名称位置 | string | start / middle / end | `'end'` |
| nameTextStyle | 名称文本样式 | [NameTextStyle](#NameTextStyle) | — | `{ color: '#666', fontSize: 12 }` |

### NameTextStyle {#NameTextStyle}

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| color | 文本颜色 | string | — | `'#666'` |
| fontSize | 字体大小 | number | — | `12` |

## 注意事项

1. **数据格式**：`series` 数组中的每个对象代表一个系列，`data` 数组的长度应该与 `categories` 数组的长度一致。

2. **颜色配置**：可以通过 `colors` 属性设置默认颜色数组，也可以通过系列数据的 `color` 属性为每个系列单独设置颜色。

3. **平滑曲线**：启用平滑曲线后，折线会变成曲线，适合展示趋势数据。

4. **面积填充**：启用面积填充后，折线下方会填充颜色，适合展示数据范围。

5. **标记点**：默认显示标记点，可以通过 `showSymbol: false` 隐藏，也可以通过 `symbolSize` 调整大小。

