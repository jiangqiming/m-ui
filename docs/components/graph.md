# ChartGraph 关系图

用于展示节点和边的关系图组件，支持力引导布局、圆形布局等多种布局方式，适合展示网络关系、组织结构、地铁线路等场景。

<script setup>
import { ref } from 'vue'

// 基础关系图数据
const basicNodes = ref([
  { name: '节点1', value: 1 },
  { name: '节点2', value: 2 },
  { name: '节点3', value: 3 },
  { name: '节点4', value: 4 }
])

const basicLinks = ref([
  { source: '节点1', target: '节点2' },
  { source: '节点2', target: '节点3' },
  { source: '节点3', target: '节点4' },
  { source: '节点4', target: '节点1' }
])

// 分类关系图数据
const categoryNodes = ref([
  { name: 'A1', value: 1, category: 0 },
  { name: 'A2', value: 2, category: 0 },
  { name: 'B1', value: 1, category: 1 },
  { name: 'B2', value: 2, category: 1 },
  { name: 'C1', value: 1, category: 2 }
])

const categoryLinks = ref([
  { source: 'A1', target: 'A2' },
  { source: 'B1', target: 'B2' },
  { source: 'A1', target: 'B1' },
  { source: 'A2', target: 'C1' }
])

const categories = ref([
  { name: '类别A', itemStyle: { color: '#5470C6' } },
  { name: '类别B', itemStyle: { color: '#91CC75' } },
  { name: '类别C', itemStyle: { color: '#FAC858' } }
])

// 地铁图数据（换乘站合并为一个节点）
const metroNodes = ref([
  // 1号线
  { name: '朝天门', category: 0, symbolSize: 25 },
  { name: '小什字', category: 0, symbolSize: 20 },
  { name: '较场口', category: 0, symbolSize: 25 }, // 换乘站
  { name: '七星岗', category: 0, symbolSize: 20 },
  { name: '两路口', category: 0, symbolSize: 25 },
  { name: '鹅岭', category: 0, symbolSize: 20 },
  { name: '大坪', category: 0, symbolSize: 25 }, // 换乘站
  { name: '石油路', category: 0, symbolSize: 20 },
  { name: '歇台子', category: 0, symbolSize: 20 },
  { name: '石桥铺', category: 0, symbolSize: 25 },
  // 2号线
  { name: '鱼洞', category: 1, symbolSize: 25 }, // 换乘站
  { name: '大江', category: 1, symbolSize: 20 },
  { name: '花溪', category: 1, symbolSize: 20 }, // 换乘站
  { name: '大渡口', category: 1, symbolSize: 20 }, // 换乘站
  { name: '新山村', category: 1, symbolSize: 20 }, // 换乘站
  { name: '白市驿', category: 1, symbolSize: 20 }, // 换乘站
  { name: '杨家坪', category: 1, symbolSize: 25 }, // 换乘站
  { name: '动物园', category: 1, symbolSize: 20 }, // 换乘站
  { name: '大堰村', category: 1, symbolSize: 20 }, // 换乘站
  { name: '马王乡', category: 1, symbolSize: 20 }, // 换乘站
  { name: '佛图关', category: 1, symbolSize: 20 }, // 换乘站
  { name: '李子坝', category: 1, symbolSize: 20 }, // 换乘站
  { name: '牛角沱', category: 1, symbolSize: 20 }, // 换乘站
  { name: '曾家岩', category: 1, symbolSize: 20 },
  { name: '大溪沟', category: 1, symbolSize: 20 },
  { name: '黄花园', category: 1, symbolSize: 20 },
  { name: '临江门', category: 1, symbolSize: 20 },
  // 3号线
  { name: '鱼胡路', category: 2, symbolSize: 20 },
  { name: '学堂湾', category: 2, symbolSize: 20 },
  { name: '大山村', category: 2, symbolSize: 20 },
  { name: '华新街', category: 2, symbolSize: 20 },
  { name: '观音桥', category: 2, symbolSize: 25 },
  { name: '红旗河沟', category: 2, symbolSize: 20 },
  { name: '嘉州路', category: 2, symbolSize: 20 },
  { name: '郑家院子', category: 2, symbolSize: 20 },
  { name: '唐家院子', category: 2, symbolSize: 20 },
  { name: '狮子坪', category: 2, symbolSize: 20 },
  { name: '重庆北站', category: 2, symbolSize: 25 },
  { name: '龙头寺', category: 2, symbolSize: 20 },
  { name: '童家院子', category: 2, symbolSize: 20 },
  { name: '金渝', category: 2, symbolSize: 20 },
  { name: '金童路', category: 2, symbolSize: 20 },
  { name: '鸳鸯', category: 2, symbolSize: 20 },
  { name: '园博园', category: 2, symbolSize: 20 },
  { name: '翠云', category: 2, symbolSize: 20 },
  { name: '长福路', category: 2, symbolSize: 20 },
  { name: '回兴', category: 2, symbolSize: 20 },
  { name: '双龙', category: 2, symbolSize: 20 },
  { name: '碧津', category: 2, symbolSize: 20 },
  { name: '江北机场T2', category: 2, symbolSize: 25 },
  { name: '江北机场T3', category: 2, symbolSize: 25 }
])

