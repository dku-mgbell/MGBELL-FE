import { PageParams } from '@/types/api';
import { OwnerOrderListItem } from '@/types/owner';
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
};
