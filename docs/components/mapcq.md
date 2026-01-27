# ChartMapCq 重庆地图

用于展示重庆地图数据的组件，支持颜色映射、主城区独立显示、标签、图例等功能。

<script setup>
import { ref } from 'vue'
import * as echarts from 'echarts'

// 示例数据（序时进度）
const data1 = ref([
  { name: '北碚区', value: 55 },
  { name: '渝北区', value: 60 },
  { name: '江北区', value: 58 },
  { name: '沙坪坝区', value: 52 },
  { name: '巴南区', value: 48 },
  { name: '荣昌区', value: 45 },
  { name: '大足区', value: 50 },
  { name: '潼南区', value: 30 },
  { name: '铜梁区', value: 25 },
  { name: '江津区', value: 35 },
  { name: '彭水县', value: 20 },
  { name: '云阳县', value: 15 },
  { name: '城口县', value: 5 },
  { name: '巫溪县', value: 8 },
  { name: '开州区', value: 3 },
  { name: '秀山县', value: 2 },
  { name: '綦江区', value: 4 },
  { name: '垫江县', value: -5 },
  { name: '长寿区', value: -8 },
  { name: '涪陵区', value: -3 },
  { name: '奉节县', value: -15 },
  { name: '黔江区', value: -12 },
  { name: '万州区', value: 40 },
  { name: '渝中区', value: 58 },
  { name: '大渡口区', value: 50 },
  { name: '江北区', value: 55 },
  { name: '九龙坡区', value: 52 },
  { name: '南岸区', value: 48 },
  { name: '高新区', value: 60 },
])

const showMainCity = ref(true)
const showLegend = ref(true)
const showLabel = ref(true)

// 自定义颜色范围示例
const customRanges = ref([
  { min: -Infinity, max: 0, color: '#FF4D4F', label: '未完成' },
  { min: 0, max: 50, color: '#FFD666', label: '进行中' },
  { min: 50, max: 100, color: '#52C41A', label: '已完成' },
])

// 特殊标注
const specialLabels = ref([
  { name: '高新区', position: [100, 50], label: '高新区' },
  { name: '万盛经开区', position: [400, 500], label: '万盛经开区' },
])

// 导入本地GeoJSON文件
import chongqingGeoJson from '../../src/assets/geo/chongqing.json'
import chongqingMainGeoJson from '../../src/assets/geo/chongqing-main.json'

// 注意：组件会自动加载默认GeoJSON数据（从本地文件或阿里云API）
// 如果需要使用自定义GeoJSON，可以通过geoJson属性传入
</script>

## 基础用法

基础的重庆地图用法，使用默认的序时进度颜色范围。

<Demo>
  <div style="width: 100%; height: 450px;">
    <MChartMapCq
      :data="data1"
      :height="450"
      legend-position="right"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartMapCq
    :data="[
      { name: '北碚区', value: 55 },
      { name: '渝北区', value: 60 },
      { name: '江北区', value: 58 },
      { name: '沙坪坝区', value: 52 },
      // ... 更多数据
    ]"
    :height="450"
  />
</template>

<script setup>
import { MChartMapCq } from '@jqkgg/m-ui'

// 组件会自动加载默认GeoJSON数据，无需手动注册
// 如果需要使用自定义GeoJSON，可以通过geoJson属性传入
</script>
```
</CodeBlock>

## 显示主城区

通过 `show-main-city-in-corner` 属性可以控制是否在左上角显示主城区(未知问题: 当设置`show-main-city-in-corner="true"`时, 整个地图无法渲染, 但组件可正常使用)。

<Demo>
  <div style="width: 100%; height: 450px;">
    <MChartMapCq
      :data="data1"
      :show-main-city-in-corner="true"
      :height="450"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartMapCq
    :data="data"
    :show-main-city-in-corner="true"
    :height="450"
  />
</template>
```
</CodeBlock>

## 自定义颜色范围

通过 `ranges` 属性可以自定义颜色范围配置。

<Demo>
  <div style="width: 100%; height: 450px;">
    <MChartMapCq
      :data="data1"
      :ranges="customRanges"
      :default-ranges="false"
      :height="450"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartMapCq
    :data="data"
    :ranges="[
      { min: -Infinity, max: 0, color: '#FF4D4F', label: '未完成' },
      { min: 0, max: 50, color: '#FFD666', label: '进行中' },
      { min: 50, max: 100, color: '#52C41A', label: '已完成' }
    ]"
    :default-ranges="false"
    :height="450"
  />
</template>
```
</CodeBlock>

## 隐藏标签

通过 `show-label` 属性可以隐藏区域标签。

<Demo>
  <div style="width: 100%; height: 450px;">
    <MChartMapCq
      :data="data1"
      :show-label="false"
      :height="450"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartMapCq
    :data="data"
    :show-label="false"
    :height="450"
  />
</template>
```
</CodeBlock>

## 隐藏图例

通过 `show-legend` 属性可以隐藏图例。

