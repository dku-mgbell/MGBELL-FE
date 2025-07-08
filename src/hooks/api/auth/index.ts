import { WIP_API_BASE_URL } from '@/constant';
// eslint-disable-next-line import/no-cycle
import { API } from '..';

export const Account = {
  async reissueToken(token: string) {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    const response = await API.post(`${WIP_API_BASE_URL}/auth/token/reissue`, {
      refreshToken: token,
    });
    return response;
  },
};
