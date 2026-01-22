export type EllipsisTextTag = 'span' | 'div' | 'p'

export type EllipsisTextPlacement = 'top' | 'bottom' | 'left' | 'right'

export type EllipsisTextTruncateFrom = 'end' | 'start'

export interface EllipsisTextProps {
  /** 文本内容，不传则使用默认 slot */
  content?: string
  /** 是否禁用鼠标悬浮显示完整内容 */
  disableTooltip?: boolean
  /** 文本可展示行数，1 为单行省略 */
  lineClamp?: number
  /** 最大宽度 */
  maxWidth?: number | string
  /** 根元素标签 */
  tag?: EllipsisTextTag
  /** 悬浮提示位置 */
  placement?: EllipsisTextPlacement
  /** 省略号符号 */
  ellipsisSymbol?: string
  /** 从开头或结尾省略 */
  truncateFrom?: EllipsisTextTruncateFrom
  /** 是否可复制，点击复制完整内容 */
  copyable?: boolean
  /** 复制成功提示文案 */
  copySuccessText?: string
  /** 复制失败提示文案 */
  copyErrorText?: string
  /** 悬浮延迟（毫秒） */
  tooltipDelay?: number
  /** 自定义 class */
  customClass?: string
}

