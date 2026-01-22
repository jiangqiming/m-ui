import type { App } from 'vue'
import './style.scss'

// 导入组件
import MButton from './components/Button/index.vue'
import MInput from './components/Input/index.vue'
import MChartBar from './components/ChartBar/index.vue'
import MChartPie from './components/ChartPie/index.vue'
import MResponsivePage from './components/ResponsivePage/index.vue'

// 导出组件
export { MButton, MInput, MChartBar, MChartPie, MResponsivePage }

// 导出类型
export type { ButtonProps } from './components/Button/types'
export type { InputProps } from './components/Input/types'
export type { ChartBarProps, ChartBarSeries, ChartBarDirection } from './components/ChartBar/types'
export type { ChartPieProps, ChartPieDataItem } from './components/ChartPie/types'
export type { ResponsivePageProps, ResponsiveBreakpoint, ResponsiveBreakpoints } from './components/ResponsivePage/types'

// 组件列表
const components = [MButton, MInput, MChartBar, MChartPie, MResponsivePage]

// 安装函数
const install = (app: App) => {
  components.forEach(component => {
    const name = component.name || component.__name || 'UnknownComponent'
    app.component(name, component)
  })
}

// 支持按需引入
export default {
  install,
  MButton,
  MInput,
  MChartBar,
  MChartPie,
  MResponsivePage
}

