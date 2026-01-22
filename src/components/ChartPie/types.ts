export interface ChartPieDataItem {
  /** 数据项名称 */
  name: string
  /** 数据项值 */
  value: number
  /** 自定义颜色（可选） */
  color?: string
}

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
}