<Demo>
  <div style="width: 100%; height: 450px;">
    <MChartMapCq
      :data="data1"
      :show-legend="false"
      :height="450"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartMapCq
    :data="data"
    :show-legend="false"
    :height="450"
  />
</template>
```
</CodeBlock>

## 自定义图例位置

通过 `legend-position` 属性可以自定义图例位置。

<Demo>
  <div style="width: 100%; height: 450px;">
    <MChartMapCq
      :data="data1"
      legend-position="left"
      :height="450"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartMapCq
    :data="data"
    legend-position="left"
    :height="450"
  />
</template>
```
</CodeBlock>

## 鼠标缩放和拖拽

通过 `roam` 属性可以控制地图是否支持鼠标缩放和拖拽。

### 启用缩放和拖拽

设置`roam=true`, 启用缩放和拖拽

<Demo>
  <div style="width: 100%; height: 450px;">
    <MChartMapCq
      :data="data1"
      :roam="true"
      :height="450"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartMapCq
    :data="data"
    :roam="true"
    :height="450"
  />
</template>
```
</CodeBlock>

### 只允许缩放

设置`roam=scale`, 仅缩放

<Demo>
  <div style="width: 100%; height: 450px;">
    <MChartMapCq
      :data="data1"
      roam="scale"
      :height="450"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartMapCq
    :data="data"
    roam="scale"
    :height="450"
  />
</template>
```
</CodeBlock>

### 只允许拖拽

设置`roam=move`, 仅拖拽

<Demo>
  <div style="width: 100%; height: 450px;">
    <MChartMapCq
      :data="data1"
      roam="move"
      :height="450"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartMapCq
    :data="data"
    roam="move"
    :height="450"
  />
</template>
```
</CodeBlock>

## 特殊标注

通过 `special-labels` 属性可以添加特殊标注区域。

<Demo>
  <div style="width: 100%; height: 450px;">
    <MChartMapCq
      :data="data1"
      :special-labels="specialLabels"
      :height="450"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartMapCq
    :data="data"
    :special-labels="[
      { name: '高新区', position: [100, 50], label: '高新区' },
      { name: '万盛经开区', position: [400, 500], label: '万盛经开区' }
    ]"
    :height="450"
  />
</template>
```
</CodeBlock>

## 自定义样式

通过 `area-style`、`emphasis`、`label-style` 等属性可以自定义地图样式。

<Demo>
  <div style="width: 100%; height: 450px;">
    <MChartMapCq
      :data="data1"
      :height="450"
      :area-style="{
        borderColor: '#1890FF',
        borderWidth: 2
      }"
      :emphasis="{
        areaColor: '#52C41A',
        borderColor: '#FF4D4F',
        borderWidth: 3
      }"
      :label-style="{
        color: '#333',
        fontSize: 14,
        fontWeight: 'bold'
      }"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartMapCq
    :data="data"
    :height="450"
    :area-style="{
      borderColor: '#1890FF',
      borderWidth: 2
    }"
    :emphasis="{
      areaColor: '#52C41A',
      borderColor: '#FF4D4F',
      borderWidth: 3
    }"
    :label-style="{
      color: '#333',
      fontSize: 14,
      fontWeight: 'bold'
    }"
  />
</template>
```
</CodeBlock>

## 默认GeoJSON数据

组件会自动加载默认的重庆地图GeoJSON数据，加载顺序：

### 主地图数据
1. 优先从本地文件 `src/assets/geo/chongqing.json` 加载（如果存在）
2. 如果本地文件不存在，从阿里云DataV API加载：`https://geo.datav.aliyun.com/areas_v3/bound/500000_full.json`

### 主城区地图数据（当 `show-main-city-in-corner` 为 true 时）
1. 优先从本地文件 `src/assets/geo/chongqing-main.json` 加载（如果存在）
2. 如果本地文件不存在，从完整地图中筛选出主城区数据
3. 如果筛选失败，从阿里云API加载完整地图后筛选

**主城区包括九区**：渝北区、江北区、北碚区、沙坪坝区、渝中区、南岸区、九龙坡区、大渡口区、巴南区

**注意**：两江新区在阿里云地图数据中可能不存在，因此使用渝北区和江北区替代。

## 使用本地GeoJSON文件

组件支持通过 `geo-json` 属性传入本地GeoJSON文件。下面的demo使用项目中的本地文件。

<Demo>
  <div style="width: 100%; height: 450px;">
    <MChartMapCq
      :data="data1"
      :geo-json="chongqingGeoJson"
      map-name="chongqing"
      :height="450"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartMapCq
    :data="data"
    :geo-json="chongqingGeoJson"
    map-name="chongqing"
    :height="450"
  />
</template>

<script setup>
import { MChartMapCq } from '@jqkgg/m-ui'
import chongqingGeoJson from '../../src/assets/geo/chongqing.json'

