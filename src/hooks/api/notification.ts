// eslint-disable-next-line import/no-cycle
import { API } from '.';

export const Notification = {
  async register(token: string) {
    const response = await API.post('/notification/register', { token });
    return response.data;
  },
};
