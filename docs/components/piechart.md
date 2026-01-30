# ChartPie 饼图

用于展示数据的饼图/环形图组件，支持自定义颜色、图例位置、标签显示等配置。

<script setup>
import { ref } from 'vue'

const data1 = ref([
  { name: '社评组织', value: 193 },
  { name: '用人单位(院校)', value: 22 },
  { name: '用人单位(企业)', value: 108 }
])

const data2 = ref([
  { name: '数据1', value: 100 },
  { name: '数据2', value: 200 },
  { name: '数据3', value: 300 },
  { name: '数据4', value: 150 }
])

const data3 = ref([
  { name: '系列1', value: 100 },
  { name: '系列2', value: 200 },
  { name: '系列3', value: 300 }
])

const colors1 = ref([
  'rgba(76, 175, 80, 1)',   // 绿色
  'rgba(33, 150, 243, 1)',  // 蓝色
  'rgba(255, 152, 0, 1)'    // 橙色
])

const colors2 = ref([
  'rgba(66, 133, 244, 0.8)',
  'rgba(255, 193, 7, 0.8)',
  'rgba(76, 175, 80, 0.8)',
  'rgba(156, 39, 176, 0.8)'
])

const showLegend = ref(true)
const legendPosition = ref('right')
const innerRadius = ref('60%')
const showLabel = ref(true)
const showPercent = ref(true)
const showValue = ref(false)

// 玫瑰图示例数据
const roseData = ref([
  { name: '数据1', value: 100 },
  { name: '数据2', value: 200 },
  { name: '数据3', value: 300 },
  { name: '数据4', value: 150 },
  { name: '数据5', value: 250 },
  { name: '数据6', value: 180 }
])

const roseType = ref(false)

// 进度环示例数据
const progressData = ref([
  { name: '进度', value: 30 }
])
const progressMax = ref(100)
const progressColor = ref(['#87CEEB', '#4169E1'])

// 仪表盘示例数据
const gaugeData = ref([
  { name: '完成率', value: 75 }
])

// 水球示例数据
const liquidData = ref([
  { name: '完成率', value: 65 }
])
const liquidRadius = ref(0.4)
</script>

## 基础用法

基础的环形图用法，图例显示在右侧。

<Demo>
  <div style="width: 100%; height: 400px;">
    <MChartPie
      :data="data1"
      :colors="colors1"
      legend-position="right"
      :legend-show-value="true"
      :legend-show-percent="true"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartPie
    :data="[
      { name: '社评组织', value: 193 },
      { name: '用人单位(院校)', value: 22 },
      { name: '用人单位(企业)', value: 108 }
    ]"
    :colors="[
      'rgba(76, 175, 80, 1)',
      'rgba(33, 150, 243, 1)',
      'rgba(255, 152, 0, 1)'
    ]"
    legend-position="right"
    :legend-show-value="true"
    :legend-show-percent="true"
  />
</template>

<script setup>
import { MChartPie } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 饼图（非环形）

通过设置 `inner-radius` 为 `0` 来显示实心饼图。

<Demo>
  <div style="width: 100%; height: 400px;">
    <MChartPie
      :data="data2"
      :colors="colors2"
      inner-radius="0"
      legend-position="right"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartPie
    :data="[
      { name: '数据1', value: 100 },
      { name: '数据2', value: 200 },
      { name: '数据3', value: 300 },
      { name: '数据4', value: 150 }
    ]"
    inner-radius="0"
    legend-position="right"
  />
</template>

<script setup>
import { MChartPie } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 图例位置

通过 `legend-position` 属性可以设置图例的位置，支持 `left`、`right`、`top`、`bottom`。