// 通过geoJson属性提供本地地图数据
// 组件会自动注册地图
</script>
```
</CodeBlock>

## 本地GeoJSON文件

如果需要使用本地GeoJSON文件，可以：
1. 从 [阿里云DataV](https://datav.aliyun.com/portal/school/atlas/area_selector) 下载重庆地图数据
2. 将文件保存为 `src/assets/geo/chongqing.json`
3. 组件会自动优先加载本地文件

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 地图数据数组 | [ChartMapCqDataItem[]](#ChartMapCqDataItem) | — | `[]` |
| geoJson | 地图GeoJSON数据 | any | — | `undefined` |
| mapName | 地图名称（用于注册echarts地图） | string | — | `'chongqing'` |
| showMainCityInCorner | 是否显示主城区在左上角 | boolean | — | `false` |
| mainCityNames | 主城区区域名称数组 | string[] | — | `['渝中区', '大渡口区', ...]` |
| ranges | 颜色范围配置 | [ChartMapCqRange[]](#ChartMapCqRange) | — | `undefined` |
| defaultRanges | 是否使用默认颜色范围（序时进度） | boolean | — | `true` |
| showLabel | 是否显示标签 | boolean | — | `true` |
| labelStyle | 标签样式 | [LabelStyle](#LabelStyle) | — | `{ color: '#ffffff', fontSize: 12, fontWeight: 'normal' }` |
| showLegend | 是否显示图例 | boolean | — | `true` |
| legendPosition | 图例位置 | string | left / right / top / bottom | `'right'` |
| legendTitle | 图例标题 | string | — | `'序时进度'` |
| height | 图表高度 | number \| string | — | `600` |
| width | 图表宽度 | number \| string | — | `'100%'` |
| backgroundColor | 背景颜色 | string | — | `'transparent'` |
| areaStyle | 地图区域样式 | [AreaStyle](#AreaStyle) | — | `{ borderColor: '#fff', borderWidth: 1 }` |
| emphasis | 高亮样式 | [Emphasis](#Emphasis) | — | `{ borderColor: '#333', borderWidth: 2 }` |
| showTooltip | 是否显示提示框 | boolean | — | `true` |
| tooltipFormatter | 提示框格式化函数 | (params: any) => string | — | `undefined` |
| specialLabels | 特殊标注区域配置 | [SpecialLabel[]](#SpecialLabel) | — | `[]` |
| roam | 是否开启鼠标缩放和平移漫游 | boolean \| 'scale' \| 'move' | true / false / 'scale' / 'move' | `false` |

### ChartMapCqDataItem {#ChartMapCqDataItem}

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| name | 区域名称 | string | — | — |
| value | 数据值（用于颜色映射） | number | — | — |
| color | 自定义颜色（可选，会覆盖根据value计算的颜色） | string | — | — |

### ChartMapCqRange {#ChartMapCqRange}

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| min | 最小值（包含） | number | — | — |
| max | 最大值（不包含，如果是最后一个范围则包含） | number | — | — |
| color | 该范围对应的颜色 | string | — | — |
| label | 范围标签 | string | — | — |

### LabelStyle {#LabelStyle}

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| color | 标签颜色 | string | — | `'#ffffff'` |
| fontSize | 标签字体大小 | number | — | `12` |
| fontWeight | 标签字体粗细 | string \| number | — | `'normal'` |

### AreaStyle {#AreaStyle}

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| areaColor | 区域填充颜色 | string | — | `'#5b9bd5'` |
| borderColor | 区域边框颜色 | string | — | `'#fff'` |
| borderWidth | 区域边框宽度 | number | — | `1` |

### Emphasis {#Emphasis}

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| areaColor | 高亮时区域填充颜色 | string | — | `'#ffff00'` |
| borderColor | 高亮时区域边框颜色 | string | — | `'#fff'` |
| borderWidth | 高亮时区域边框宽度 | number | — | `2` |

### SpecialLabel {#SpecialLabel}

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| name | 标注名称 | string | — | — |
| position | 标注位置坐标 | [number, number] | — | — |
| icon | 标注图标（可选） | string | — | — |
| label | 标注标签文本（可选） | string | — | — |

## 注意事项

1. **地图数据**：使用本组件需要提供重庆地图的GeoJSON数据。可以通过以下方式获取：
   - 从 [阿里云DataV](https://datav.aliyun.com/portal/school/atlas/area_selector) 下载
   - 从 [MapShaper](https://mapshaper.org/) 转换
   - 使用其他地图数据源

2. **地图注册**：地图数据可以通过 `geoJson` 属性直接提供，组件会自动注册；或者在外部使用 `echarts.registerMap()` 注册。

3. **主城区配置**：默认主城区包括9个区域（渝北区、江北区、北碚区、沙坪坝区、渝中区、南岸区、九龙坡区、大渡口区、巴南区），可以通过 `mainCityNames` 属性自定义。注意：两江新区在阿里云地图数据中可能不存在，因此使用渝北区和江北区替代。

4. **颜色映射**：默认使用序时进度的5级颜色映射，可以通过 `ranges` 属性自定义颜色范围。

