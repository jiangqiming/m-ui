export interface ChartGraphNode {
  /** 节点名称 */
  name: string
  /** 节点值（可选，用于控制节点大小） */
  value?: number
  /** 节点分类（可选，用于分组和颜色） */
  category?: number | string
  /** 节点X坐标（可选，用于固定位置） */
  x?: number
  /** 节点Y坐标（可选，用于固定位置） */
  y?: number
  /** 节点大小（可选） */
  symbolSize?: number
  /** 节点颜色（可选） */
  itemStyle?: {
    color?: string
    borderColor?: string
    borderWidth?: number
  }
  /** 节点标签配置（可选） */
  label?: {
    show?: boolean
    fontSize?: number
    color?: string
    position?: 'left' | 'right' | 'top' | 'bottom' | 'inside'
  }
}

export interface ChartGraphLink {
  /** 源节点名称 */
  source: string
  /** 目标节点名称 */
  target: string
  /** 边的值（可选，用于控制边的粗细） */
  value?: number
  /** 边的颜色（可选） */
  lineStyle?: {
    color?: string
    width?: number
    type?: 'solid' | 'dashed' | 'dotted'
    curveness?: number
  }
  /** 边的标签（可选） */
  label?: {
    show?: boolean
    formatter?: string
  }
}

export interface ChartGraphCategory {
  /** 分类名称 */
  name: string
  /** 分类颜色 */
  itemStyle?: {
    color?: string
  }
}

export type ChartGraphLayout = 'none' | 'circular' | 'force'

export interface ChartGraphProps {
  /** 节点数据数组 */
  nodes?: ChartGraphNode[]
  /** 边数据数组 */
  links?: ChartGraphLink[]
  /** 分类数据数组（可选，用于图例和颜色分组） */
  categories?: ChartGraphCategory[]
  /** 布局方式 */
  layout?: ChartGraphLayout
  /** 是否启用力引导布局 */
  forceLayout?: boolean
  /** 力引导布局配置 */
  forceConfig?: {
    /** 节点之间的斥力 */
    repulsion?: number
    /** 边的引力 */
    gravity?: number
    /** 边的长度 */
    edgeLength?: number
    /** 布局迭代次数 */
    layoutIterations?: number
  }
  /** 是否显示标签 */
  showLabel?: boolean
  /** 标签字体大小 */
  labelFontSize?: number
  /** 是否显示图例 */
  showLegend?: boolean
  /** 图例位置 */
  legendPosition?: 'top' | 'bottom' | 'left' | 'right'
  /** 图表高度 */
  height?: number | string
  /** 图表宽度 */
  width?: number | string
  /** 背景色 */
  backgroundColor?: string
  /** 是否启用拖拽 */
  draggable?: boolean
  /** 是否启用缩放和平移 */
  roam?: boolean | 'scale' | 'move'
  /** 节点默认大小 */
  nodeSize?: number | [number, number]
  /** 节点默认颜色 */
  nodeColor?: string
  /** 边默认颜色 */
  linkColor?: string
  /** 边默认宽度 */
  linkWidth?: number
  /** 是否启用动画 */
  animation?: boolean
  /** 动画持续时间（毫秒） */
  animationDuration?: number
  /** 完全自定义的 ECharts 配置项，传入后将以 options 为准，忽略其他属性 */
  options?: any
}

