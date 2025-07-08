import { PageParams } from '@/types/api';
import {
  UserOrderRequest,
  UserOrderResponse,
  UserOrderDetailPreview,
  UserOrderDetail,
} from '@/types/order';
import { PaymentCompleteResponse } from '@/types/payment';
import { WIP_API_BASE_URL } from '@/constant';
import { API } from '.';

export const Order = {
  async register(data: UserOrderRequest): Promise<UserOrderResponse> {
    const response = await API.post(`${WIP_API_BASE_URL}/order`, data);
    return response.data.data;
  },
  async cancelByUser(id: string) {
    const response = await API.patch(`${WIP_API_BASE_URL}/order/cancel/${id}`);
    return response.data;
  },
  async getInfiniteList({
    page,
    size,
  }: PageParams): Promise<UserOrderDetailPreview[]> {
    const response = await API.get(
      `${WIP_API_BASE_URL}/order?page=${page + 1}&size=${size}`,
    );
    const list = (await response.data.data
      .orderListDTOList) as UserOrderDetailPreview[];
    return list;
  },
  async getDetailByUser(id: string): Promise<UserOrderDetail> {
    const response = await API.get(`${WIP_API_BASE_URL}/order/${id}`);
    return response.data.data;
  },
  Payment: {
    async complete(paymentId: string): Promise<PaymentCompleteResponse> {
      const response = await API.post(`${WIP_API_BASE_URL}/payment/complete`, {
        paymentId,
      });
      return response.data;
    },
  },
};
