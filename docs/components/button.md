# Button 按钮

常用的操作按钮。

## 基础用法

基础的按钮用法。

<Demo>
  <div style="display: flex; gap: 10px; flex-wrap: wrap;">
    <MButton>默认按钮</MButton>
    <MButton type="primary">主要按钮</MButton>
    <MButton type="success">成功按钮</MButton>
    <MButton type="warning">警告按钮</MButton>
    <MButton type="danger">危险按钮</MButton>
    <MButton type="info">信息按钮</MButton>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MButton>默认按钮</MButton>
  <MButton type="primary">主要按钮</MButton>
  <MButton type="success">成功按钮</MButton>
  <MButton type="warning">警告按钮</MButton>
  <MButton type="danger">危险按钮</MButton>
  <MButton type="info">信息按钮</MButton>
</template>

<script setup>
import { MButton } from '@jqkgg/m-ui'
</script>
```

</CodeBlock>

## 禁用状态

按钮不可用状态。

<Demo>
  <div style="display: flex; gap: 10px; flex-wrap: wrap;">
    <MButton disabled>默认按钮</MButton>
    <MButton type="primary" disabled>主要按钮</MButton>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MButton disabled>默认按钮</MButton>
  <MButton type="primary" disabled>主要按钮</MButton>
</template>

<script setup>
import { MButton } from '@jqkgg/m-ui'
</script>
```

</CodeBlock>

## 加载状态

点击按钮后进行数据加载操作，在按钮上显示加载状态。

<Demo>
  <div style="display: flex; gap: 10px; flex-wrap: wrap;">
    <MButton type="primary" loading>加载中</MButton>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MButton type="primary" loading>加载中</MButton>
</template>

<script setup>
import { MButton } from '@jqkgg/m-ui'
</script>
```

</CodeBlock>

## 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

<Demo>
  <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
    <MButton size="large">大型按钮</MButton>
    <MButton size="medium">中等按钮</MButton>
    <MButton size="small">小型按钮</MButton>
    <MButton size="mini">超小按钮</MButton>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MButton size="large">大型按钮</MButton>
  <MButton size="medium">中等按钮</MButton>
  <MButton size="small">小型按钮</MButton>
  <MButton size="mini">超小按钮</MButton>
</template>

<script setup>
import { MButton } from '@jqkgg/m-ui'
</script>
```

</CodeBlock>

## 圆角按钮

<Demo>
  <div style="display: flex; gap: 10px; flex-wrap: wrap;">
    <MButton round>圆角按钮</MButton>
    <MButton type="primary" round>主要按钮</MButton>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MButton round>圆角按钮</MButton>
  <MButton type="primary" round>主要按钮</MButton>
</template>

<script setup>
import { MButton } from '@jqkgg/m-ui'
</script>
```

</CodeBlock>

## 圆形按钮

<Demo>
  <div style="display: flex; gap: 10px; flex-wrap: wrap;">
    <MButton circle>圆</MButton>
    <MButton type="primary" circle>圆</MButton>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MButton circle>圆</MButton>
  <MButton type="primary" circle>圆</MButton>
</template>

<script setup>
import { MButton } from '@jqkgg/m-ui'
</script>
```

</CodeBlock>

## 朴素按钮

<Demo>
  <div style="display: flex; gap: 10px; flex-wrap: wrap;">
    <MButton plain>朴素按钮</MButton>
    <MButton type="primary" plain>主要按钮</MButton>
    <MButton type="success" plain>成功按钮</MButton>
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MButton plain>朴素按钮</MButton>
  <MButton type="primary" plain>主要按钮</MButton>
  <MButton type="success" plain>成功按钮</MButton>
</template>

<script setup>
import { MButton } from '@jqkgg/m-ui'
</script>
```

</CodeBlock>

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| type | 类型 | string | default / primary / success / warning / danger / info | default |
| size | 尺寸 | string | large / medium / small / mini | medium |
| plain | 是否朴素按钮 | boolean | — | false |
| round | 是否圆角按钮 | boolean | — | false |
| circle | 是否圆形按钮 | boolean | — | false |
| disabled | 是否禁用 | boolean | — | false |
| loading | 是否加载中状态 | boolean | — | false |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击事件 | event: MouseEvent |

