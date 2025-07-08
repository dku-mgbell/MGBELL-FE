import { PageParams } from '@/types/api';
import { FavoriteRegistration } from '@/types/favorite';
import { StoreListItemResponse } from '@/types/store';
import { WIP_API_BASE_URL } from '@/constant';
import { API } from '.';

export const Favorite = {
  async register(data: FavoriteRegistration) {
    const response = await API.post('/favorite', data);
    return response.data;
  },
  async getInfiniteList({
    page,
    size,
  }: PageParams): Promise<StoreListItemResponse[]> {
    const response = await API.get(
      `${WIP_API_BASE_URL}/favorite?page=${page + 1}&size=${size}`,
    );

    const list = (await response.data.data
      .favoriteStoreListDTOResponseList) as StoreListItemResponse[];
    return list;
  },
};
