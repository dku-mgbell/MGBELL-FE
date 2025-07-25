import { PageParams } from '@/types/api';
import {
  OwnerOrderAction,
  OwnerOrderListItem,
  OwnerStoreInfo,
} from '@/types/owner';
import { WIP_API_BASE_URL } from '@/constant';
import { API } from '..';

export const Owner = {
  async getOrderList({
    page,
    size,
  }: PageParams): Promise<OwnerOrderListItem[]> {
    const response = await API.get(
      `${WIP_API_BASE_URL}/order/store?page=${page + 1}&size=${size}`,
    );

    const list = (await response.data.data
      .orderStoreList) as OwnerOrderListItem[];
    return list;
  },
  async patchOrderStatus(orderId: string, action: OwnerOrderAction) {
    const response = await API.patch(
      `${WIP_API_BASE_URL}/order/${action}/${orderId}`,
    );
    return response.data;
  },
  async patchStoreOpen(goodsId: string, isOpen: boolean) {
    const response = await API.patch(`${WIP_API_BASE_URL}/goods/status`, {
      goodsId,
      saleStatus: isOpen ? 'ON' : 'OFF',
    });
    return response.data;
  },
  async getStoreInfo(): Promise<OwnerStoreInfo> {
    const response = await API.get(`${WIP_API_BASE_URL}/store/owner`);
    return response.data;
  },
};