const metroLinks = ref([
  // 1号线
  { source: '朝天门', target: '小什字', lineStyle: { color: '#FF6B6B', width: 3 } },
  { source: '小什字', target: '较场口', lineStyle: { color: '#FF6B6B', width: 3 } },
  { source: '较场口', target: '七星岗', lineStyle: { color: '#FF6B6B', width: 3 } },
  { source: '七星岗', target: '两路口', lineStyle: { color: '#FF6B6B', width: 3 } },
  { source: '两路口', target: '鹅岭', lineStyle: { color: '#FF6B6B', width: 3 } },
  { source: '鹅岭', target: '大坪', lineStyle: { color: '#FF6B6B', width: 3 } },
  { source: '大坪', target: '石油路', lineStyle: { color: '#FF6B6B', width: 3 } },
  { source: '石油路', target: '歇台子', lineStyle: { color: '#FF6B6B', width: 3 } },
  { source: '歇台子', target: '石桥铺', lineStyle: { color: '#FF6B6B', width: 3 } },
  // 2号线
  { source: '鱼洞', target: '大江', lineStyle: { color: '#4ECDC4', width: 3 } },
  { source: '大江', target: '花溪', lineStyle: { color: '#4ECDC4', width: 3 } },
  { source: '花溪', target: '大渡口', lineStyle: { color: '#4ECDC4', width: 3 } },
  { source: '大渡口', target: '新山村', lineStyle: { color: '#4ECDC4', width: 3 } },
  { source: '新山村', target: '白市驿', lineStyle: { color: '#4ECDC4', width: 3 } },
  { source: '白市驿', target: '杨家坪', lineStyle: { color: '#4ECDC4', width: 3 } },
  { source: '杨家坪', target: '动物园', lineStyle: { color: '#4ECDC4', width: 3 } },
  { source: '动物园', target: '大堰村', lineStyle: { color: '#4ECDC4', width: 3 } },
  { source: '大堰村', target: '马王乡', lineStyle: { color: '#4ECDC4', width: 3 } },
  { source: '马王乡', target: '大坪', lineStyle: { color: '#4ECDC4', width: 3 } },
  { source: '大坪', target: '佛图关', lineStyle: { color: '#4ECDC4', width: 3 } },
  { source: '佛图关', target: '李子坝', lineStyle: { color: '#4ECDC4', width: 3 } },
  { source: '李子坝', target: '牛角沱', lineStyle: { color: '#4ECDC4', width: 3 } },
  { source: '牛角沱', target: '曾家岩', lineStyle: { color: '#4ECDC4', width: 3 } },
  { source: '曾家岩', target: '大溪沟', lineStyle: { color: '#4ECDC4', width: 3 } },
  { source: '大溪沟', target: '黄花园', lineStyle: { color: '#4ECDC4', width: 3 } },
  { source: '黄花园', target: '临江门', lineStyle: { color: '#4ECDC4', width: 3 } },
  { source: '临江门', target: '较场口', lineStyle: { color: '#4ECDC4', width: 3 } },
  // 3号线
  { source: '鱼洞', target: '鱼胡路', lineStyle: { color: '#95E1D3', width: 3 } },
  { source: '鱼胡路', target: '学堂湾', lineStyle: { color: '#95E1D3', width: 3 } },
  { source: '学堂湾', target: '大山村', lineStyle: { color: '#95E1D3', width: 3 } },
  { source: '大山村', target: '花溪', lineStyle: { color: '#95E1D3', width: 3 } },
  { source: '花溪', target: '大渡口', lineStyle: { color: '#95E1D3', width: 3 } },
  { source: '大渡口', target: '新山村', lineStyle: { color: '#95E1D3', width: 3 } },
  { source: '新山村', target: '白市驿', lineStyle: { color: '#95E1D3', width: 3 } },
  { source: '白市驿', target: '杨家坪', lineStyle: { color: '#95E1D3', width: 3 } },
  { source: '杨家坪', target: '动物园', lineStyle: { color: '#95E1D3', width: 3 } },
  { source: '动物园', target: '大堰村', lineStyle: { color: '#95E1D3', width: 3 } },
  { source: '大堰村', target: '马王乡', lineStyle: { color: '#95E1D3', width: 3 } },
  { source: '马王乡', target: '大坪', lineStyle: { color: '#95E1D3', width: 3 } },
  { source: '大坪', target: '佛图关', lineStyle: { color: '#95E1D3', width: 3 } },
  { source: '佛图关', target: '李子坝', lineStyle: { color: '#95E1D3', width: 3 } },
  { source: '李子坝', target: '牛角沱', lineStyle: { color: '#95E1D3', width: 3 } },
  { source: '牛角沱', target: '华新街', lineStyle: { color: '#95E1D3', width: 3 } },
  { source: '华新街', target: '观音桥', lineStyle: { color: '#95E1D3', width: 3 } },
  { source: '观音桥', target: '红旗河沟', lineStyle: { color: '#95E1D3', width: 3 } },
  { source: '红旗河沟', target: '嘉州路', lineStyle: { color: '#95E1D3', width: 3 } },
  { source: '嘉州路', target: '郑家院子', lineStyle: { color: '#95E1D3', width: 3 } },
  { source: '郑家院子', target: '唐家院子', lineStyle: { color: '#95E1D3', width: 3 } },
  { source: '唐家院子', target: '狮子坪', lineStyle: { color: '#95E1D3', width: 3 } },
  { source: '狮子坪', target: '重庆北站', lineStyle: { color: '#95E1D3', width: 3 } },
  { source: '重庆北站', target: '龙头寺', lineStyle: { color: '#95E1D3', width: 3 } },
  { source: '龙头寺', target: '童家院子', lineStyle: { color: '#95E1D3', width: 3 } },
  { source: '童家院子', target: '金渝', lineStyle: { color: '#95E1D3', width: 3 } },
  { source: '金渝', target: '金童路', lineStyle: { color: '#95E1D3', width: 3 } },
  { source: '金童路', target: '鸳鸯', lineStyle: { color: '#95E1D3', width: 3 } },
  { source: '鸳鸯', target: '园博园', lineStyle: { color: '#95E1D3', width: 3 } },
  { source: '园博园', target: '翠云', lineStyle: { color: '#95E1D3', width: 3 } },
  { source: '翠云', target: '长福路', lineStyle: { color: '#95E1D3', width: 3 } },
  { source: '长福路', target: '回兴', lineStyle: { color: '#95E1D3', width: 3 } },
  { source: '回兴', target: '双龙', lineStyle: { color: '#95E1D3', width: 3 } },
  { source: '双龙', target: '碧津', lineStyle: { color: '#95E1D3', width: 3 } },
  { source: '碧津', target: '江北机场T2', lineStyle: { color: '#95E1D3', width: 3 } },
  { source: '江北机场T2', target: '江北机场T3', lineStyle: { color: '#95E1D3', width: 3 } }
])

