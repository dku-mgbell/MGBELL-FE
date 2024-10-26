import { API_BASE_URL } from '@/constant';
import axios from 'axios';

export const API = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

API.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken');
  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : null;
  return config;
});
