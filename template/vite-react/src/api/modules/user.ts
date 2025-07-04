import instance from '@/api'

/**
 * 用户列表
 */
export const userList = (params: API.PageParams) => {
  return instance.get<API.PageResponse<User.ListItem>>('/user/list', { params })
}