import { PageParams } from '@/types/api';
import {
  MyReviewResponse,
  ReviewResponse,
  ReviewStatistic,
  ReviewRatingResponse,
  UserReviewUploadRequest,
} from '@/types/review';
import { WIP_API_BASE_URL } from '@/constant';
import { API } from '.';

export const Review = {
  async postByUser(data: Omit<UserReviewUploadRequest, 'images'>) {
    const response = await API.post(`${WIP_API_BASE_URL}/review`, data);
    return response.data.data;
  },
  async getStatistic({
    storeId,
  }: {
    storeId: number;
  }): Promise<ReviewStatistic> {
    const response = await API.get(`/review/preview/${storeId}`);
    return response.data;
  },
  async getList({
    goodsId,
    imageCheck = false,
    page,
    size,
  }: {
    goodsId: string;
    imageCheck?: boolean;
  } & PageParams): Promise<ReviewResponse[]> {
    const response = await API.get(
      `${WIP_API_BASE_URL}/review?goodsId=${goodsId}&page=${page + 1}&size=${size}&imageCheck=${imageCheck}`,
    );
    const list = (await response.data.data
      .reviewListDTOList) as ReviewResponse[];
    return list;
  },
  async getMyList({ page, size }: PageParams): Promise<MyReviewResponse[]> {
    const response = await API.get(
      `${WIP_API_BASE_URL}/review/me?page=${page + 1}&size=${size}`,
    );
    const list = (await response.data.data
      .reviewListDTOList) as MyReviewResponse[];
    return list;
  },
  async deletePost(reviewId: string) {
    const response = await API.delete(`${WIP_API_BASE_URL}/review/${reviewId}`);
    return response.data;
  },
  async getRating({
    goodsId,
  }: {
    goodsId: string;
  }): Promise<ReviewRatingResponse> {
    const response = await API.get(
      `${WIP_API_BASE_URL}/review/rating?goodsId=${goodsId}&imageCheck=false  `,
    );
    return response.data.data;
  },
};
