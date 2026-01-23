import type { App } from 'vue'
import './style.scss'

// 导入组件
import MButton from './components/Button/index.vue'
import MInput from './components/Input/index.vue'
import MChartBar from './components/ChartBar/index.vue'
import MChartBar3D from './components/ChartBar3D/index.vue'
import MChartPie from './components/ChartPie/index.vue'
import MChartMapCq from './components/ChartMapCq/index.vue'
import MChartMapCq3D from './components/ChartMapCq3D/index.vue'
import MResponsivePage from './components/ResponsivePage/index.vue'
import MScrollBox from './components/ScrollBox/index.vue'
import MEllipsisText from './components/EllipsisText/index.vue'

// 导出组件
export { MButton, MInput, MChartBar, MChartBar3D, MChartPie, MChartMapCq, MChartMapCq3D, MResponsivePage, MScrollBox, MEllipsisText }

// 导出类型
export type { ButtonProps } from './components/Button/types'
export type { InputProps } from './components/Input/types'
export type { ChartBarProps, ChartBarSeries, ChartBarDirection } from './components/ChartBar/types'
export type { ChartBar3DProps, ChartBar3DDataItem, ChartBar3DGradientColor } from './components/ChartBar3D/types'
export type { ChartPieProps, ChartPieDataItem } from './components/ChartPie/types'
export type { ChartMapCqProps, ChartMapCqDataItem, ChartMapCqRange } from './components/ChartMapCq/types'
export type { ChartMapCq3DProps, ChartMapCq3DDataItem, ChartMapCq3DRange } from './components/ChartMapCq3D/types'
export type { ResponsivePageProps, ResponsiveBreakpoint, ResponsiveBreakpoints } from './components/ResponsivePage/types'
export type { ScrollBoxProps } from './components/ScrollBox/types'
export type { EllipsisTextProps, EllipsisTextTag, EllipsisTextPlacement, EllipsisTextTruncateFrom } from './components/EllipsisText/types'

// 组件列表
const components = [MButton, MInput, MChartBar, MChartBar3D, MChartPie, MChartMapCq, MChartMapCq3D, MResponsivePage, MScrollBox, MEllipsisText]

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
  MChartBar3D,
  MChartPie,
  MChartMapCq,
  MChartMapCq3D,
  MResponsivePage,
  MScrollBox,
  MEllipsisText
}

