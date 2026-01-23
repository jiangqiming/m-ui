# ChartMapCq3D 重庆3D地图

用于展示重庆3D地图数据的组件，支持3D高度映射、颜色映射、标签、图例等功能。基于 ECharts GL 实现。

**注意**：使用本组件需要安装 `echarts-gl` 依赖。

```bash
npm install echarts-gl
```

<script setup>
import { ref } from 'vue'

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
  { name: '九龙坡区', value: 52 },
  { name: '南岸区', value: 48 },
])

const showLegend = ref(true)
const showLabel = ref(true)

// 自定义颜色范围示例
const customRanges = ref([
  { min: -Infinity, max: 0, color: '#FF4D4F', label: '未完成' },
  { min: 0, max: 50, color: '#FFD666', label: '进行中' },
  { min: 50, max: 100, color: '#52C41A', label: '已完成' },
])

// 导入本地GeoJSON文件
import chongqingGeoJson from '../../src/assets/geo/chongqing.json'

// 注意：组件会自动加载默认GeoJSON数据（从本地文件或阿里云API）
// 如果需要使用自定义GeoJSON，可以通过geoJson属性传入
</script>

## 基础用法

基础的重庆3D地图用法，使用默认的序时进度颜色范围，高度根据数据值自动计算。

<Demo>
  <div style="width: 100%; height: 500px;">
    <MChartMapCq3D
      :data="data1"
      :height="500"
      legend-position="right"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartMapCq3D
    :data="[
      { name: '北碚区', value: 55 },
      { name: '渝北区', value: 60 },
      { name: '江北区', value: 58 },
      { name: '沙坪坝区', value: 52 },
      // ... 更多数据
    ]"
    :height="500"
  />
</template>

<script setup>
import { MChartMapCq3D } from '@jqkgg/m-ui'

// 组件会自动加载默认GeoJSON数据，无需手动注册
// 如果需要使用自定义GeoJSON，可以通过geoJson属性传入
</script>
```
</CodeBlock>

## 自定义高度缩放

通过 `height-scale` 属性可以控制3D地图的高度缩放比例。

<Demo>
  <div style="width: 100%; height: 500px;">
    <MChartMapCq3D
      :data="data1"
      :height="500"
      :height-scale="0.2"
      legend-position="right"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartMapCq3D
    :data="data"
    :height="500"
    :height-scale="0.2"
  />
</template>
```
</CodeBlock>

## 自定义高度范围

通过 `min-height` 和 `max-height` 属性可以控制3D地图的高度范围。

<Demo>
  <div style="width: 100%; height: 500px;">
    <MChartMapCq3D
      :data="data1"
      :height="500"
      :min-height="0"
      :max-height="200"
      :height-scale="0.15"
      legend-position="right"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartMapCq3D
    :data="data"
    :height="500"
    :min-height="0"
    :max-height="200"
    :height-scale="0.15"
  />
</template>
```
</CodeBlock>

## 自定义颜色范围

通过 `ranges` 属性可以自定义颜色范围配置。

<Demo>
  <div style="width: 100%; height: 500px;">
    <MChartMapCq3D
      :data="data1"
      :ranges="customRanges"
      :default-ranges="false"
      :height="500"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartMapCq3D
    :data="data"
    :ranges="[
      { min: -Infinity, max: 0, color: '#FF4D4F', label: '未完成' },
      { min: 0, max: 50, color: '#FFD666', label: '进行中' },
      { min: 50, max: 100, color: '#52C41A', label: '已完成' }
    ]"
    :default-ranges="false"
    :height="500"
  />
</template>
```
</CodeBlock>

## 隐藏标签

通过 `show-label` 属性可以隐藏区域标签。

<Demo>
  <div style="width: 100%; height: 500px;">
    <MChartMapCq3D
      :data="data1"
      :show-label="false"
      :height="500"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartMapCq3D
    :data="data"
    :show-label="false"
    :height="500"
  />
</template>
```
</CodeBlock>

## 隐藏图例

通过 `show-legend` 属性可以隐藏图例。

<Demo>
  <div style="width: 100%; height: 500px;">
    <MChartMapCq3D
      :data="data1"
      :show-legend="false"
      :height="500"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartMapCq3D
    :data="data"
    :show-legend="false"
    :height="500"
  />
</template>
```
</CodeBlock>

## 自定义图例位置

通过 `legend-position` 属性可以自定义图例位置。

<Demo>
  <div style="width: 100%; height: 500px;">
    <MChartMapCq3D
      :data="data1"
      legend-position="left"
      :height="500"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartMapCq3D
    :data="data"
    legend-position="left"
    :height="500"
  />
