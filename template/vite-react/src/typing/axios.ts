/**
 * 列表响应数据
 */
export interface ResponseList<T> {
  list: T[]
  total: number
}

/**
 * 分页请求参数
 */
export interface PageParams {
  current?: number
  pageSize?: number
}
