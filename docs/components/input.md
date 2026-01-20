# Input 输入框

通过鼠标或键盘输入字符。

<script setup>
import { ref } from 'vue'

const input1 = ref('')
const input2 = ref('')
const input3 = ref('只读输入框')
const input4 = ref('')
const text = ref('')
const password = ref('')
const number = ref('')
const email = ref('')
</script>

## 基础用法

<Demo>
  <div style="width: 300px;">
    <MInput v-model="input1" placeholder="请输入内容" />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MInput v-model="input" placeholder="请输入内容" />
</template>

<script setup>
import { ref } from 'vue'
import { MInput } from '@jqkgg/m-ui'

const input = ref('')
</script>
```

</CodeBlock>

## 禁用状态

<Demo>
  <div style="width: 300px;">
    <MInput v-model="input2" placeholder="请输入内容" disabled />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MInput v-model="input" placeholder="请输入内容" disabled />
</template>

<script setup>
import { ref } from 'vue'
import { MInput } from '@jqkgg/m-ui'

const input = ref('')
</script>
```

</CodeBlock>

## 只读状态

<Demo>
  <div style="width: 300px;">
    <MInput v-model="input3" placeholder="请输入内容" readonly />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MInput v-model="input" placeholder="请输入内容" readonly />
</template>

<script setup>
import { ref } from 'vue'
import { MInput } from '@jqkgg/m-ui'

const input = ref('只读输入框')
</script>
```

</CodeBlock>

## 错误状态

<Demo>
  <div style="width: 300px;">
    <MInput v-model="input4" placeholder="请输入内容" error />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MInput v-model="input" placeholder="请输入内容" error />
</template>

<script setup>
import { ref } from 'vue'
import { MInput } from '@jqkgg/m-ui'

const input = ref('')
</script>
```

</CodeBlock>

## 不同输入类型

<Demo>
  <div style="display: flex; flex-direction: column; gap: 10px; width: 300px;">
    <MInput v-model="text" type="text" placeholder="文本" />
    <MInput v-model="password" type="password" placeholder="密码" />
    <MInput v-model="number" type="number" placeholder="数字" />
    <MInput v-model="email" type="email" placeholder="邮箱" />
  </div>
</Demo>

<CodeBlock>

```vue
<template>
  <MInput v-model="text" type="text" placeholder="文本" />
  <MInput v-model="password" type="password" placeholder="密码" />
  <MInput v-model="number" type="number" placeholder="数字" />
  <MInput v-model="email" type="email" placeholder="邮箱" />
</template>

<script setup>
import { ref } from 'vue'
import { MInput } from '@jqkgg/m-ui'

const text = ref('')
const password = ref('')
const number = ref('')
const email = ref('')
</script>
```

</CodeBlock>

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| type | 类型 | string | text / password / number / email / tel / url / search | text |
| modelValue / v-model | 绑定值 | string | — | — |
| placeholder | 输入框占位文本 | string | — | — |
| disabled | 是否禁用 | boolean | — | false |
| readonly | 是否只读 | boolean | — | false |
| maxlength | 最大输入长度 | number | — | — |
| error | 是否错误状态 | boolean | — | false |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| input | 输入时触发 | value: string |
| focus | 获得焦点时触发 | event: FocusEvent |
| blur | 失去焦点时触发 | event: FocusEvent |
| change | 值改变时触发 | value: string |

