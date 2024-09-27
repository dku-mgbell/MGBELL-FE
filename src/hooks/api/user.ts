import { LoginInfo } from '@/types/login';
import { API } from '.';

export const User = {
  async login(data: LoginInfo) {
    const response = await API.post('/user/login', data);
    return response.data;
  },
};