const metroCategories = ref([
  { name: '1号线', itemStyle: { color: '#FF6B6B' } },
  { name: '2号线', itemStyle: { color: '#4ECDC4' } },
  { name: '3号线', itemStyle: { color: '#95E1D3' } }
])

const layout = ref('force')
const showLabel = ref(true)
</script>

## 基础用法

基础的关系图用法，使用力引导布局。

<Demo>
  <div style="width: 100%; height: 500px;">
    <MChartGraph
      :nodes="basicNodes"
      :links="basicLinks"
      layout="force"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartGraph
    :nodes="[
      { name: '节点1', value: 1 },
      { name: '节点2', value: 2 },
      { name: '节点3', value: 3 },
      { name: '节点4', value: 4 }
    ]"
    :links="[
      { source: '节点1', target: '节点2' },
      { source: '节点2', target: '节点3' },
      { source: '节点3', target: '节点4' },
      { source: '节点4', target: '节点1' }
    ]"
    layout="force"
  />
</template>

<script setup>
import { MChartGraph } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 分类关系图

通过 `categories` 属性可以设置节点分类，不同分类的节点会显示不同的颜色。

<Demo>
  <div style="width: 100%; height: 500px;">
    <MChartGraph
      :nodes="categoryNodes"
      :links="categoryLinks"
      :categories="categories"
      :show-legend="true"
      layout="force"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartGraph
    :nodes="[
      { name: 'A1', value: 1, category: 0 },
      { name: 'A2', value: 2, category: 0 },
      { name: 'B1', value: 1, category: 1 },
      { name: 'B2', value: 2, category: 1 }
    ]"
    :links="[
      { source: 'A1', target: 'A2' },
      { source: 'B1', target: 'B2' },
      { source: 'A1', target: 'B1' }
    ]"
    :categories="[
      { name: '类别A', itemStyle: { color: '#5470C6' } },
      { name: '类别B', itemStyle: { color: '#91CC75' } }
    ]"
    :show-legend="true"
    layout="force"
  />
