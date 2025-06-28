import { PageParams } from '@/types/api';
import {
  UserOrderRequest,
  UserOrderResponse,
  OrderState,
  OwnerOrderDetail,
  UserOrderDetail,
  UserOrderDetailPreview,
} from '@/types/order';
import { PaymentCompleteResponse } from '@/types/payment';
import { WIP_API_BASE_URL } from '@/constant';
import { API } from '.';

export const Order = {
  async register(data: UserOrderRequest): Promise<UserOrderResponse> {
    const response = await API.post(`${WIP_API_BASE_URL}/order`, data);
    return response.data.data;
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
  Payment: {
    async complete(paymentId: string): Promise<PaymentCompleteResponse> {
      const response = await API.post(`${WIP_API_BASE_URL}/payment/complete`, {
        paymentId,
      });
      return response.data;
    },
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