<Demo>
  <div style="width: 100%; height: 400px;">
    <MChartPie
      :data="data3"
      :legend-position="legendPosition"
    />
  </div>
  <div style="margin-top: 16px;">
    <el-radio-group v-model="legendPosition">
      <el-radio label="left">左侧</el-radio>
      <el-radio label="right">右侧</el-radio>
      <el-radio label="top">顶部</el-radio>
      <el-radio label="bottom">底部</el-radio>
    </el-radio-group>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <div>
    <div style="width: 100%; height: 400px;">
      <MChartPie
        :data="data"
        :legend-position="legendPosition"
      />
    </div>
    <div style="margin-top: 16px;">
      <el-radio-group v-model="legendPosition">
        <el-radio label="left">左侧</el-radio>
        <el-radio label="right">右侧</el-radio>
        <el-radio label="top">顶部</el-radio>
        <el-radio label="bottom">底部</el-radio>
      </el-radio-group>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { MChartPie } from '@jqkgg/m-ui'

const data = ref([
  { name: '系列1', value: 100 },
  { name: '系列2', value: 200 },
  { name: '系列3', value: 300 }
])
const legendPosition = ref('right')
</script>
```
</CodeBlock>

## 自定义颜色

通过 `colors` 属性可以自定义饼图的颜色，支持透明度设置。

<Demo>
  <div style="width: 100%; height: 400px;">
    <MChartPie
      :data="data2"
      :colors="colors2"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartPie
    :data="[
      { name: '数据1', value: 100 },
      { name: '数据2', value: 200 },
      { name: '数据3', value: 300 },
      { name: '数据4', value: 150 }
    ]"
    :colors="[
      'rgba(66, 133, 244, 0.8)',
      'rgba(255, 193, 7, 0.8)',
      'rgba(76, 175, 80, 0.8)',
      'rgba(156, 39, 176, 0.8)'
    ]"
  />
</template>

<script setup>
import { MChartPie } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 数据项自定义颜色

每个数据项可以单独设置颜色，通过 `data` 中的 `color` 属性。

<Demo>
  <div style="width: 100%; height: 400px;">
    <MChartPie
      :data="[
        { name: '数据1', value: 100, color: 'rgba(255, 99, 132, 0.8)' },
        { name: '数据2', value: 200, color: 'rgba(54, 162, 235, 0.8)' },
        { name: '数据3', value: 300, color: 'rgba(255, 206, 86, 0.8)' }
      ]"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartPie
    :data="[
      { name: '数据1', value: 100, color: 'rgba(255, 99, 132, 0.8)' },
      { name: '数据2', value: 200, color: 'rgba(54, 162, 235, 0.8)' },
      { name: '数据3', value: 300, color: 'rgba(255, 206, 86, 0.8)' }
    ]"
  />
</template>

<script setup>
import { MChartPie } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 隐藏图例

通过 `show-legend` 属性可以隐藏图例。

<Demo>
  <div style="width: 100%; height: 400px;">
    <MChartPie
      :data="data3"
      :show-legend="showLegend"
    />
  </div>
  <div style="margin-top: 16px;">
    <el-checkbox v-model="showLegend">显示图例</el-checkbox>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <div>
    <div style="width: 100%; height: 400px;">
      <MChartPie
        :data="data"
        :show-legend="showLegend"
      />
    </div>
    <div style="margin-top: 16px;">
      <el-checkbox v-model="showLegend">显示图例</el-checkbox>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { MChartPie } from '@jqkgg/m-ui'

const data = ref([
  { name: '系列1', value: 100 },
  { name: '系列2', value: 200 },
  { name: '系列3', value: 300 }
])
const showLegend = ref(true)
</script>
```
</CodeBlock>

## 自定义标签

通过 `show-label`、`label-position`、`show-percent`、`show-value` 等属性可以自定义标签显示。

