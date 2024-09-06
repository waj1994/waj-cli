import { message } from 'antd';
import axios from 'axios';

export interface Paging {
  current: number;
  size: number;
}

export interface ResponsePaging<T> {
  total: number;
  list: T[];
}

export enum Code {
  SUCCESS_CODE = 0,
  TOKEN_INVALID = 401,
}

const instance = axios.create({
  baseURL: process.env.UMI_APP_BASE_URL,
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    // TOKEN
    return config;
  },
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (res) => {
    const {
      data: { code, message: resMessage, data },
    } = res;
    if (code === Code.TOKEN_INVALID) {
      message.error('登录已过期，请重新登录');
      return setTimeout(() => {
        sessionStorage.removeItem('token');
        window.location.pathname = '/login';
      }, 300);
    }
    if (code !== Code.SUCCESS_CODE) {
      message.destroy();
      message.error(resMessage);
      throw new Error(resMessage);
    }
    return data;
  },
  (error) => {
    message.error(error.code === 'ERR_NETWORK' ? '网络连接错误' : '服务器错误');
    return Promise.reject(error);
  },
);

export default instance;
