import axios from 'axios'
import { CODE } from '../constants'

export interface PagingResponse<T> {
  list: T[]
  total: number
}

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 40000
})

instance.interceptors.request.use(
  config => {
    return config
  },
  error => Promise.reject(error)
)

instance.interceptors.response.use(
  res => {
    if (res.data.code !== CODE.SUCCESS) {
      // TODO
      throw new Error(res.data.message)
    }
    return res.data
  },
  error => Promise.reject(error)
)

export default instance