<Demo>
  <div style="width: 100%; height: 400px;">
    <MChartPie
      :data="data3"
      :show-label="showLabel"
      label-position="outside"
      :show-percent="showPercent"
      :show-value="showValue"
    />
  </div>
  <div style="margin-top: 16px;">
    <el-checkbox v-model="showLabel">显示标签</el-checkbox>
    <el-checkbox v-model="showPercent" style="margin-left: 16px;">显示百分比</el-checkbox>
    <el-checkbox v-model="showValue" style="margin-left: 16px;">显示数值</el-checkbox>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <div>
    <div style="width: 100%; height: 400px;">
      <MChartPie
        :data="data"
        :show-label="showLabel"
        label-position="outside"
        :show-percent="showPercent"
        :show-value="showValue"
      />
    </div>
    <div style="margin-top: 16px;">
      <el-checkbox v-model="showLabel">显示标签</el-checkbox>
      <el-checkbox v-model="showPercent" style="margin-left: 16px;">显示百分比</el-checkbox>
      <el-checkbox v-model="showValue" style="margin-left: 16px;">显示数值</el-checkbox>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { MChartPie } from '@jqkgg/m-ui'

const data = ref([
  { name: '系列1', value: 100 },
  { name: '系列2', value: 200 },
  { name: '系列3', value: 300 }
])
const showLabel = ref(true)
const showPercent = ref(true)
const showValue = ref(false)
</script>
```
</CodeBlock>

## 自定义尺寸和半径

通过 `height`、`width`、`inner-radius`、`radius` 属性可以自定义图表尺寸和环形图的内外半径。

<Demo>
  <div style="width: 100%; height: 400px;">
    <MChartPie
      :data="data3"
      :inner-radius="innerRadius"
      radius="85%"
      height="400px"
    />
  </div>
  <div style="margin-top: 16px;">
    <label>
      内半径: <el-input v-model="innerRadius" style="width: 80px;" />
    </label>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <div>
    <div style="width: 100%; height: 400px;">
      <MChartPie
        :data="data"
        :inner-radius="innerRadius"
        radius="85%"
        height="400px"
      />
    </div>
    <div style="margin-top: 16px;">
      <label>
        内半径: <el-input v-model="innerRadius" style="width: 80px;" />
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { MChartPie } from '@jqkgg/m-ui'

const data = ref([
  { name: '系列1', value: 100 },
  { name: '系列2', value: 200 },
  { name: '系列3', value: 300 }
])
const innerRadius = ref('60%')
</script>
```
</CodeBlock>

## 进度环

通过 `progress-mode` 属性可以启用进度环模式，显示单值进度，中心显示百分比。适合展示完成度、进度等场景。

### 基础进度环

使用 `progress-mode` 启用进度环模式，数据只需传入一个值，组件会自动计算百分比并显示在中心。通过 `progress-label` 可以自定义中心显示的文案，默认为"完成率"。

<Demo>
  <div style="width: 100%; height: 400px;">
    <MChartPie
      :data="progressData"
      progress-mode
      :progress-max="progressMax"
      :progress-color="progressColor"
      inner-radius="75%"
      radius="90%"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartPie
    :data="[{ name: '进度', value: 30 }]"
    progress-mode
    :progress-max="100"
    :progress-color="['#87CEEB', '#4169E1']"
    progress-label="完成率"
    inner-radius="75%"
    radius="90%"
  />
</template>

<script setup>
import { MChartPie } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

### 自定义进度环文案

通过 `progress-label` 属性可以自定义进度环中心显示的文案，文案会显示在百分比上方。

<Demo>
  <div style="width: 100%; height: 400px;">
    <MChartPie
      :data="[{ name: '进度', value: 75 }]"
      progress-mode
      :progress-max="100"
      progress-label="达成率"
      :progress-color="['#87CEEB', '#4169E1']"
      inner-radius="75%"
      radius="90%"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartPie
    :data="[{ name: '进度', value: 75 }]"
    progress-mode
    :progress-max="100"
    progress-label="达成率"
    :progress-color="['#87CEEB', '#4169E1']"
    inner-radius="75%"
    radius="90%"
  />
</template>

<script setup>
import { MChartPie } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

### 自定义进度环颜色

通过 `progress-color` 可以自定义进度条的渐变色，通过 `progress-bg-color` 可以自定义未完成部分的颜色。

