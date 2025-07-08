import { DeleteOAuthAccountRequest } from '@/types/oauth';
import { AccountInfo, UserActivity } from '@/types/user';
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
  async getUserInfo(): Promise<AccountInfo> {
    const response = await API.get(`${WIP_API_BASE_URL}/user/me`);
    return response.data.data;
  },
  async delete(data: DeleteOAuthAccountRequest) {
    const response = await API.delete(`${WIP_API_BASE_URL}/auth/withdraw`, {
      data,
    });
    return response.data;
  },
  async getActivity(): Promise<UserActivity> {
    const response = await API.get('/user/myPage');
    return response.data;
  },
};
