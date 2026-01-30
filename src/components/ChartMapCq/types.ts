export interface ChartMapCqDataItem {
  /** 区域名称 */
  name: string
  /** 数据值（用于颜色映射） */
  value: number
  /** 自定义颜色（可选，会覆盖根据value计算的颜色） */
  color?: string
}

export interface ChartMapCqRange {
  /** 最小值（包含） */
  min: number
  /** 最大值（不包含，如果是最后一个范围则包含） */
  max: number
  /** 该范围对应的颜色 */
  color: string
  /** 范围标签 */
  label: string
}

export interface ChartMapCqProps {
  /** 地图数据数组 */
  data?: ChartMapCqDataItem[]
  /** 地图GeoJSON数据，如果未提供则需要在外部注册 */
  geoJson?: any
  /** 地图名称（用于注册echarts地图） */
  mapName?: string
  /** 是否显示主城区在左上角 */
  showMainCityInCorner?: boolean
  /** 主城区区域名称数组 */
  mainCityNames?: string[]
  /** 颜色范围配置 */
  ranges?: ChartMapCqRange[]
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
  /** 特殊标注区域配置 */
  specialLabels?: Array<{
    name: string
    position: [number, number]
    icon?: string
    label?: string
  }>
  /** 是否开启鼠标缩放和平移漫游。支持设置为 true / false / 'scale' / 'move'。默认为 false（关闭状态） */
  roam?: boolean | 'scale' | 'move'
  /** 是否允许点击区县下钻到详细地图。默认为 false（关闭状态） */
  enableDrillDown?: boolean
  /** 区县GeoJSON数据映射，key为区县名称，value为包含镇街边界的GeoJSON数据。如果提供，将优先使用此数据而不是从API加载 */
  districtGeoJsonMap?: Record<string, any>
  /** 自定义加载区县GeoJSON数据的函数，参数为区县名称和adcode，返回Promise<GeoJSON>。如果提供，将使用此函数加载数据 */
  loadDistrictGeoJsonFn?: (districtName: string, adcode: string) => Promise<any>
}

