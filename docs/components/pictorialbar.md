# ChartPictorialBar 锥形柱状图

用于展示数据的锥形柱状图组件，使用平滑的钟形曲线形状，支持自定义颜色、形状等配置。

<script setup>
import { ref } from 'vue'

// 基础数据
const basicData = ref([
  { name: '系列1', data: [20, 30, 10, 10, 30] }
])

const basicCategories = ref(['运行', '空闲', '停机', '待机', '空运行'])

// 自定义颜色数据
const customColorData = ref([
  { 
    name: '系列1', 
    data: [20, 30, 10, 10, 30],
    color: 'rgba(76, 175, 80, 0.8)'
  }
])

// 多个系列数据
const multiSeriesData = ref([
  { name: '系列1', data: [20, 30, 10, 10, 30] },
  { name: '系列2', data: [15, 25, 15, 15, 25] }
])

// 不同颜色配置
const colors1 = ref([
  'rgba(76, 175, 80, 0.8)',   // 绿色
  'rgba(33, 150, 243, 0.8)',  // 蓝色
  'rgba(158, 158, 158, 0.8)', // 灰色
  'rgba(255, 193, 7, 0.8)',   // 黄色
  'rgba(255, 152, 0, 0.8)'    // 橙色
])

// 自定义形状数据
const customShapeData = ref([
  { 
    name: '系列1', 
    data: [20, 30, 10, 10, 30],
    symbol: 'roundRect',
    symbolSize: [60, 100]
  }
])
</script>

## 基础用法

基础的锥形柱状图用法，使用平滑的钟形曲线形状。

<Demo>
  <div style="width: 100%; height: 400px;">
    <MChartPictorialBar
      :series="basicData"
      :categories="basicCategories"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartPictorialBar
    :series="[
      { name: '系列1', data: [20, 30, 10, 10, 30] }
    ]"
    :categories="['运行', '空闲', '停机', '待机', '空运行']"
  />
</template>

<script setup>
import { MChartPictorialBar } from '@jqkgg/m-ui'
</script>
```

</CodeBlock>

## 自定义颜色

可以自定义每个系列的颜色。

<Demo>
  <div style="width: 100%; height: 400px;">
    <MChartPictorialBar
      :series="customColorData"
      :categories="basicCategories"
      :colors="colors1"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartPictorialBar
    :series="[
      { 
        name: '系列1', 
        data: [20, 30, 10, 10, 30],
        color: 'rgba(76, 175, 80, 0.8)'
      }
    ]"
    :categories="['运行', '空闲', '停机', '待机', '空运行']"
    :colors="[
      'rgba(76, 175, 80, 0.8)',
      'rgba(33, 150, 243, 0.8)',
      'rgba(158, 158, 158, 0.8)',
      'rgba(255, 193, 7, 0.8)',
      'rgba(255, 152, 0, 0.8)'
    ]"
  />
</template>

<script setup>
import { MChartPictorialBar } from '@jqkgg/m-ui'
</script>
```

</CodeBlock>

## 多个系列

支持显示多个系列的数据。

<Demo>
  <div style="width: 100%; height: 400px;">
    <MChartPictorialBar
      :series="multiSeriesData"
      :categories="basicCategories"
      :show-legend="true"
      legend-position="top"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartPictorialBar
    :series="[
      { name: '系列1', data: [20, 30, 10, 10, 30] },
      { name: '系列2', data: [15, 25, 15, 15, 25] }
    ]"
    :categories="['运行', '空闲', '停机', '待机', '空运行']"
    :show-legend="true"
    legend-position="top"
  />
</template>

<script setup>
import { MChartPictorialBar } from '@jqkgg/m-ui'
</script>
```

</CodeBlock>

## 自定义形状

可以自定义柱子的形状，支持多种内置形状或自定义 SVG 路径。

<Demo>
  <div style="width: 100%; height: 400px;">
    <MChartPictorialBar
      :series="customShapeData"
      :categories="basicCategories"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartPictorialBar
    :series="[
      { 
        name: '系列1', 
        data: [20, 30, 10, 10, 30],
        symbol: 'roundRect',
        symbolSize: [60, 100]
      }
    ]"
    :categories="['运行', '空闲', '停机', '待机', '空运行']"
  />
</template>

<script setup>
import { MChartPictorialBar } from '@jqkgg/m-ui'
</script>
```

</CodeBlock>

## 自定义背景

可以自定义图表的背景颜色。

<Demo>
  <div style="width: 100%; height: 400px;">
    <MChartPictorialBar
      :series="basicData"
      :categories="basicCategories"
      background-color="rgba(173, 216, 230, 0.3)"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartPictorialBar
    :series="series"
    :categories="categories"
    background-color="rgba(173, 216, 230, 0.3)"
  />
</template>

