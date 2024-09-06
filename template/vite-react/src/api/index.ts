import { message } from 'antd';
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
      message.error(res.data.message);
      throw new Error(res.data.message);
    }
    return res.data.data;
  },
  error => Promise.reject(error)
);

export default instance;
