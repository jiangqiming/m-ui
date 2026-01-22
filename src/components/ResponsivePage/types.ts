export type ResponsiveBreakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export interface ResponsiveBreakpoints {
  /** 超小屏幕（手机） */
  xs?: number
  /** 小屏幕（平板竖屏） */
  sm?: number
  /** 中等屏幕（平板横屏） */
  md?: number
  /** 大屏幕（桌面） */
  lg?: number
  /** 超大屏幕（大桌面） */
  xl?: number
  /** 2倍超大屏幕（超大桌面） */
  '2xl'?: number
}

export interface ResponsivePageProps {
  /** 容器宽度 */
  width?: number | string
  /** 容器高度 */
  height?: number | string
  /** 最小宽度 */
  minWidth?: number | string
  /** 最小高度 */
  minHeight?: number | string
  /** 最大宽度 */
  maxWidth?: number | string
  /** 最大高度 */
  maxHeight?: number | string
  /** 是否全屏 */
  fullscreen?: boolean
  /** 背景颜色 */
  backgroundColor?: string
  /** 内边距 */
  padding?: number | string
  /** 自定义断点配置 */
  breakpoints?: ResponsiveBreakpoints
  /** 是否启用响应式缩放 */
  enableScale?: boolean
  /** 基准宽度（用于缩放计算） */
  baseWidth?: number
  /** 基准高度（用于缩放计算） */
  baseHeight?: number
  /** 缩放模式 */
  scaleMode?: 'width' | 'height' | 'both' | 'fit'
}

