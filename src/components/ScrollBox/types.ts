export interface ScrollBoxProps {
  /** 是否禁用滚动 */
  disabled?: boolean
  /** 滚动速度（像素/秒） */
  scrollSpeed?: number
  /** 容器高度 */
  height?: number | string
  /** 容器宽度 */
  width?: number | string
  /** 滚动方向 */
  direction?: 'up' | 'down'
  /** 是否循环滚动 */
  loop?: boolean
  /** 滚动间隔（毫秒），用于控制滚动步进的频率 */
  scrollInterval?: number
  /** 每次滚动的像素数 */
  scrollStep?: number
}

