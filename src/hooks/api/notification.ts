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
};
