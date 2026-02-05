# ChartRadar 雷达图

用于展示多维数据的雷达图组件，适合展示多个指标的数据对比，常用于能力评估、性能分析等场景。

<script setup>
import { ref } from 'vue'

// 基础雷达图数据
const basicSeries = ref([
  {
    name: '系列1',
    data: [100, 80, 90, 70, 85]
  }
])

const basicIndicators = ref([
  { name: '指标1', max: 100 },
  { name: '指标2', max: 100 },
  { name: '指标3', max: 100 },
  { name: '指标4', max: 100 },
  { name: '指标5', max: 100 }
])

// 多个系列数据
const multiSeries = ref([
  {
    name: '产品A',
    data: [100, 80, 90, 70, 85, 75]
  },
  {
    name: '产品B',
    data: [90, 70, 85, 95, 80, 90]
  },
  {
    name: '产品C',
    data: [85, 95, 80, 90, 75, 85]
  }
])

const multiIndicators = ref([
  { name: '性能', max: 100 },
  { name: '价格', max: 100 },
  { name: '质量', max: 100 },
  { name: '服务', max: 100 },
  { name: '设计', max: 100 },
  { name: '品牌', max: 100 }
])

// 能力评估数据
const abilitySeries = ref([
  {
    name: '当前能力',
    data: [85, 70, 90, 80, 75, 65]
  },
  {
    name: '目标能力',
    data: [95, 90, 95, 90, 90, 85]
  }
])

const abilityIndicators = ref([
  { name: '技术能力', max: 100 },
  { name: '沟通能力', max: 100 },
  { name: '团队协作', max: 100 },
  { name: '问题解决', max: 100 },
  { name: '学习能力', max: 100 },
  { name: '创新能力', max: 100 }
])

// 性能分析数据
const performanceSeries = ref([
  {
    name: '性能指标',
    data: [92, 88, 95, 85, 90, 87],
    areaStyle: true,
    areaOpacity: 0.3
  }
])

const performanceIndicators = ref([
  { name: '响应速度', max: 100 },
  { name: '稳定性', max: 100 },
  { name: '可扩展性', max: 100 },
  { name: '安全性', max: 100 },
  { name: '易用性', max: 100 },
  { name: '兼容性', max: 100 }
])

const showArea = ref(true)
const showSplitArea = ref(true)
const showLabel = ref(false)
</script>

## 基础用法

基础的雷达图用法，展示单个系列的多维度数据。

<Demo>
  <div style="width: 100%; height: 500px;">
    <MChartRadar
      :series="basicSeries"
      :indicators="basicIndicators"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartRadar
    :series="[
      { name: '系列1', data: [100, 80, 90, 70, 85] }
    ]"
    :indicators="[
      { name: '指标1', max: 100 },
      { name: '指标2', max: 100 },
      { name: '指标3', max: 100 },
      { name: '指标4', max: 100 },
      { name: '指标5', max: 100 }
    ]"
  />
</template>

<script setup>
import { MChartRadar } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 多个系列

支持显示多个系列的数据，用于对比不同系列在各维度上的表现。

<Demo>
  <div style="width: 100%; height: 500px;">
    <MChartRadar
      :series="multiSeries"
      :indicators="multiIndicators"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartRadar
    :series="[
      { name: '产品A', data: [100, 80, 90, 70, 85, 75] },
      { name: '产品B', data: [90, 70, 85, 95, 80, 90] },
      { name: '产品C', data: [85, 95, 80, 90, 75, 85] }
    ]"
    :indicators="[
      { name: '性能', max: 100 },
      { name: '价格', max: 100 },
      { name: '质量', max: 100 },
      { name: '服务', max: 100 },
      { name: '设计', max: 100 },
      { name: '品牌', max: 100 }
    ]"
  />
</template>

<script setup>
import { MChartRadar } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 能力评估

雷达图非常适合用于能力评估，可以直观地展示当前能力和目标能力的差距。

<Demo>
  <div style="width: 100%; height: 500px;">
    <MChartRadar
      :series="abilitySeries"
      :indicators="abilityIndicators"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartRadar
    :series="[
      { name: '当前能力', data: [85, 70, 90, 80, 75, 65] },
      { name: '目标能力', data: [95, 90, 95, 90, 90, 85] }
    ]"
    :indicators="[
      { name: '技术能力', max: 100 },
      { name: '沟通能力', max: 100 },
      { name: '团队协作', max: 100 },
      { name: '问题解决', max: 100 },
      { name: '学习能力', max: 100 },
      { name: '创新能力', max: 100 }
    ]"
  />
</template>

<script setup>
import { MChartRadar } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 面积填充

通过 `area-style` 属性可以启用面积填充，使数据区域更加突出。

