export type ChartBarDirection = 'horizontal' | 'vertical'

export interface ChartBarSeries {
  name: string
  data: number[]
  color?: string
}

export interface ChartBarProps {
  /** 系列数据，默认一个系列 */
  series?: ChartBarSeries[]
  /** 类别数据 */
  categories?: string[]
  /** 方向，横向或纵向，默认横向 */
  direction?: ChartBarDirection
  /** 颜色数组，默认三个颜色，作用于柱子 */
  colors?: string[]
  /** 是否显示图例 */
  showLegend?: boolean
  /** 图表高度 */
  height?: number | string
  /** 图表宽度 */
  width?: number | string
  /** 柱子间距 */
  barGap?: number
  /** 同一类别柱子间距 */
  barCategoryGap?: number
  /** 启用滚动的数据量阈值，超过此数量自动启用滚动 */
  scrollThreshold?: number
  /** 滚动速度（每次滚动的像素数） */
  scrollSpeed?: number
  /** 滚动间隔（毫秒） */
  scrollInterval?: number
  /** 是否启用滚动 */
  enableScroll?: boolean
  /** 每次滚动显示的数据项数量 */
  visibleCount?: number
  /** 完全自定义的 ECharts 配置项，传入后将以 options 为准，忽略其他属性。参考：https://echarts.apache.org/zh/option.html#series-bar.type */
  options?: any
}

