import { MyStoreInfo, StorePatch, StoreRegistration } from '@/types/store';
import { API } from '.';

export const Store = {
  async register(data: StoreRegistration) {
    const response = await API.post('/store/register', data);
    return response.data;
  },
  async getInfo(id: number): Promise<StoreRegistration> {
    const response = await API.get(`/store/${id}`);
    return response.data;
  },
  async getMyStoreInfo(): Promise<MyStoreInfo> {
    const response = await API.get('/store/myStore');
    return response.data;
  },
  async patchInfo(data: StorePatch) {
    const response = await API.patch('/store/edit', data);
    return response.data;
  },
};
