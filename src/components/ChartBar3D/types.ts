export interface ChartBar3DDataItem {
  /** 数据值 */
  value: number
  /** 数据名称（可选） */
  name?: string
}

export interface ChartBar3DGradientColor {
  /** 起始颜色 */
  start: string
  /** 结束颜色 */
  end: string
}

export interface ChartBar3DProps {
  /** 数据数组 */
  data?: ChartBar3DDataItem[] | number[]
  /** 分类标签数组 */
  categories?: string[]
  /** 单位，显示在数值后面，如"家"、"个"等 */
  unit?: string
  /** 颜色配置，可以是单个颜色字符串、颜色数组或渐变对象 */
  colors?: string | string[] | ChartBar3DGradientColor
  /** 图表高度 */
  height?: number | string
  /** 图表宽度 */
  width?: number | string
  /** 是否显示数值标签 */
  showLabel?: boolean
  /** 是否启用深色模式 */
  darkMode?: boolean
  /** Y轴最大值，不设置则自动计算 */
  yAxisMax?: number
  /** Y轴最小值，默认0 */
  yAxisMin?: number
  /** Y轴分割段数 */
  yAxisSplitNumber?: number
  /** 是否显示Y轴网格线 */
  showGrid?: boolean
  /** 网格线样式 */
  gridLineStyle?: {
    color?: string
    width?: number
    type?: 'solid' | 'dashed' | 'dotted'
  }
  /** 柱子宽度（相对于类目宽度的百分比） */
  barWidth?: number | string
  /** 柱子圆角半径 */
  barBorderRadius?: number | [number, number, number, number]
  /** 是否显示图例 */
  showLegend?: boolean
  /** 是否显示提示框 */
  showTooltip?: boolean
  /** 背景颜色 */
  backgroundColor?: string
  /** 图表内边距配置 */
  grid?: {
    left?: number | string
    right?: number | string
    top?: number | string
    bottom?: number | string
  }
  /** 3D深度（影响3D视觉效果） */
  depth?: number
  /** 标签格式化函数 */
  labelFormatter?: (value: number, index: number) => string
}

