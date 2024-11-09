import { ReviewStatistic, UserReviewUpload } from '@/types/review';
import { API } from '.';

export const Review = {
  async postByUser({
    orderId,
    reviewScore,
    content,
    satisfiedReasons,
    file,
  }: UserReviewUpload) {
    const response = await API.post(
      '/review/user',
      {
        request: JSON.stringify({
          orderId,
          reviewScore,
          content,
          satisfiedReasons,
        }),
        file,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return response.data;
  },
  async getStatistic({
    storeId,
  }: {
    storeId: number;
  }): Promise<ReviewStatistic> {
    const response = await API.get(`/review/Preview/${storeId}`);
    return response.data;
  },
};