</template>

<script setup>
import { MChartGraph } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 地铁线路图

关系图非常适合展示地铁线路图，通过节点表示站点，边表示线路连接。

<Demo>
  <div style="width: 100%; height: 600px;">
    <MChartGraph
      :nodes="metroNodes"
      :links="metroLinks"
      :categories="metroCategories"
      :show-legend="true"
      :show-label="showLabel"
      layout="force"
      :force-config="{
        repulsion: 100,
        gravity: 0.05,
        edgeLength: 50,
        layoutIterations: 100
      }"
      :roam="true"
      :draggable="true"
    />
  </div>
  <div style="margin-top: 16px;">
    <el-checkbox v-model="showLabel">显示站点名称</el-checkbox>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartGraph
    :nodes="metroNodes"
    :links="metroLinks"
    :categories="metroCategories"
    :show-legend="true"
    :show-label="true"
    layout="force"
    :force-config="{
      repulsion: 100,
      gravity: 0.05,
      edgeLength: 50,
      layoutIterations: 100
    }"
    :roam="true"
    :draggable="true"
  />
</template>

<script setup>
import { ref } from 'vue'
import { MChartGraph } from '@jqkgg/m-ui'

const metroNodes = ref([
  // 1号线
  { name: '朝天门', category: 0, symbolSize: 25 },
  { name: '小什字', category: 0, symbolSize: 20 },
  { name: '较场口', category: 0, symbolSize: 20 },
  // ... 更多站点
])

const metroLinks = ref([
  { source: '朝天门', target: '小什字', lineStyle: { color: '#FF6B6B', width: 3 } },
  { source: '小什字', target: '较场口', lineStyle: { color: '#FF6B6B', width: 3 } },
  // ... 更多连接
])

const metroCategories = ref([
  { name: '1号线', itemStyle: { color: '#FF6B6B' } },
  { name: '2号线', itemStyle: { color: '#4ECDC4' } },
  { name: '3号线', itemStyle: { color: '#95E1D3' } }
])
</script>
```
</CodeBlock>

## 布局方式

通过 `layout` 属性可以设置不同的布局方式，支持 `force`（力引导）、`circular`（圆形）、`none`（无布局，使用固定坐标）。

<Demo>
  <div style="width: 100%; height: 500px;">
    <MChartGraph
      :nodes="basicNodes"
      :links="basicLinks"
      :layout="layout"
    />
  </div>
  <div style="margin-top: 16px;">
    <el-radio-group v-model="layout">
      <el-radio label="force">力引导布局</el-radio>
      <el-radio label="circular">圆形布局</el-radio>
      <el-radio label="none">无布局</el-radio>
    </el-radio-group>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <div>
    <div style="width: 100%; height: 500px;">
      <MChartGraph
        :nodes="nodes"
        :links="links"
        :layout="layout"
      />
    </div>
    <div style="margin-top: 16px;">
      <el-radio-group v-model="layout">
        <el-radio label="force">力引导布局</el-radio>
        <el-radio label="circular">圆形布局</el-radio>
        <el-radio label="none">无布局</el-radio>
      </el-radio-group>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { MChartGraph } from '@jqkgg/m-ui'

const layout = ref('force')
</script>
```
</CodeBlock>

