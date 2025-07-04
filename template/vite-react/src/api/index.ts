import { message } from '@/utils/message'
import axios from 'axios'
import { SUCCESS_CODE } from '../constants'

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 10000,
})

instance.interceptors.request.use(
  (config) => {
    const { pageSize, ...obj } = config.params || {}
    if (pageSize) {
      config.params = {
        ...obj,
        size: pageSize,
      }
    }
    // 统一添加token
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.token = `Bearer ${token}`
    }
    return config
  },
  error => Promise.reject(error),
)

instance.interceptors.response.use(
  (res) => {
    if (res.data.code !== SUCCESS_CODE) {
      message.error(res.data.message)
      throw new Error(res.data.message)
    }
    return res.data
  },
  error => Promise.reject(error),
)

export default instance
