import { PageParams } from '@/types/api';
import {
  MyReviewResponse,
  ReviewResponse,
  ReviewStatistic,
  UserReviewUploadRequest,
} from '@/types/review';
import { WIP_API_BASE_URL } from '@/constant';
import { API } from '.';

export const Review = {
  async postByUser(data: Omit<UserReviewUploadRequest, 'images'>) {
    const response = await API.post(`${WIP_API_BASE_URL}/review`, data);
    return response.data;
  },
  async getStatistic({
    storeId,
  }: {
    storeId: number;
  }): Promise<ReviewStatistic> {
    const response = await API.get(`/review/preview/${storeId}`);
    return response.data;
  },
  async getInfiniteList(
    storeId: number,
    sortedByRecentDate: boolean,
    isOnlyPhoto: boolean,
    { page, size }: PageParams,
  ): Promise<ReviewResponse[]> {
    const response = await API.get(
      `/review/list/${storeId}?page=${page}&size=${size}&sort=createdAt,${sortedByRecentDate ? 'desc' : 'asc'}${isOnlyPhoto ? '&onlyPhotos=true' : ''}`,
    );
    const list = (await response.data.content) as ReviewResponse[];
    return list;
  },
  async getMyList({ page, size }: PageParams): Promise<MyReviewResponse[]> {
    const response = await API.get(
      `/review/user/list?page=${page}&size=${size}&sort=createdAt,desc`,
    );
    const list = (await response.data.content) as MyReviewResponse[];
    return list;
  },
  async deletePost(reviewId: number) {
    const response = await API.delete(`/review/user/${reviewId}`);
    return response.data;
  },
};
