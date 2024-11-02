import { OrderInfo } from '@/types/order';
import { API } from '.';

export const Order = {
  async register(data: OrderInfo) {
    const response = await API.post('/order/user', data);
    return response.data;
  },
};