## 力引导布局配置

通过 `force-config` 属性可以自定义力引导布局的参数。

<Demo>
  <div style="width: 100%; height: 500px;">
    <MChartGraph
      :nodes="basicNodes"
      :links="basicLinks"
      layout="force"
      :force-config="{
        repulsion: 100,
        gravity: 0.1,
        edgeLength: 50,
        layoutIterations: 100
      }"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartGraph
    :nodes="nodes"
    :links="links"
    layout="force"
    :force-config="{
      repulsion: 100,
      gravity: 0.1,
      edgeLength: 50,
      layoutIterations: 100
    }"
  />
</template>

<script setup>
import { MChartGraph } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 自定义节点样式

每个节点可以单独设置样式，包括大小、颜色等。

<Demo>
  <div style="width: 100%; height: 500px;">
    <MChartGraph
      :nodes="[
        { name: '节点1', value: 1, symbolSize: 30, itemStyle: { color: '#FF6B6B' } },
        { name: '节点2', value: 2, symbolSize: 40, itemStyle: { color: '#4ECDC4' } },
        { name: '节点3', value: 3, symbolSize: 50, itemStyle: { color: '#95E1D3' } }
      ]"
      :links="[
        { source: '节点1', target: '节点2' },
        { source: '节点2', target: '节点3' }
      ]"
      layout="force"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartGraph
    :nodes="[
      { name: '节点1', value: 1, symbolSize: 30, itemStyle: { color: '#FF6B6B' } },
      { name: '节点2', value: 2, symbolSize: 40, itemStyle: { color: '#4ECDC4' } },
      { name: '节点3', value: 3, symbolSize: 50, itemStyle: { color: '#95E1D3' } }
    ]"
    :links="[
      { source: '节点1', target: '节点2' },
      { source: '节点2', target: '节点3' }
    ]"
    layout="force"
  />
</template>

<script setup>
import { MChartGraph } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 自定义边样式

每条边可以单独设置样式，包括颜色、宽度、类型等。

<Demo>
  <div style="width: 100%; height: 500px;">
    <MChartGraph
      :nodes="basicNodes"
      :links="[
        { source: '节点1', target: '节点2', lineStyle: { color: '#FF6B6B', width: 3 } },
        { source: '节点2', target: '节点3', lineStyle: { color: '#4ECDC4', width: 5, type: 'dashed' } },
        { source: '节点3', target: '节点4', lineStyle: { color: '#95E1D3', width: 2, type: 'dotted' } }
      ]"
      layout="force"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartGraph
    :nodes="nodes"
    :links="[
      { source: '节点1', target: '节点2', lineStyle: { color: '#FF6B6B', width: 3 } },
      { source: '节点2', target: '节点3', lineStyle: { color: '#4ECDC4', width: 5, type: 'dashed' } }
    ]"
    layout="force"
  />
</template>

<script setup>
import { MChartGraph } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 缩放和平移

通过 `roam` 属性可以启用缩放和平移功能。

<Demo>
  <div style="width: 100%; height: 500px;">
    <MChartGraph
      :nodes="basicNodes"
      :links="basicLinks"
      layout="force"
      :roam="true"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartGraph
    :nodes="nodes"
    :links="links"
    layout="force"
    :roam="true"
  />
</template>

<script setup>
import { MChartGraph } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 拖拽节点

通过 `draggable` 属性可以启用节点拖拽功能。

