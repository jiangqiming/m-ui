export interface ChartRadarSeries {
  /** 系列名称 */
  name: string
  /** 数据数组，对应指标数组 */
  data: number[]
  /** 自定义颜色（可选） */
  color?: string
  /** 是否显示面积 */
  areaStyle?: boolean
  /** 面积填充透明度（0-1） */
  areaOpacity?: number
  /** 线条宽度 */
  lineWidth?: number
  /** 线条类型：'solid' | 'dashed' | 'dotted' */
  lineType?: 'solid' | 'dashed' | 'dotted'
  /** 是否显示标记点 */
  showSymbol?: boolean
  /** 标记点大小 */
  symbolSize?: number
  /** 标记点类型 */
  symbol?: 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow' | 'none'
}

export interface ChartRadarProps {
  /** 系列数据，默认一个系列 */
  series?: ChartRadarSeries[]
  /** 指标数组（雷达图的维度） */
  indicators?: Array<{
    /** 指标名称 */
    name: string
    /** 指标最大值 */
    max: number
    /** 指标最小值（可选，默认为0） */
    min?: number
  }>
  /** 颜色数组，默认三个颜色 */
  colors?: string[]
  /** 是否显示图例 */
  showLegend?: boolean
  /** 图例位置 */
  legendPosition?: 'top' | 'bottom' | 'left' | 'right'
  /** 图表高度 */
  height?: number | string
  /** 图表宽度 */
  width?: number | string
  /** 背景颜色 */
  backgroundColor?: string
  /** 雷达图中心位置 [x, y] */
  center?: [string | number, string | number]
  /** 雷达图半径 */
  radius?: string | number
  /** 雷达图起始角度（度） */
  startAngle?: number
  /** 是否显示分割线 */
  showSplitLine?: boolean
  /** 分割线样式 */
  splitLineStyle?: {
    color?: string
    width?: number
    type?: 'solid' | 'dashed' | 'dotted'
  }
  /** 是否显示轴线 */
  showAxisLine?: boolean
  /** 轴线样式 */
  axisLineStyle?: {
    color?: string
    width?: number
    type?: 'solid' | 'dashed' | 'dotted'
  }
  /** 是否显示指示器名称 */
  showIndicatorName?: boolean
  /** 指示器名称样式 */
  indicatorNameStyle?: {
    color?: string
    fontSize?: number
    fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number
  }
  /** 是否显示分割区域 */
  showSplitArea?: boolean
  /** 分割区域样式 */
  splitAreaStyle?: {
    color?: string[]
  }
  /** 是否显示工具提示 */
  showTooltip?: boolean
  /** 工具提示格式化函数 */
  tooltipFormatter?: (params: any) => string
  /** 是否显示数据标签 */
  showLabel?: boolean
  /** 是否启用动画 */
  animation?: boolean
  /** 动画持续时间（毫秒） */
  animationDuration?: number
  /** 完全自定义的 ECharts 配置项，传入后将以 options 为准，忽略其他属性。参考：https://echarts.apache.org/zh/option.html#series-radar.type */
  options?: any
}

