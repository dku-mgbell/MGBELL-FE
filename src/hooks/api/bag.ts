import { PageParams } from '@/types/api';
import { BagInfo, BagInfoResponse } from '@/types/bag';
import { API } from '.';

export const Bag = {
  async register(data: BagInfo) {
    const response = await API.post('/post', data);
    return response.data;
  },
  async getList({ page, size }: PageParams): Promise<BagInfoResponse[]> {
    const response = await API.get(`/post/list?page=${page}&size=${size}`);
    const list = (await response.data.content) as BagInfoResponse[];
    return list;
  },
};