<Demo>
  <div style="width: 100%; height: 500px;">
    <MChartRadar
      :series="[
        {
          name: '性能指标',
          data: [92, 88, 95, 85, 90, 87],
          areaStyle: showArea,
          areaOpacity: 0.3
        }
      ]"
      :indicators="performanceIndicators"
    />
  </div>
  <div style="margin-top: 16px;">
    <el-checkbox v-model="showArea">显示面积填充</el-checkbox>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <div>
    <div style="width: 100%; height: 500px;">
      <MChartRadar
        :series="[
          {
            name: '性能指标',
            data: [92, 88, 95, 85, 90, 87],
            areaStyle: true,
            areaOpacity: 0.3
          }
        ]"
        :indicators="indicators"
      />
    </div>
  </div>
</template>

<script setup>
import { MChartRadar } from '@jqkgg/m-ui'

const indicators = [
  { name: '响应速度', max: 100 },
  { name: '稳定性', max: 100 },
  { name: '可扩展性', max: 100 },
  { name: '安全性', max: 100 },
  { name: '易用性', max: 100 },
  { name: '兼容性', max: 100 }
]
</script>
```
</CodeBlock>

## 自定义样式

每个系列可以单独设置样式，包括颜色、线条类型、标记点等。

<Demo>
  <div style="width: 100%; height: 500px;">
    <MChartRadar
      :series="[
        {
          name: '系列1',
          data: [100, 80, 90, 70, 85],
          color: '#FF6B6B',
          lineWidth: 3,
          lineType: 'solid',
          showSymbol: true,
          symbolSize: 8
        },
        {
          name: '系列2',
          data: [90, 70, 85, 95, 80],
          color: '#4ECDC4',
          lineWidth: 2,
          lineType: 'dashed',
          showSymbol: true,
          symbolSize: 6
        }
      ]"
      :indicators="basicIndicators"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartRadar
    :series="[
      {
        name: '系列1',
        data: [100, 80, 90, 70, 85],
        color: '#FF6B6B',
        lineWidth: 3,
        lineType: 'solid',
        showSymbol: true,
        symbolSize: 8
      },
      {
        name: '系列2',
        data: [90, 70, 85, 95, 80],
        color: '#4ECDC4',
        lineWidth: 2,
        lineType: 'dashed',
        showSymbol: true,
        symbolSize: 6
      }
    ]"
    :indicators="indicators"
  />
</template>

<script setup>
import { MChartRadar } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 分割区域

通过 `show-split-area` 属性可以显示分割区域，使雷达图更加清晰。

<Demo>
  <div style="width: 100%; height: 500px;">
    <MChartRadar
      :series="basicSeries"
      :indicators="basicIndicators"
      :show-split-area="showSplitArea"
    />
  </div>
  <div style="margin-top: 16px;">
    <el-checkbox v-model="showSplitArea">显示分割区域</el-checkbox>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <div>
    <div style="width: 100%; height: 500px;">
      <MChartRadar
        :series="series"
        :indicators="indicators"
        :show-split-area="true"
      />
    </div>
  </div>
</template>

<script setup>
import { MChartRadar } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 自定义指标范围

每个指标可以设置不同的最大值和最小值。

<Demo>
  <div style="width: 100%; height: 500px;">
    <MChartRadar
      :series="[
        { name: '数据', data: [80, 60, 70, 50, 65] }
      ]"
      :indicators="[
        { name: '指标1', max: 100, min: 0 },
        { name: '指标2', max: 80, min: 20 },
        { name: '指标3', max: 100, min: 0 },
        { name: '指标4', max: 60, min: 10 },
        { name: '指标5', max: 100, min: 0 }
      ]"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartRadar
    :series="[
      { name: '数据', data: [80, 60, 70, 50, 65] }
    ]"
    :indicators="[
      { name: '指标1', max: 100, min: 0 },
      { name: '指标2', max: 80, min: 20 },
      { name: '指标3', max: 100, min: 0 },
      { name: '指标4', max: 60, min: 10 },
      { name: '指标5', max: 100, min: 0 }
    ]"
  />
</template>

<script setup>
import { MChartRadar } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 自定义位置和大小

通过 `center` 和 `radius` 属性可以自定义雷达图的位置和大小。

<Demo>
  <div style="width: 100%; height: 500px;">
    <MChartRadar
      :series="basicSeries"
      :indicators="basicIndicators"
      center="['50%', '50%']"
      radius="60%"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartRadar
    :series="series"
    :indicators="indicators"
    center="['50%', '50%']"
    radius="60%"
  />
</template>

<script setup>
import { MChartRadar } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 自定义起始角度

通过 `start-angle` 属性可以设置雷达图的起始角度。

<Demo>
  <div style="width: 100%; height: 500px;">
    <MChartRadar
      :series="basicSeries"
      :indicators="basicIndicators"
      :start-angle="45"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartRadar
    :series="series"
    :indicators="indicators"
    :start-angle="45"
  />
</template>

<script setup>
import { MChartRadar } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 显示数据标签

通过 `show-label` 属性可以在数据点上显示数值标签。

<Demo>
  <div style="width: 100%; height: 500px;">
    <MChartRadar
      :series="basicSeries"
      :indicators="basicIndicators"
      :show-label="showLabel"
    />
  </div>
  <div style="margin-top: 16px;">
    <el-checkbox v-model="showLabel">显示数据标签</el-checkbox>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <div>
    <div style="width: 100%; height: 500px;">
      <MChartRadar
        :series="series"
        :indicators="indicators"
        :show-label="true"
      />
    </div>
  </div>
</template>

<script setup>
import { MChartRadar } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 隐藏图例

通过 `show-legend` 属性可以隐藏图例。

<Demo>
  <div style="width: 100%; height: 500px;">
    <MChartRadar
      :series="multiSeries"
      :indicators="multiIndicators"
      :show-legend="false"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartRadar
    :series="series"
    :indicators="indicators"
    :show-legend="false"
  />
</template>

<script setup>
import { MChartRadar } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 图例位置

通过 `legend-position` 属性可以设置图例的位置。

<Demo>
  <div style="width: 100%; height: 500px;">
    <MChartRadar
      :series="multiSeries"
      :indicators="multiIndicators"
      legend-position="bottom"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartRadar
    :series="series"
    :indicators="indicators"
    legend-position="bottom"
  />
</template>

<script setup>
import { MChartRadar } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| series | 系列数据，默认一个系列 | ChartRadarSeries[] | — | `[{ name: '系列1', data: [100, 80, 90, 70, 85] }]` |
| indicators | 指标数组（雷达图的维度） | Array<{ name: string, max: number, min?: number }> | — | `[{ name: '指标1', max: 100 }, ...]` |
| colors | 颜色数组，默认三个颜色 | string[] | — | `['rgba(66, 133, 244, 0.8)', ...]` |
| showLegend | 是否显示图例 | boolean | — | true |
| legendPosition | 图例位置 | string | top / bottom / left / right | top |
| height | 图表高度 | number \| string | — | 400 |
| width | 图表宽度 | number \| string | — | '100%' |
| backgroundColor | 背景颜色 | string | — | transparent |
| center | 雷达图中心位置 [x, y] | [string \| number, string \| number] | — | ['50%', '50%'] |
| radius | 雷达图半径 | string \| number | — | '75%' |
| startAngle | 雷达图起始角度（度） | number | — | 90 |
| showSplitLine | 是否显示分割线 | boolean | — | true |
| splitLineStyle | 分割线样式 | object | — | `{ color: 'rgba(0, 0, 0, 0.1)', width: 1, type: 'dashed' }` |
| showAxisLine | 是否显示轴线 | boolean | — | true |
| axisLineStyle | 轴线样式 | object | — | `{ color: 'rgba(0, 0, 0, 0.2)', width: 1, type: 'solid' }` |
| showIndicatorName | 是否显示指示器名称 | boolean | — | true |
| indicatorNameStyle | 指示器名称样式 | object | — | `{ color: '#666', fontSize: 14, fontWeight: 'normal' }` |
| showSplitArea | 是否显示分割区域 | boolean | — | true |
| splitAreaStyle | 分割区域样式 | object | — | `{ color: ['rgba(250, 250, 250, 0.3)', 'rgba(200, 200, 200, 0.3)'] }` |
| showTooltip | 是否显示工具提示 | boolean | — | true |
| tooltipFormatter | 工具提示格式化函数 | function | — | undefined |
| showLabel | 是否显示数据标签 | boolean | — | false |
| animation | 是否启用动画 | boolean | — | true |
| animationDuration | 动画持续时间（毫秒） | number | — | 1000 |
| options | 完全自定义的 ECharts 配置项，传入后将以 options 为准，忽略其他属性 | object | — | undefined |

### ChartRadarSeries

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| name | 系列名称 | string | — | — |
| data | 数据数组，对应指标数组 | number[] | — | — |
| color | 自定义颜色（可选） | string | — | — |
| areaStyle | 是否显示面积 | boolean | — | false |
| areaOpacity | 面积填充透明度（0-1） | number | — | 0.3 |
| lineWidth | 线条宽度 | number | — | 2 |
| lineType | 线条类型 | string | solid / dashed / dotted | solid |
| showSymbol | 是否显示标记点 | boolean | — | true |
| symbolSize | 标记点大小 | number | — | 4 |
| symbol | 标记点类型 | string | circle / rect / roundRect / triangle / diamond / pin / arrow / none | circle |

