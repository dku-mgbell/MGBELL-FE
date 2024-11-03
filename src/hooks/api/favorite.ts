import { FavoriteRegistration } from '@/types/favorite';
import { PageParams } from '@/types/api';
import { BagInfoResponse } from '@/types/bag';
import { API } from '.';

export const Favorite = {
  async register(data: FavoriteRegistration) {
    const response = await API.post('/favorite', data);
    return response.data;
  },
  async getInfiniteList({
    page,
    size,
  }: PageParams): Promise<BagInfoResponse[]> {
    const response = await API.get(
      `/favorite?page=${page}&size=${size}&sort=createdAt,desc`,
    );
    const list = (await response.data.content) as BagInfoResponse[];
    return list;
  },
};