<Demo>
  <div style="width: 100%; height: 400px;">
    <MChartPie
      :data="[{ name: '进度', value: 65 }]"
      progress-mode
      :progress-max="100"
      :progress-color="['#FF6B6B', '#4ECDC4']"
      progress-bg-color="rgba(200, 200, 200, 0.3)"
      inner-radius="70%"
      radius="85%"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartPie
    :data="[{ name: '进度', value: 65 }]"
    progress-mode
    :progress-max="100"
    :progress-color="['#FF6B6B', '#4ECDC4']"
    progress-bg-color="rgba(200, 200, 200, 0.3)"
    inner-radius="70%"
    radius="85%"
  />
</template>

<script setup>
import { MChartPie } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

### 自定义最大值

通过 `progress-max` 可以设置进度的最大值，用于计算百分比。例如，如果最大值是 200，当前值是 60，则显示 30%。

<Demo>
  <div style="width: 100%; height: 400px;">
    <MChartPie
      :data="[{ name: '进度', value: 60 }]"
      progress-mode
      :progress-max="200"
      :progress-color="['#A8E6CF', '#3D5A80']"
      inner-radius="75%"
      radius="90%"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartPie
    :data="[{ name: '进度', value: 60 }]"
    progress-mode
    :progress-max="200"
    :progress-color="['#A8E6CF', '#3D5A80']"
    inner-radius="75%"
    radius="90%"
  />
</template>

<script setup>
import { MChartPie } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 仪表盘模式

通过 `gauge-mode` 属性可以启用仪表盘模式，显示为半圆形仪表盘，适合展示指标、评分等场景。

### 基础仪表盘

使用 `gauge-mode` 启用仪表盘模式，数据只需传入一个值，组件会自动显示为半圆形仪表盘。

<Demo>
  <div style="width: 100%; height: 400px;">
    <MChartPie
      :data="gaugeData"
      gauge-mode
      :gauge-min="0"
      :gauge-max="100"
      :gauge-color="['#91CC75', '#FAC858', '#EE6666']"
      progress-label="完成率"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartPie
    :data="[{ name: '完成率', value: 75 }]"
    gauge-mode
    :gauge-min="0"
    :gauge-max="100"
    :gauge-color="['#91CC75', '#FAC858', '#EE6666']"
    progress-label="完成率"
  />
</template>

<script setup>
import { MChartPie } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

### 自定义仪表盘范围

通过 `gauge-min` 和 `gauge-max` 可以自定义仪表盘的数值范围。

<Demo>
  <div style="width: 100%; height: 400px;">
    <MChartPie
      :data="[{ name: '温度', value: 25 }]"
      gauge-mode
      :gauge-min="0"
      :gauge-max="50"
      :gauge-color="['#5470C6', '#91CC75', '#FAC858']"
      progress-label="温度"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartPie
    :data="[{ name: '温度', value: 25 }]"
    gauge-mode
    :gauge-min="0"
    :gauge-max="50"
    :gauge-color="['#5470C6', '#91CC75', '#FAC858']"
    progress-label="温度"
  />
</template>

<script setup>
import { MChartPie } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 水球模式

通过 `liquid-mode` 属性可以启用水球模式，显示为水波动画效果，适合展示完成度、进度等场景。

### 基础水球

使用 `liquid-mode` 启用水球模式，数据只需传入一个值，组件会自动显示为水球效果。

<Demo>
  <div style="width: 100%; height: 400px;">
    <MChartPie
      :data="liquidData"
      liquid-mode
      :progress-max="100"
      liquid-color="#3BA3FF"
      liquid-bg-color="rgba(59, 163, 255, 0.1)"
      progress-label="完成率"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartPie
    :data="[{ name: '完成率', value: 65 }]"
    liquid-mode
    :progress-max="100"
    liquid-color="#3BA3FF"
    liquid-bg-color="rgba(59, 163, 255, 0.1)"
    progress-label="完成率"
  />
</template>

<script setup>
import { MChartPie } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

### 自定义水球颜色

通过 `liquid-color` 和 `liquid-bg-color` 可以自定义水球的颜色和背景色。

