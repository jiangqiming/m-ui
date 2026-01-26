export type GradationTextDirection = 'to right' | 'to left' | 'to bottom' | 'to top' | 'to bottom right' | 'to bottom left' | 'to top right' | 'to top left'

export interface GradationTextProps {
  /** 文本内容，不传则使用默认 slot */
  content?: string
  /** 渐变起始颜色 */
  fromColor?: string
  /** 渐变结束颜色 */
  toColor?: string
  /** 渐变方向 */
  direction?: GradationTextDirection
  /** 自定义渐变颜色（支持多个颜色） */
  colors?: string[]
  /** 根元素标签 */
  tag?: 'span' | 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  /** 自定义 class */
  customClass?: string
}

