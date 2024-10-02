import { StoreRegistration } from '@/types/store';
import { API } from '.';

export const Store = {
  async register(data: StoreRegistration) {
    const response = await API.post('/store/register', data);
    return response.data;
  },
};