</template>
```
</CodeBlock>

## 自定义视角

通过 `view-control` 属性可以自定义3D地图的视角和交互。

<Demo>
  <div style="width: 100%; height: 500px;">
    <MChartMapCq3D
      :data="data1"
      :height="500"
      :view-control="{
        alpha: 50,
        beta: 20,
        distance: 120,
        autoRotate: false
      }"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartMapCq3D
    :data="data"
    :height="500"
    :view-control="{
      alpha: 50,
      beta: 20,
      distance: 120,
      autoRotate: false
    }"
  />
</template>
```
</CodeBlock>

## 自动旋转

通过 `view-control` 属性可以启用3D地图的自动旋转功能。

<Demo>
  <div style="width: 100%; height: 500px;">
    <MChartMapCq3D
      :data="data1"
      :height="500"
      :view-control="{
        alpha: 35,
        beta: 0,
        distance: 100,
        autoRotate: true,
        autoRotateSpeed: 10
      }"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartMapCq3D
    :data="data"
    :height="500"
    :view-control="{
      alpha: 35,
      beta: 0,
      distance: 100,
      autoRotate: true,
      autoRotateSpeed: 10
    }"
  />
</template>
```
</CodeBlock>

## 自定义光照

通过 `light` 属性可以自定义3D地图的光照效果。

<Demo>
  <div style="width: 100%; height: 500px;">
    <MChartMapCq3D
      :data="data1"
      :height="500"
      :light="{
        main: {
          intensity: 1.5,
          shadow: true
        },
        ambient: {
          intensity: 0.5
        }
      }"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartMapCq3D
    :data="data"
    :height="500"
    :light="{
      main: {
        intensity: 1.5,
        shadow: true
      },
      ambient: {
        intensity: 0.5
      }
    }"
  />
</template>
```
</CodeBlock>

## 自定义样式

通过 `area-style`、`emphasis`、`label-style` 等属性可以自定义地图样式。

<Demo>
  <div style="width: 100%; height: 500px;">
    <MChartMapCq3D
      :data="data1"
      :height="500"
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
  <MChartMapCq3D
    :data="data"
    :height="500"
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

## 禁用漫游

通过 `roam` 属性可以禁用鼠标缩放和平移漫游功能。

<Demo>
  <div style="width: 100%; height: 500px;">
    <MChartMapCq3D
      :data="data1"
      :roam="false"
      :height="500"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartMapCq3D
    :data="data"
    :roam="false"
    :height="500"
  />
</template>
```
</CodeBlock>

## 只允许缩放

通过 `roam="scale"` 可以只允许缩放，禁止拖拽。

<Demo>
  <div style="width: 100%; height: 500px;">
    <MChartMapCq3D
      :data="data1"
      roam="scale"
      :height="500"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartMapCq3D
    :data="data"
    roam="scale"
    :height="500"
  />
</template>
```
</CodeBlock>

## 自定义提示框

通过 `tooltip-formatter` 属性可以自定义提示框的显示内容。

<Demo>
  <div style="width: 100%; height: 500px;">
    <MChartMapCq3D
      :data="data1"
      :height="500"
      :tooltip-formatter="(params) => `${params.name}<br/>数值: ${params.value}<br/>进度: ${params.value > 0 ? '正常' : '滞后'}`"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartMapCq3D
    :data="data"
    :height="500"
    :tooltip-formatter="(params) => `${params.name}<br/>数值: ${params.value}<br/>进度: ${params.value > 0 ? '正常' : '滞后'}`"
  />
</template>
```
</CodeBlock>

## 使用本地GeoJSON文件

组件支持通过 `geo-json` 属性传入本地GeoJSON文件。下面的demo使用项目中的本地文件。

<Demo>
  <div style="width: 100%; height: 500px;">
    <MChartMapCq3D
      :data="data1"
      :geo-json="chongqingGeoJson"
      map-name="chongqing"
      :height="500"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartMapCq3D
    :data="data"
    :geo-json="chongqingGeoJson"
    map-name="chongqing"
    :height="500"
  />
</template>

<script setup>
import { MChartMapCq3D } from '@jqkgg/m-ui'
import chongqingGeoJson from '../../src/assets/geo/chongqing.json'

// 通过geoJson属性提供本地地图数据
// 组件会自动注册地图
</script>
```
</CodeBlock>

## 默认GeoJSON数据

组件会自动加载默认的重庆地图GeoJSON数据，加载顺序：

