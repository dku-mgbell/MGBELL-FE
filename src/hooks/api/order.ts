import {
  OrderInfo,
  UserOrderDetail,
  UserOrderDetailPreview,
} from '@/types/order';
import { PageParams } from '@/types/api';
import { API } from '.';

export const Order = {
  async register(data: OrderInfo) {
    const response = await API.post('/order/user', data);
    return response.data;
  },
  async cancelByUser(id: number) {
    const response = await API.post(`/order/user/cancle/${id}`);
    return response.data;
  },
  async getInfiniteList({
    page,
    size,
  }: PageParams): Promise<UserOrderDetailPreview[]> {
    const response = await API.get(
      `/order/user/list?page=${page}&size=${size}&sort=createdAt,desc`,
    );
    const list = (await response.data.content) as UserOrderDetailPreview[];
    return list;
  },
  async getDetailByUser(id: number): Promise<UserOrderDetail> {
    const response = await API.get(`/order/user/${id}`);
    return response.data;
  },
};