<Demo>
  <div style="width: 100%; height: 400px;">
    <MChartPie
      :data="[{ name: '完成率', value: 80 }]"
      liquid-mode
      :progress-max="100"
      liquid-color="#52C41A"
      liquid-bg-color="rgba(82, 196, 26, 0.1)"
      progress-label="达成率"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartPie
    :data="[{ name: '完成率', value: 80 }]"
    liquid-mode
    :progress-max="100"
    liquid-color="#52C41A"
    liquid-bg-color="rgba(82, 196, 26, 0.1)"
    progress-label="达成率"
  />
</template>

<script setup>
import { MChartPie } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

### 自定义水球半径

通过 `liquid-radius` 可以控制水球的大小，值为 0-1 之间的比例，相对于容器大小。

<Demo>
  <div style="width: 100%; height: 400px;">
    <MChartPie
      :data="liquidData"
      liquid-mode
      :progress-max="100"
      :liquid-radius="liquidRadius"
      liquid-color="#3BA3FF"
      liquid-bg-color="rgba(59, 163, 255, 0.1)"
      progress-label="完成率"
    />
  </div>
  <div style="margin-top: 16px;">
    <label style="display: flex; align-items: center; gap: 12px;">
      <span>半径大小: {{ (liquidRadius * 100).toFixed(0) }}%</span>
      <el-slider v-model="liquidRadius" :min="0.2" :max="0.5" :step="0.01" style="flex: 1; max-width: 300px;" />
    </label>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <div>
    <div style="width: 100%; height: 400px;">
      <MChartPie
        :data="[{ name: '完成率', value: 65 }]"
        liquid-mode
        :progress-max="100"
        :liquid-radius="liquidRadius"
        liquid-color="#3BA3FF"
        liquid-bg-color="rgba(59, 163, 255, 0.1)"
        progress-label="完成率"
      />
    </div>
    <div style="margin-top: 16px;">
      <label style="display: flex; align-items: center; gap: 12px;">
        <span>半径大小: {{ (liquidRadius * 100).toFixed(0) }}%</span>
        <el-slider v-model="liquidRadius" :min="0.2" :max="0.5" :step="0.01" style="flex: 1; max-width: 300px;" />
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { MChartPie } from '@jqkgg/m-ui'

const liquidRadius = ref(0.4)
</script>
```
</CodeBlock>

## 玫瑰图

通过 `rose-type` 属性可以将饼图转换为玫瑰图。玫瑰图有两种模式：
- `'radius'`：扇形的半径根据数值大小而变化
- `'area'`：扇形的面积根据数值大小而变化

### 半径玫瑰图

使用 `rose-type="radius"` 创建半径玫瑰图，扇形的半径大小反映数值大小。

<Demo>
  <div style="width: 100%; height: 400px;">
    <MChartPie
      :data="roseData"
      rose-type="radius"
      inner-radius="10%"
      radius="70%"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartPie
    :data="[
      { name: '数据1', value: 100 },
      { name: '数据2', value: 200 },
      { name: '数据3', value: 300 },
      { name: '数据4', value: 150 },
      { name: '数据5', value: 250 },
      { name: '数据6', value: 180 }
    ]"
    rose-type="radius"
    inner-radius="10%"
    radius="70%"
  />
</template>

<script setup>
import { MChartPie } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

### 面积玫瑰图

使用 `rose-type="area"` 创建面积玫瑰图，扇形的面积大小反映数值大小。

<Demo>
  <div style="width: 100%; height: 400px;">
    <MChartPie
      :data="roseData"
      rose-type="area"
      inner-radius="10%"
      radius="70%"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartPie
    :data="[
      { name: '数据1', value: 100 },
      { name: '数据2', value: 200 },
      { name: '数据3', value: 300 },
      { name: '数据4', value: 150 },
      { name: '数据5', value: 250 },
      { name: '数据6', value: 180 }
    ]"
    rose-type="area"
    inner-radius="10%"
    radius="70%"
  />
</template>

<script setup>
import { MChartPie } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

### 玫瑰图切换

可以通过动态切换 `rose-type` 来在普通饼图和玫瑰图之间切换。

<Demo>
  <div style="width: 100%; height: 400px;">
    <MChartPie
      :data="roseData"
      :rose-type="roseType"
      inner-radius="10%"
      radius="70%"
    />
  </div>
  <div style="margin-top: 16px;">
    <el-radio-group v-model="roseType">
      <el-radio :label="false">普通饼图</el-radio>
      <el-radio label="radius">半径玫瑰图</el-radio>
      <el-radio label="area">面积玫瑰图</el-radio>
    </el-radio-group>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <div>
    <div style="width: 100%; height: 400px;">
      <MChartPie
        :data="data"
        :rose-type="roseType"
        inner-radius="10%"
        radius="70%"
      />
    </div>
    <div style="margin-top: 16px;">
      <el-radio-group v-model="roseType">
        <el-radio :label="false">普通饼图</el-radio>
        <el-radio label="radius">半径玫瑰图</el-radio>
        <el-radio label="area">面积玫瑰图</el-radio>
      </el-radio-group>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { MChartPie } from '@jqkgg/m-ui'

const data = ref([
  { name: '数据1', value: 100 },
  { name: '数据2', value: 200 },
  { name: '数据3', value: 300 },
  { name: '数据4', value: 150 },
  { name: '数据5', value: 250 },
  { name: '数据6', value: 180 }
])
const roseType = ref(false)
</script>
```
</CodeBlock>

