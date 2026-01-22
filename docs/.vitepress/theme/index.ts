import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { MButton, MInput, MChartBar, MChartPie, MResponsivePage, MScrollBox, MEllipsisText } from '@jqkgg/m-ui'
import Demo from '../components/Demo.vue'
import CodeBlock from '../components/CodeBlock.vue'
import '../../../src/style.css'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册组件
    app.component('MButton', MButton)
    app.component('MInput', MInput)
    app.component('MChartBar', MChartBar)
    app.component('MChartPie', MChartPie)
    app.component('MResponsivePage', MResponsivePage)
    app.component('MScrollBox', MScrollBox)
    app.component('MEllipsisText', MEllipsisText)
    app.component('Demo', Demo)
    app.component('CodeBlock', CodeBlock)
  }
} satisfies Theme

