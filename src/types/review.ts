import { ImageRequest, ImageResponse } from './image';

export const ReviewScoreName = {
  2: '아쉬워요',
  3: '적당했어요',
  4: '좋았어요',
  5: '최고였어요',
};

export type ReviewScore = keyof typeof ReviewScoreName;

export const SatisfiedReasonName = {
  VARIETY: '다양한 구성의 마감백',
  AFFORDABLE: '저렴한 가격',
  FRIENDLY: '친절한 사장님',
  ZERO: 'Zero Food Waste 기여',
};

export type SatisFactionReason = keyof typeof SatisfiedReasonName;

export interface UserReviewForm {
  rating: ReviewScore;
  satisfactionReasons: SatisFactionReason[];
  description: string;
}

export interface UserReviewUploadRequest extends UserReviewForm {
  orderGoodsId: number;
  reviewImageRegisters: ImageRequest[];
  images: File[];
}

export interface UserReviewUploadResponse {
  id: number;
  reviewPreSignedUrlImages: ImageResponse[];
}

export type ReviewStatistic = {
  mostReviewScore: ReviewScore;
  totalReviewCount: number;
  reviewCounts: ReviewScoreStatistic;
};

export type ReviewScoreStatistic = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [key in ReviewScore]: number;
};

export type ReviewResponse = {
  userName: string;
  createdAt: string;
  reviewScore: ReviewScore;
  content: string;
  satisfiedReasons: SatisFactionReason[];
  images: string[];
  ownerComment?: string;
  ownerCommentDate?: string;
};

export type MyReviewResponse = {
  reviewId: string;
  rating: number;
  satisfactionReasons: SatisFactionReason[];
  description: string;
  createdAt: string;
  imageUrls: string[];
  nickName: string;
  goodsId: string;
  storeId: string;
};
