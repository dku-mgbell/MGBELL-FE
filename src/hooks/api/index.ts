import axios from 'axios';
// eslint-disable-next-line import/no-cycle
import { User } from '@/hooks/api/user';
import { API_BASE_URL } from '@/constant';

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

API.interceptors.response.use(
  function (response) {
    return response;
  },
  function async(error) {
    if (error.status === 401) {
      if (error.config.url === '/user/reissue') {
        window.location.href = '/login';
        localStorage.removeItem('accessToken');
        return;
      }
      User.reissueToken().then(
        ({
          accessToken: accessTokenResponse,
          refreshToken: refreshTokenResponse,
        }) => {
          localStorage.setItem('accessToken', accessTokenResponse);
          localStorage.setItem('refreshToken', refreshTokenResponse);
        },
      );
      return;
    }
    if (error.status === 500) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      window.location.href = '/login';
    }
  },
);
