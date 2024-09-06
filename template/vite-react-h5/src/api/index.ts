import { Toast } from '@nutui/nutui-react';
import axios from 'axios';
import { SUCCESS_CODE } from '../utils/constants';

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 10000
});

instance.interceptors.request.use(
  config => {
    const token = sessionStorage.getItem('token');
    token && (config.headers.authorization = token);
    return config;
  },
  error => Promise.reject(error)
);

instance.interceptors.response.use(
  res => {
    if (res.data.code !== SUCCESS_CODE) {
      Toast.show({
        icon: 'error',
        content: res.data.message
      });
      throw new Error(res.data.message);
    }
    return res.data.data;
  },
  error => {
    Toast.show({
      icon: 'error',
      content: error.code === 'ERR_NETWORK' ? '网络连接错误' : '服务器错误'
    });
    return Promise.reject(error);
  }
);

export default instance;
