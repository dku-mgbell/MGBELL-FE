import { PageParams } from '@/types/api';
import {
  OrderInfo,
  OrderState,
  OwnerOrderDetail,
  UserOrderDetail,
  UserOrderDetailPreview,
} from '@/types/order';
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
  Owner: {
    async getInfiniteList(
      { state }: { state?: OrderState | '' },
      { page, size }: PageParams,
    ): Promise<OwnerOrderDetail[]> {
      const response = await API.get(
        `/order/owner/list?page=${page}&size=${size}&sort=createdAt,desc${state ? `&state=${state}` : ''}`,
      );
      const list = (await response.data.content) as OwnerOrderDetail[];
      return list;
    },
    async refuse(id: number, refusalReason: string) {
      const response = await API.post(`/order/owner/refuse/${id}`, {
        cancleReason: refusalReason,
      });
      return response.data;
    },
    async accept(id: number) {
      const response = await API.post(`/order/owner/accept/${id}`);
      return response.data;
    },
    async complete(id: number) {
      const response = await API.post(`/order/owner/complete/${id}`);
      return response.data;
    },
  },
};
