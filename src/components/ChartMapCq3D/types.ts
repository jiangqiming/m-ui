export interface ChartMapCq3DDataItem {
  /** 区域名称 */
  name: string
  /** 数据值（用于颜色映射和高度） */
  value: number
  /** 自定义颜色（可选，会覆盖根据value计算的颜色） */
  color?: string
  /** 自定义高度（可选，会覆盖根据value计算的高度） */
  height?: number
}

export interface ChartMapCq3DRange {
  /** 最小值（包含） */
  min: number
  /** 最大值（不包含，如果是最后一个范围则包含） */
  max: number
  /** 该范围对应的颜色 */
  color: string
  /** 范围标签 */
  label: string
}

export interface ChartMapCq3DProps {
  /** 地图数据数组 */
  data?: ChartMapCq3DDataItem[]
  /** 地图GeoJSON数据，如果未提供则需要在外部注册 */
  geoJson?: any
  /** 地图名称（用于注册echarts地图） */
  mapName?: string
  /** 颜色范围配置 */
  ranges?: ChartMapCq3DRange[]
  /** 默认颜色范围配置（序时进度） */
  defaultRanges?: boolean
  /** 是否显示标签 */
  showLabel?: boolean
  /** 标签样式 */
  labelStyle?: {
    color?: string
    fontSize?: number
    fontWeight?: string | number
  }
  /** 是否显示图例 */
  showLegend?: boolean
  /** 图例位置 */
  legendPosition?: 'left' | 'right' | 'top' | 'bottom'
  /** 图例标题 */
  legendTitle?: string
  /** 图表高度 */
  height?: number | string
  /** 图表宽度 */
  width?: number | string
  /** 背景颜色 */
  backgroundColor?: string
  /** 地图区域样式 */
  areaStyle?: {
    areaColor?: string
    borderColor?: string
    borderWidth?: number
  }
  /** 高亮样式 */
  emphasis?: {
    areaColor?: string
    borderColor?: string
    borderWidth?: number
  }
  /** 是否显示提示框 */
  showTooltip?: boolean
  /** 提示框格式化函数 */
  tooltipFormatter?: (params: any) => string
  /** 是否开启鼠标缩放和平移漫游 */
  roam?: boolean | 'scale' | 'move'
  /** 3D地图高度缩放比例（0-1） */
  heightScale?: number
  /** 3D地图最小高度 */
  minHeight?: number
  /** 3D地图最大高度 */
  maxHeight?: number
  /** 光照配置 */
  light?: {
    main?: {
      intensity?: number
      shadow?: boolean
    }
    ambient?: {
      intensity?: number
    }
  }
  /** 视角配置 */
  viewControl?: {
    alpha?: number
    beta?: number
    distance?: number
    minDistance?: number
    maxDistance?: number
    rotateSensitivity?: number
    zoomSensitivity?: number
    panSensitivity?: number
    autoRotate?: boolean
    autoRotateDirection?: 'cw' | 'ccw'
    autoRotateSpeed?: number
  }
}

