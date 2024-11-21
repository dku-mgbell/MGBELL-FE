import { PageParams } from '@/types/api';
import {
  BagInfo,
  BagDetail,
  BagInfoPageResponse,
  BagInfoResponse,
  MyBagInfoResponse,
} from '@/types/bag';
import { API } from '.';

export const Bag = {
  async register(data: BagInfo) {
    const response = await API.post('/post', data);
    return response.data;
  },
  async getInfiniteList(
    {
      isLoggedIn,
      sortedBy,
      searchKeyword,
    }: { isLoggedIn?: boolean; sortedBy?: string; searchKeyword?: string },
    { page, size }: PageParams,
  ): Promise<BagInfoResponse[]> {
    const url = `/post/${isLoggedIn ? 'list' : 'guest'}?page=${page}&size=${size}`;
    if (sortedBy === 'review') {
      const response = await API.get(
        `${url}&sort=store.best%20%2B%20store.good%20%2B%20store.notBad%20%2B%20store.notGood%2CDESC`,
      );
      const list = (await response.data.content) as BagInfoResponse[];
      return list;
    }

    const response = await API.get(
      `${url}&sort=${sortedBy === 'onSale' ? '&onSale=true' : sortedBy || 'createdAt,desc'}${searchKeyword && `&storeName=${searchKeyword}`}`,
    );
    const list = (await response.data.content) as BagInfoResponse[];
    return list;
  },
  async getList({ page, size }: PageParams): Promise<BagInfoPageResponse> {
    const response = await API.get(`/post/list?page=${page}&size=${size}`);
    return response.data;
  },
  async getDetail({
    id,
    isLoggedIn,
  }: {
    id: number;
    isLoggedIn?: boolean;
  }): Promise<BagDetail> {
    const response = await API.get(`/post/${isLoggedIn ? '' : 'guest/'}${id}`);
    return response.data;
  },
  async patch(data: BagInfo) {
    const response = await API.patch('/post', data);
    return response.data;
  },

  async patchOnSale(onSale: boolean) {
    const response = await API.post('/post/onSale', {
      onSale,
    });
    return response.data;
  },

  async getInfoByOwner(): Promise<MyBagInfoResponse> {
    const response = await API.get('/post');
    return response.data;
  },
};