### 主地图数据
1. 优先从本地文件 `src/assets/geo/chongqing.json` 加载（如果存在）
2. 如果本地文件不存在，从阿里云DataV API加载：`https://geo.datav.aliyun.com/areas_v3/bound/500000_full.json`

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 地图数据数组 | [ChartMapCq3DDataItem[]](#ChartMapCq3DDataItem) | — | `[]` |
| geoJson | 地图GeoJSON数据 | any | — | `undefined` |
| mapName | 地图名称（用于注册echarts地图） | string | — | `'chongqing'` |
| ranges | 颜色范围配置 | [ChartMapCq3DRange[]](#ChartMapCq3DRange) | — | `undefined` |
| defaultRanges | 是否使用默认颜色范围（序时进度） | boolean | — | `true` |
| showLabel | 是否显示标签 | boolean | — | `true` |
| labelStyle | 标签样式 | [LabelStyle](#LabelStyle) | — | `{ color: '#ffffff', fontSize: 10, fontWeight: 'normal' }` |
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
| roam | 是否开启鼠标缩放和平移漫游 | boolean \| 'scale' \| 'move' | true / false / 'scale' / 'move' | `true` |
| heightScale | 3D地图高度缩放比例（0-1） | number | — | `0.1` |
| minHeight | 3D地图最小高度 | number | — | `0` |
| maxHeight | 3D地图最大高度 | number | — | `100` |
| light | 光照配置 | [Light](#Light) | — | `{ main: { intensity: 1, shadow: true }, ambient: { intensity: 0.3 } }` |
| viewControl | 视角配置 | [ViewControl](#ViewControl) | — | `{ alpha: 35, beta: 0, distance: 100, ... }` |

### ChartMapCq3DDataItem {#ChartMapCq3DDataItem}

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| name | 区域名称 | string | — | — |
| value | 数据值（用于颜色映射和高度） | number | — | — |
| color | 自定义颜色（可选，会覆盖根据value计算的颜色） | string | — | — |
| height | 自定义高度（可选，会覆盖根据value计算的高度） | number | — | — |

### ChartMapCq3DRange {#ChartMapCq3DRange}

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
| fontSize | 标签字体大小 | number | — | `10` |
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

### Light {#Light}

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| main | 主光源配置 | [MainLight](#MainLight) | — | `{ intensity: 1, shadow: true }` |
| ambient | 环境光配置 | [AmbientLight](#AmbientLight) | — | `{ intensity: 0.3 }` |

### MainLight {#MainLight}

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| intensity | 光照强度 | number | — | `1` |
| shadow | 是否启用阴影 | boolean | — | `true` |

### AmbientLight {#AmbientLight}

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| intensity | 环境光强度 | number | — | `0.3` |

### ViewControl {#ViewControl}

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| alpha | 视角的 alpha 角度（上下旋转） | number | — | `35` |
| beta | 视角的 beta 角度（左右旋转） | number | — | `0` |
| distance | 视角距离 | number | — | `100` |
| minDistance | 最小视角距离 | number | — | `40` |
| maxDistance | 最大视角距离 | number | — | `200` |
| rotateSensitivity | 旋转灵敏度 | number | — | `1` |
| zoomSensitivity | 缩放灵敏度 | number | — | `1` |
| panSensitivity | 平移灵敏度 | number | — | `1` |
| autoRotate | 是否自动旋转 | boolean | — | `false` |
| autoRotateDirection | 自动旋转方向 | string | cw / ccw | `'cw'` |
| autoRotateSpeed | 自动旋转速度 | number | — | `10` |

## 注意事项

1. **依赖要求**：使用本组件需要安装 `echarts-gl` 依赖：
   ```bash
   npm install echarts-gl
   ```

2. **地图数据**：使用本组件需要提供重庆地图的GeoJSON数据。可以通过以下方式获取：
   - 从 [阿里云DataV](https://datav.aliyun.com/portal/school/atlas/area_selector) 下载
   - 从 [MapShaper](https://mapshaper.org/) 转换
   - 使用其他地图数据源

3. **地图注册**：地图数据可以通过 `geoJson` 属性直接提供，组件会自动注册；或者在外部使用 `echarts.registerMap()` 注册。

4. **颜色映射**：默认使用序时进度的5级颜色映射，可以通过 `ranges` 属性自定义颜色范围。

5. **高度映射**：3D地图的高度根据数据值自动计算，可以通过 `height-scale`、`min-height`、`max-height` 属性调整。

6. **性能优化**：3D地图渲染需要较多计算资源，建议在数据量较大时适当调整 `height-scale` 和视角配置以优化性能。

