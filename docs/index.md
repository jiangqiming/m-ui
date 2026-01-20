# M-UI

一个基于 Vue3 的组件库

## 特性

- 🎨 丰富的组件
- 📦 按需引入
- TypeScript 支持
- 🎯 Vue3 Composition API
- 📱 响应式设计

## 安装

```bash
npm install @jqkgg/m-ui
```

## 快速开始

### 完整引入

```javascript
import { createApp } from 'vue'
import MUI from '@jqkgg/m-ui'
import '@jqkgg/m-ui/dist/style.css'

const app = createApp(App)
app.use(MUI)
app.mount('#app')
```

### 按需引入

```javascript
import { MButton, MInput } from '@jqkgg/m-ui'
import '@jqkgg/m-ui/dist/style.css'
```

## 使用示例

```vue
<template>
  <div>
    <MButton type="primary">主要按钮</MButton>
    <MInput v-model="value" placeholder="请输入内容" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { MButton, MInput } from '@jqkgg/m-ui'

const value = ref('')
</script>
```

