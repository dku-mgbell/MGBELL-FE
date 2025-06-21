import {
  MyStoreInfo,
  StorePatch,
  StoreRegistration,
  StoreRegistrationRequest,
} from '@/types/store';
import { WIP_API_BASE_URL } from '@/constant';
import { API } from '.';

export const Store = {
  async postRegistration(data: StoreRegistrationRequest) {
    const response = await API.post(`${WIP_API_BASE_URL}/store`, data);
    return response.data;
  },

  async register({
    storeName,
    ownerName,
    contact,
    businessRegiNum,
    address,
    longitude,
    latitude,
    storeType,
    images,
  }: StoreRegistration) {
    const formData = new FormData();
    formData.append(
      'request',
      JSON.stringify({
        storeName,
        ownerName,
        contact,
        businessRegiNum,
        address,
        longitude,
        latitude,
        storeType,
      }),
    );
    if (images) {
      images.forEach((f) => {
        formData.append('images', f);
      });
    }
    const response = await API.post('/store/register', formData, {
      headers: {
        Authorization:
          typeof window !== 'undefined'
            ? `Bearer ${localStorage.getItem('accessToken')}`
            : null,
        'Content-Type': 'multipart/form-data',
      },
    });
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
  async approve(id: number) {
    const response = await API.post(`${WIP_API_BASE_URL}/store/approve`, {
      id,
    });
    return response.data;
  },
};
