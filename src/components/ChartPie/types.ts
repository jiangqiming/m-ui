export interface ChartPieDataItem {
  /** 数据项名称 */
  name: string
  /** 数据项值 */
  value: number
  /** 自定义颜色（可选） */
  color?: string
}

export type ChartPieRoseType = 'radius' | 'area' | false

export interface ChartPieProps {
  /** 数据数组 */
  data?: ChartPieDataItem[]
  /** 默认颜色数组 */
  colors?: string[]
  /** 是否显示图例 */
  showLegend?: boolean
  /** 图例位置 */
  legendPosition?: 'left' | 'right' | 'top' | 'bottom'
  /** 图表高度 */
  height?: number | string
  /** 图表宽度 */
  width?: number | string
  /** 内半径（0-1之间，用于控制环形图的内圆大小，0为饼图） */
  innerRadius?: number | string
  /** 外半径（0-1之间，用于控制环形图的外圆大小） */
  radius?: number | string
  /** 是否显示标签 */
  showLabel?: boolean
  /** 标签位置 */
  labelPosition?: 'inside' | 'outside' | 'center'
  /** 是否显示百分比 */
  showPercent?: boolean
  /** 是否显示数值 */
  showValue?: boolean
  /** 图例是否显示数值 */
  legendShowValue?: boolean
  /** 图例是否显示百分比 */
  legendShowPercent?: boolean
  /** 百分比小数位数，控制标签、图例和 tooltip 中百分比的精度 */
  percentPrecision?: number
  /** tooltip 中是否显示百分比 */
  tooltipShowPercent?: boolean
  /** 是否启用进度环模式，启用后显示为单值进度环，中心显示百分比 */
  progressMode?: boolean
  /** 进度环的最大值（用于计算百分比），默认为100 */
  progressMax?: number
  /** 进度环的渐变色配置，格式为 [起始色, 结束色] */
  progressColor?: [string, string]
  /** 进度环未完成部分的颜色 */
  progressBgColor?: string
  /** 进度环中心显示的文案（显示在百分比上方） */
  progressLabel?: string
  /** 是否启用仪表盘模式，启用后显示为半圆形仪表盘 */
  gaugeMode?: boolean
  /** 仪表盘的最小值 */
  gaugeMin?: number
  /** 仪表盘的最大值 */
  gaugeMax?: number
  /** 仪表盘的分段颜色配置 */
  gaugeColor?: string[]
  /** 是否启用水球模式，启用后显示为水波动画效果 */
  liquidMode?: boolean
  /** 水球颜色 */
  liquidColor?: string
  /** 水球背景色 */
  liquidBgColor?: string
  /** 水球半径（相对于容器大小的比例，0-1之间，默认0.4） */
  liquidRadius?: number
  /** 玫瑰图类型，'radius' 表示扇形的半径根据数值大小而变化，'area' 表示扇形的面积根据数值大小而变化，false 表示普通饼图 */
  roseType?: ChartPieRoseType
  /** 完全自定义的 ECharts 配置项，传入后将以 options 为准，忽略其他属性。参考：https://echarts.apache.org/zh/option.html#series-pie.type */
  options?: any
}