## 百分比配置

通过 `percent-precision` 属性可以控制百分比的小数位数，该属性同时影响标签、图例和 tooltip 中的百分比显示。通过 `tooltip-show-percent` 属性可以控制 tooltip 中是否显示百分比。

### 百分比精度

通过 `percent-precision` 可以设置百分比的小数位数，0 表示不显示小数，1 表示显示一位小数，以此类推。

<Demo>
  <div style="width: 100%; height: 400px;">
    <MChartPie
      :data="data3"
      :percent-precision="2"
      :show-percent="true"
      :legend-show-percent="true"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartPie
    :data="[
      { name: '系列1', value: 100 },
      { name: '系列2', value: 200 },
      { name: '系列3', value: 300 }
    ]"
    :percent-precision="2"
    :show-percent="true"
    :legend-show-percent="true"
  />
</template>

<script setup>
import { MChartPie } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

### Tooltip 百分比显示

通过 `tooltip-show-percent` 属性可以控制鼠标悬停时 tooltip 中是否显示百分比。

<Demo>
  <div style="width: 100%; height: 400px;">
    <MChartPie
      :data="data3"
      :tooltip-show-percent="true"
      :percent-precision="1"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartPie
    :data="[
      { name: '系列1', value: 100 },
      { name: '系列2', value: 200 },
      { name: '系列3', value: 300 }
    ]"
    :tooltip-show-percent="true"
    :percent-precision="1"
  />
</template>

<script setup>
import { MChartPie } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 图例显示配置

通过 `legend-show-value` 和 `legend-show-percent` 属性可以控制图例中是否显示数值和百分比。

<Demo>
  <div style="width: 100%; height: 400px;">
    <MChartPie
      :data="data1"
      :colors="colors1"
      legend-position="right"
      :legend-show-value="true"
      :legend-show-percent="true"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartPie
    :data="[
      { name: '社评组织', value: 193 },
      { name: '用人单位(院校)', value: 22 },
      { name: '用人单位(企业)', value: 108 }
    ]"
    legend-position="right"
    :legend-show-value="true"
    :legend-show-percent="true"
  />
</template>

<script setup>
import { MChartPie } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 完全自定义配置

通过 `options` 属性可以完全自定义 ECharts 配置项，传入后将以 `options` 为准，忽略其他属性。这允许你使用 ECharts 的所有功能。

