import { LoginInfo } from '@/types/login';
import { SignUpInfo } from '@/types/sign-up';
import { API } from '.';

export const User = {
  async login(data: LoginInfo) {
    const response = await API.post('/user/login', data);
    return response.data;
  },
  async signUp(data: SignUpInfo) {
    const response = await API.post('/user/signup', data);
    return response.data;
  },
  async oAuthSignUp(data: Omit<SignUpInfo, 'email'>) {
    const response = await API.patch('/oauth/signup', data);
    return response.data;
  },
};
