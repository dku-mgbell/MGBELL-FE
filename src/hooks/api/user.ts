import { LoginInfo } from '@/types/login';
import { SignUpInfo } from '@/types/sign-up';
import { PasswordChange, UserActivity, UserInfoResponse } from '@/types/user';
import { API } from '.';

export const User = {
  async login(data: LoginInfo) {
    const response = await API.post('/user/login', data);
    return response.data;
  },
  async signUp(data: SignUpInfo, token: string) {
    const response = await API.post(`/user/signup/${token}`, data);
    return response.data;
  },
  async oAuthSignUp(data: Omit<SignUpInfo, 'email'>) {
    const response = await API.patch('/oauth/signup', data);
    return response.data;
  },
  async deleteAccount() {
    const response = await API.delete('/user/delete');
    return response.data;
  },
  async getInfo(): Promise<UserInfoResponse> {
    const response = await API.get('/user/whoAmI');
    return response.data;
  },
  async changePassword(data: PasswordChange) {
    const response = await API.patch('/user/password', data);
    return response.data;
  },
  async getActivity(): Promise<UserActivity> {
    const response = await API.get('/user/myPage');
    return response.data;
  },
};
