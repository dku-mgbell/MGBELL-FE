// eslint-disable-next-line import/no-cycle
import { WIP_API_BASE_URL } from '@/constant';
import { API } from '.';

export const Notification = {
  async register(fcmToken: string) {
    const response = await API.post(`${WIP_API_BASE_URL}/notification`, {
      fcmToken,
    });
    return response.data;
  },
  async subscribeStoreOpen({
    storeId,
    fcmToken,
  }: {
    storeId: string;
    fcmToken: string;
  }) {
    const response = await API.post(`${WIP_API_BASE_URL}/notification/store`, {
      storeId,
      fcmToken,
    });
    return response.data;
  },
};
