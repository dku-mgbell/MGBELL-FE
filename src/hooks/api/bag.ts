import { PageParams } from '@/types/api';
import {
  BagInfo,
  BagDetail,
  BagInfoPageResponse,
  BagInfoResponse,
} from '@/types/bag';
import { API } from '.';

export const Bag = {
  async register(data: BagInfo) {
    const response = await API.post('/post', data);
    return response.data;
  },
  async getInfiniteList({
    page,
    size,
  }: PageParams): Promise<BagInfoResponse[]> {
    const response = await API.get(
      `/post/list?page=${page}&size=${size}&sort=createdAt,desc`,
    );
    const list = (await response.data.content) as BagInfoResponse[];
    return list;
  },
  async getList({ page, size }: PageParams): Promise<BagInfoPageResponse> {
    const response = await API.get(`/post/list?page=${page}&size=${size}`);
    return response.data;
  },
  async getDetail(id: number): Promise<BagDetail> {
    const response = await API.get(`/post/${id}`);
    return response.data;
  },
};
