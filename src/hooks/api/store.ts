import {
  StoreDetailWithBag,
  StoreListItemResponse,
  StoreListRequestParams,
  StoreRegistrationRequest,
} from '@/types/store';
import { WIP_API_BASE_URL } from '@/constant';
import { API } from '.';

export const Store = {
  async postRegistration(data: StoreRegistrationRequest) {
    const response = await API.post(`${WIP_API_BASE_URL}/store`, data);
    return response.data;
  },
  async getInfiniteList(
    queryParams: StoreListRequestParams,
  ): Promise<StoreListItemResponse[]> {
    const params = {
      page: `page=${Number(queryParams.page) + 1}`,
      size: `size=${queryParams.size}`,
      sortType:
        queryParams.sortType === 'AVAILABLE'
          ? undefined
          : `sortType=${queryParams.sortType}`,
      keyword: queryParams.keyword
        ? `keyword=${queryParams.keyword}`
        : undefined,
      onlyAvailable:
        queryParams.sortType === 'AVAILABLE'
          ? `onlyAvailable=${queryParams.sortType === 'AVAILABLE'}`
          : undefined,
      latitude: queryParams.latitude
        ? `latitude=${queryParams.latitude}`
        : undefined,
      longitude: queryParams.longitude
        ? `longitude=${queryParams.longitude}`
        : undefined,
    };

    const response = await API.get(
      `${WIP_API_BASE_URL}/store?${Object.values(params).filter(Boolean).join('&')}`,
    );
    const list = (await response.data.data
      .storeListDTOResponses) as StoreListItemResponse[];
    return list;
  },
  async approve(id: number) {
    const response = await API.patch(`${WIP_API_BASE_URL}/store/approve`, {
      id,
    });
    return response.data;
  },
  async getDetailWithBag(id: string): Promise<StoreDetailWithBag> {
    const response = await API.get(`${WIP_API_BASE_URL}/store/${id}`);
    return response.data.data;
  },
  async getSubscriptionStatus(storeId: string): Promise<boolean> {
    const response = await API.get(
      `${WIP_API_BASE_URL}/notification/store/${storeId}`,
    );
    return response.data.data.subscribed;
  },
};