<script setup>
import { MChartPictorialBar } from '@jqkgg/m-ui'
</script>
```

</CodeBlock>

## 隐藏标签

可以隐藏数据标签。

<Demo>
  <div style="width: 100%; height: 400px;">
    <MChartPictorialBar
      :series="basicData"
      :categories="basicCategories"
      :show-label="false"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartPictorialBar
    :series="series"
    :categories="categories"
    :show-label="false"
  />
</template>

<script setup>
import { MChartPictorialBar } from '@jqkgg/m-ui'
</script>
```

</CodeBlock>

## 自定义网格和坐标轴

可以自定义网格位置、坐标轴标签等配置。

<Demo>
  <div style="width: 100%; height: 400px;">
    <MChartPictorialBar
      :series="basicData"
      :categories="basicCategories"
      :grid="{
        left: '15%',
        right: '15%',
        top: '20%',
        bottom: '20%'
      }"
      :x-axis="{
        show: true,
        axisLabel: {
          rotate: 0,
          interval: 0
        }
      }"
      :y-axis="{
        show: true,
        name: '百分比',
        nameLocation: 'middle'
      }"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartPictorialBar
    :series="series"
    :categories="categories"
    :grid="{
      left: '15%',
      right: '15%',
      top: '20%',
      bottom: '20%'
    }"
    :x-axis="{
      show: true,
      axisLabel: {
        rotate: 0,
        interval: 0
      }
    }"
    :y-axis="{
      show: true,
      name: '百分比',
      nameLocation: 'middle'
    }"
  />
</template>

<script setup>
import { MChartPictorialBar } from '@jqkgg/m-ui'
</script>
```

</CodeBlock>

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| series | 系列数据数组 | `ChartPictorialBarSeries[]` | `[]` |
| categories | X轴类别数据 | `string[]` | `[]` |
| colors | 颜色数组 | `string[]` | `[]` |
| showLegend | 是否显示图例 | `boolean` | `false` |
| legendPosition | 图例位置 | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` |
| height | 图表高度 | `number \| string` | `400` |
| width | 图表宽度 | `number \| string` | `'100%'` |
| backgroundColor | 背景颜色 | `string` | `'rgba(173, 216, 230, 0.3)'` |
| showGrid | 是否显示网格 | `boolean` | `true` |
| gridLineStyle | 网格线样式 | `object` | `{ color: 'rgba(0, 0, 0, 0.1)', width: 1, type: 'dashed' }` |
| showTooltip | 是否显示工具提示 | `boolean` | `true` |
| tooltipFormatter | 工具提示格式化函数 | `(params: any) => string` | `undefined` |
| showLabel | 是否显示数据标签 | `boolean` | `true` |
| yAxisMin | Y轴最小值 | `number` | `0` |
| yAxisMax | Y轴最大值 | `number` | `undefined` |
| yAxisSplitNumber | Y轴分割段数 | `number` | `6` |
| grid | 网格配置 | `object` | `{ left: '10%', right: '10%', top: '15%', bottom: '15%' }` |
| xAxis | X轴配置 | `object` | `{ show: true, axisLabel: { rotate: 0, interval: 'auto' } }` |
| yAxis | Y轴配置 | `object` | `{ show: true, name: '', nameLocation: 'end' }` |
| barGap | 柱子间距 | `number` | `0` |
| barCategoryGap | 同一类别柱子间距 | `number \| string` | `'20%'` |
| animation | 是否启用动画 | `boolean` | `true` |
| animationDuration | 动画持续时间（毫秒） | `number` | `1000` |
| options | 完全自定义的 ECharts 配置项 | `any` | `undefined` |

### ChartPictorialBarSeries

| 参数 | 说明 | 类型 | 必填 |
|------|------|------|------|
| name | 系列名称 | `string` | 是 |
| data | 数据数组 | `number[]` | 是 |
| color | 自定义颜色 | `string` | 否 |
| symbol | 形状类型 | `string` | 否 |
| symbolSize | 形状大小 | `number \| [number, number]` | 否 |
| symbolPosition | 形状位置 | `'start' \| 'end' \| 'center'` | 否 |
| symbolRotate | 形状旋转角度 | `number` | 否 |
| symbolOffset | 形状偏移 | `[number, number]` | 否 |
| symbolPath | 自定义 SVG 路径 | `string` | 否 |

### 形状类型

支持的形状类型包括：
- `'rect'` - 矩形
- `'roundRect'` - 圆角矩形
- `'triangle'` - 三角形
- `'diamond'` - 菱形
- `'pin'` - 大头针
- `'arrow'` - 箭头
- `'circle'` - 圆形
- `'path://'` - 自定义 SVG 路径（默认，用于锥形）

### 注意事项

1. 锥形柱状图使用 ECharts 的 `pictorialBar` 类型实现
2. 默认使用平滑的钟形曲线路径（通过 SVG 路径实现）
3. 可以通过 `symbolPath` 自定义 SVG 路径来创建不同的形状
4. 数据标签默认显示在柱子顶部，格式为 `值%`
5. 可以通过 `options` 属性传入完整的 ECharts 配置项进行深度自定义

