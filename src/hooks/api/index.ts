/* eslint-disable consistent-return */
import axios from 'axios';
// eslint-disable-next-line import/no-cycle
import { User } from '@/hooks/api/user';
import { API_BASE_URL } from '@/constant';

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

    // AccessToken 만료
    if (error.status === 401) {
      if (refreshToken) {
        User.reissueToken(refreshToken).then(
          ({
            accessToken: accessTokenResponse,
            refreshToken: refreshTokenResponse,
          }) => {
            localStorage.setItem('accessToken', accessTokenResponse);
            localStorage.setItem('refreshToken', refreshTokenResponse);
          },
        );
      } else {
        logout();
      }
      return;
    }

    // RefreshToken 만료
    if (error.status === 403) {
      logout();
    }

    // Token 에러
    if (
      error.status === 500 &&
      error.response.data.code === 'UserNotFoundException'
    ) {
      logout();
    }

    // TODO: 토큰 재발급 API 완성시 삭제
    if (error.status === 500 && currentPath === '/') {
      alert('토큰 유효 시간이 만료되었습니다. 다시 로그인해주세요.');
      logout();
      return;
    }
    return Promise.reject(error);
  },
);
