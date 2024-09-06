import { SUCCESS_CODE } from '@/utils/constants'
import { message } from 'ant-design-vue'
import axios from 'axios'

export type PagingParams<T = any> = {
  current: number
  size: number
} & T

export interface PagingResponse<T> {
  current: number
  total: number
  list: T
}

const instance = axios.create({
  timeout: 10000,
  baseURL: import.meta.env.VITE_APP_BASE_URL
})

instance.interceptors.request.use(
  config => {
    // 携带token
    const token = sessionStorage.getItem('token')
    !!token && (config.headers.token = token)
    return config
  },
  error => Promise.reject(error)
)

instance.interceptors.response.use(
  res => {
    const {
      data: { code, message: resMessage, data }
    } = res
    if (code === -2) {
      message.error('登录已过期，请重新登录')
      sessionStorage.removeItem('token')
      window.location.pathname = '/login'
    }
    if (code !== SUCCESS_CODE) {
      message.destroy()
      message.error(resMessage)
      throw new Error(resMessage)
    }
    return data
  },
  error => {
    message.error(error.code === 'ERR_NETWORK' ? '网络连接错误' : '服务器错误')
    return Promise.reject(error)
  }
)

export default instance
