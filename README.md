# M-UI

一个基于 Vue3 的组件库，类似 Element UI。

## 特性

- 🎨 丰富的组件
- 📦 按需引入
- 🔷 TypeScript 支持
- 🎯 Vue3 Composition API
- 📱 响应式设计
- 🚀 基于 Vite 构建

## 安装

```bash
npm install @jiangqiming/m-ui
```

## 快速开始

📖 [使用文档](https://jiangqiming.github.io/m-ui/)

### 完整引入

```javascript
import { createApp } from 'vue'
import MUI from '@jiangqiming/m-ui'
import '@jiangqiming/m-ui/style.css'

const app = createApp(App)
app.use(MUI)
app.mount('#app')
```

### 按需引入

```javascript
import { MButton, MInput } from '@jiangqiming/m-ui'
import '@jiangqiming/m-ui/style.css'
```

## 使用示例

```vue
<template>
  <div>
    <MButton type="primary" @click="handleClick">主要按钮</MButton>
    <MInput v-model="value" placeholder="请输入内容" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { MButton, MInput } from '@jiangqiming/m-ui'

const value = ref('')

const handleClick = () => {
  console.log('按钮被点击')
}
</script>
```

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器（查看组件演示）
npm run dev

# 构建组件库
npm run build

# 启动文档开发服务器
npm run dev:docs

# 构建文档
npm run build:docs
```

## 组件

- Button 按钮
- Input 输入框

更多组件正在开发中...

## 浏览器支持

现代浏览器和 IE11+（需要 polyfills）

## 技术栈

- Vue 3
- TypeScript
- Vite
- Tailwind CSS
- SCSS
- VitePress（文档）

## License

MIT