<Demo>
  <div style="width: 100%; height: 400px;">
    <MChartPie
      :options="{
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [{
          name: '访问来源',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: '搜索引擎' },
            { value: 735, name: '直接访问' },
            { value: 580, name: '邮件营销' },
            { value: 484, name: '联盟广告' },
            { value: 300, name: '视频广告' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
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
  <MChartPie
    :options="{
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [{
        name: '访问来源',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: '搜索引擎' },
          { value: 735, name: '直接访问' },
          { value: 580, name: '邮件营销' },
          { value: 484, name: '联盟广告' },
          { value: 300, name: '视频广告' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }]
    }"
  />
</template>

<script setup>
import { MChartPie } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

**注意**：使用 `options` 时，需要参考 [ECharts 饼图配置项文档](https://echarts.apache.org/zh/option.html#series-pie.type) 来配置所有选项。

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 数据数组 | ChartPieDataItem[] | — | `[{ name: '数据1', value: 100 }, { name: '数据2', value: 200 }, { name: '数据3', value: 300 }]` |
| colors | 默认颜色数组 | string[] | — | `['rgba(76, 175, 80, 1)', 'rgba(33, 150, 243, 1)', 'rgba(255, 152, 0, 1)']` |
| showLegend | 是否显示图例 | boolean | — | true |
| legendPosition | 图例位置 | string | left / right / top / bottom | right |
| height | 图表高度 | number \| string | — | '400px' |
| width | 图表宽度 | number \| string | — | '100%' |
| innerRadius | 内半径（0-1之间或百分比字符串，用于控制环形图的内圆大小，0为饼图） | number \| string | — | '60%' |
| radius | 外半径（0-1之间或百分比字符串，用于控制环形图的外圆大小） | number \| string | — | '80%' |
| showLabel | 是否显示标签 | boolean | — | true |
| labelPosition | 标签位置 | string | inside / outside / center | outside |
| showPercent | 是否显示百分比 | boolean | — | true |
| showValue | 是否显示数值 | boolean | — | false |
| legendShowValue | 图例是否显示数值 | boolean | — | true |
| legendShowPercent | 图例是否显示百分比 | boolean | — | true |
| percentPrecision | 百分比小数位数，控制标签、图例和 tooltip 中百分比的精度 | number | — | 0 |
| tooltipShowPercent | tooltip 中是否显示百分比 | boolean | — | true |
| progressMode | 是否启用进度环模式，启用后显示为单值进度环，中心显示百分比 | boolean | — | false |
| progressMax | 进度环的最大值（用于计算百分比） | number | — | 100 |
| progressColor | 进度环的渐变色配置，格式为 [起始色, 结束色] | string[] | — | `['#87CEEB', '#4169E1']` |
| progressBgColor | 进度环未完成部分的颜色 | string | — | `rgba(200, 200, 200, 0.2)` |
| progressLabel | 进度环中心显示的文案（显示在百分比上方） | string | — | 完成率 |
| gaugeMode | 是否启用仪表盘模式，启用后显示为半圆形仪表盘 | boolean | — | false |
| gaugeMin | 仪表盘的最小值 | number | — | 0 |
| gaugeMax | 仪表盘的最大值 | number | — | 100 |
| gaugeColor | 仪表盘的分段颜色配置 | string[] | — | `['#91CC75', '#FAC858', '#EE6666']` |
| liquidMode | 是否启用水球模式，启用后显示为水波动画效果 | boolean | — | false |
| liquidColor | 水球颜色 | string | — | #3BA3FF |
| liquidBgColor | 水球背景色 | string | — | `rgba(59, 163, 255, 0.1)` |
| liquidRadius | 水球半径（相对于容器大小的比例，0-1之间） | number | — | 0.4 |
| roseType | 玫瑰图类型 | string \| false | radius / area / false | false |
| options | 完全自定义的 ECharts 配置项，传入后将以 options 为准，忽略其他属性 | object<br>**注意**：`options` 的类型定义请参考 [ECharts 饼图配置项文档](https://echarts.apache.org/zh/option.html#series-pie.type) | — | undefined |

### ChartPieDataItem

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| name | 数据项名称 | string | — | — |
| value | 数据项值 | number | — | — |
| color | 数据项颜色（可选，会覆盖 colors 中的对应颜色） | string | — | — |

