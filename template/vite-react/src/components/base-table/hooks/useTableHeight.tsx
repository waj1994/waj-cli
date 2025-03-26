import type { RefObject } from 'react'
import { useSize } from 'ahooks'

const defaultSize = {
  width: 0,
  height: 0,
}

/**
 * 表格高度
 * @param containerRef 容器ref
 * @param searchRef 搜索区ref
 * @param arts 剩余的其他高度
 */
export function useTableHeight(
  containerRef: RefObject<HTMLDivElement>,
  searchRef?: RefObject<HTMLDivElement> | Element | null,
  arts: number = 0,
) {
  const { height: total } = useSize(containerRef) || defaultSize
  const { height } = useSize(searchRef) || defaultSize
  return total - height - arts
}
