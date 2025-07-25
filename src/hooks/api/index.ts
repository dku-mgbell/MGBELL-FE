/* eslint-disable consistent-return */
import axios from 'axios';
import { API_BASE_URL } from '@/constant';
// eslint-disable-next-line import/no-cycle
import { Account } from './auth/account';

export const API = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// 토큰 재발급 중인지 확인하는 플래그
let isRefreshing = false;
let failedQueue: Array<{
  resolve: (value?: any) => void;
  reject: (reason?: any) => void;
}> = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach(({ resolve, reject }) => {
    if (error) {
      reject(error);
    } else {
      resolve(token);
    }
  });

  failedQueue = [];
};

API.interceptors.request.use((config) => {
  const accessToken =
    typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
  if (config.url?.includes('/auth/token/reissue')) {
    return config;
  }
  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : null;
  return config;
});

API.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    const refreshToken =
      typeof window !== 'undefined'
        ? localStorage.getItem('refreshToken')
        : null;
    const currentPath =
      typeof window !== 'undefined' ? window.location.pathname : '';

    const logout = () => {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        if (currentPath !== '/login') {
          window.location.href = '/login';
        }
      }
    };

    // RefreshToken 만료
    if (error.config.url.includes('/auth/token/reissue')) {
      alert('인증 정보가 만료되었습니다. 다시 로그인해주세요.');
      logout();
      return Promise.reject(error);
    }

    // AccessToken 만료
    // eslint-disable-next-line no-underscore-dangle
    if (error.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        // 이미 재발급 중이면 큐에 추가하고 대기
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then(() => {
            originalRequest.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
            return API(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      // eslint-disable-next-line no-underscore-dangle
      originalRequest._retry = true;

      // 유효하지 않은 AccessToken
      if (error.response.data.code === 'JWT_VALIDATE_ERROR') {
        alert('유효하지 않은 인증 정보입니다. 다시 로그인해주세요.');
        logout();
        return Promise.reject(error);
      }

      if (!refreshToken) {
        logout();
        return Promise.reject(error);
      }

      isRefreshing = true;

      try {
        const res = await Account.reissueToken(refreshToken);
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

        isRefreshing = false;
        processQueue(null, accessToken);

        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return await API(originalRequest);
      } catch (refreshError) {
        isRefreshing = false;
        processQueue(refreshError, null);
        logout();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);
