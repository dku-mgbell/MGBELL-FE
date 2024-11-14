import {
  MyReviewResponse,
  ReviewResponse,
  ReviewStatistic,
  UserReviewUpload,
} from '@/types/review';
import { PageParams } from '@/types/api';
import { API } from '.';

export const Review = {
  async postByUser({
    orderId,
    reviewScore,
    content,
    satisfiedReasons,
    file,
  }: UserReviewUpload) {
    const formData = new FormData();
    formData.append(
      'request',
      JSON.stringify({
        orderId,
        reviewScore,
        content,
        satisfiedReasons,
      }),
    );
    if (file) {
      file.forEach((f) => {
        formData.append('file', f);
      });
    }
    const response = await API.post('/review/user', formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        'Content-Type': 'multipart/form-data',
      },
    });
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
    { page, size }: PageParams,
  ): Promise<ReviewResponse[]> {
    const response = await API.get(
      `/review/list/${storeId}?page=${page}&size=${size}&sort=createdAt,desc`,
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