<Demo>
  <div style="width: 100%; height: 500px;">
    <MChartGraph
      :nodes="basicNodes"
      :links="basicLinks"
      layout="force"
      :draggable="true"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartGraph
    :nodes="nodes"
    :links="links"
    layout="force"
    :draggable="true"
  />
</template>

<script setup>
import { MChartGraph } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## 固定节点位置

通过设置节点的 `x` 和 `y` 坐标可以固定节点位置，需要配合 `layout="none"` 使用。

<Demo>
  <div style="width: 100%; height: 500px;">
    <MChartGraph
      :nodes="[
        { name: '节点1', x: 100, y: 100 },
        { name: '节点2', x: 300, y: 100 },
        { name: '节点3', x: 200, y: 300 }
      ]"
      :links="[
        { source: '节点1', target: '节点2' },
        { source: '节点2', target: '节点3' },
        { source: '节点3', target: '节点1' }
      ]"
      layout="none"
    />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MChartGraph
    :nodes="[
      { name: '节点1', x: 100, y: 100 },
      { name: '节点2', x: 300, y: 100 },
      { name: '节点3', x: 200, y: 300 }
    ]"
    :links="[
      { source: '节点1', target: '节点2' },
      { source: '节点2', target: '节点3' }
    ]"
    layout="none"
  />
</template>

<script setup>
import { MChartGraph } from '@jqkgg/m-ui'
</script>
```
</CodeBlock>

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| nodes | 节点数据数组 | ChartGraphNode[] | — | `[{ name: '节点1', value: 1 }, ...]` |
| links | 边数据数组 | ChartGraphLink[] | — | `[{ source: '节点1', target: '节点2' }, ...]` |
| categories | 分类数据数组（可选，用于图例和颜色分组） | ChartGraphCategory[] | — | `[]` |
| layout | 布局方式 | string | force / circular / none | force |
| forceLayout | 是否启用力引导布局 | boolean | — | true |
| forceConfig | 力引导布局配置 | object | — | `{ repulsion: 50, gravity: 0.1, edgeLength: 30, layoutIterations: 50 }` |
| showLabel | 是否显示标签 | boolean | — | true |
| labelFontSize | 标签字体大小 | number | — | 12 |
| showLegend | 是否显示图例 | boolean | — | false |
| legendPosition | 图例位置 | string | top / bottom / left / right | top |
| height | 图表高度 | number \| string | — | '400px' |
| width | 图表宽度 | number \| string | — | '100%' |
| backgroundColor | 背景色 | string | — | transparent |
| draggable | 是否启用拖拽 | boolean | — | true |
| roam | 是否启用缩放和平移 | boolean \| string | true / false / 'scale' / 'move' | false |
| nodeSize | 节点默认大小 | number \| [number, number] | — | 20 |
| nodeColor | 节点默认颜色 | string | — | '#5470C6' |
| linkColor | 边默认颜色 | string | — | '#91CC75' |
| linkWidth | 边默认宽度 | number | — | 1 |
| animation | 是否启用动画 | boolean | — | true |
| animationDuration | 动画持续时间（毫秒） | number | — | 1000 |
| options | 完全自定义的 ECharts 配置项，传入后将以 options 为准，忽略其他属性 | object | — | undefined |

### ChartGraphNode

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| name | 节点名称 | string | — | — |
| value | 节点值（可选，用于控制节点大小） | number | — | — |
| category | 节点分类（可选，用于分组和颜色） | number \| string | — | — |
| x | 节点X坐标（可选，用于固定位置） | number | — | — |
| y | 节点Y坐标（可选，用于固定位置） | number | — | — |
| symbolSize | 节点大小（可选） | number | — | — |
| itemStyle | 节点样式（可选） | object | — | — |
| label | 节点标签配置（可选） | object | — | — |

### ChartGraphLink

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| source | 源节点名称 | string | — | — |
| target | 目标节点名称 | string | — | — |
| value | 边的值（可选，用于控制边的粗细） | number | — | — |
| lineStyle | 边的样式（可选） | object | — | — |
| label | 边的标签（可选） | object | — | — |

### ChartGraphCategory

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| name | 分类名称 | string | — | — |
| itemStyle | 分类样式（可选） | object | — | — |

