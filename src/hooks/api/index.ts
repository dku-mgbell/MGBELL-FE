/* eslint-disable consistent-return */
import axios from 'axios';
import { API_BASE_URL } from '@/constant';
// eslint-disable-next-line import/no-cycle
import { Account } from './auth';

export const API = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

API.interceptors.request.use((config) => {
  const accessToken =
    typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : null;
  return config;
});

API.interceptors.response.use(
  function (response) {
    return response;
  },
  function async(error) {
    const refreshToken =
      typeof window !== 'undefined'
        ? localStorage.getItem('refreshToken')
        : null;
    const currentPath = window.location.pathname;

    const logout = () => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      if (currentPath !== '/login') {
        window.location.href = '/login';
      }
    };

    // RefreshToken 만료
    if (error.config.url.includes('/auth/token/reissue')) {
      alert('인증 정보가 만료되었습니다. 다시 로그인해주세요.');
      logout();
      return;
    }

    // AccessToken 만료
    if (error.status === 401) {
      // 유효하지 않은 AccessToken
      if (error.response.data.code === 'JWT_VALIDATE_ERROR') {
        alert('유효하지 않은 인증 정보입니다. 다시 로그인해주세요.');
        logout();
        return;
      }
      if (!refreshToken) {
        logout();
        return;
      }
      Account.reissueToken(refreshToken).then((res) => {
        const {
          authorization: accessTokenResponse,
          refreshtoken: refreshTokenResponse,
        } = res.headers;

        const [accessToken, refreshtoken] = [
          accessTokenResponse.split(' ')[1],
          refreshTokenResponse.split(' ')[1],
        ];
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshtoken);
      });
      return;
    }

    return Promise.reject(error);
  },
);
