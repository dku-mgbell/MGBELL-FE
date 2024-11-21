import { MyStoreInfo, StorePatch, StoreRegistration } from '@/types/store';
import { API } from '.';

export const Store = {
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
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
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
};
