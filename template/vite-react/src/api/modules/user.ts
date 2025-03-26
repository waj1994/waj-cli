import type { User } from '@/pages/List'
import type { PageParams, ResponseList } from '@/typing/axios'
import $axios from '..'

/**
 * 获取用户列表
 */
export function getUserList(params: PageParams) {
  return $axios.get<ResponseList<User>>('/user/list', { params })
}
