export type ReviewScore = 'BEST' | 'GOOD' | 'NOTBAD' | 'NOTGOOD';

export const ReviewScoreName = {
  NOTGOOD: '아쉬워요',
  NOTBAD: '적당했어요',
  GOOD: '좋아요',
  BEST: '최고였어요',
};

export type SatisfiedReason =
  | 'KIND_OWNER'
  | 'LOW_PRICE'
  | 'ZERO_WASTE'
  | 'VARIOUS_KINDS';

export const SatisfiedReasonName = {
  VARIOUS_KINDS: '다양한 구성의 마감백',
  LOW_PRICE: '저렴한 가격',
  KIND_OWNER: '친절한 사장님',
  ZERO_WASTE: 'Zero Food Waste 기여',
};

export interface UserReviewUpload {
  orderId: number;
  reviewScore?: ReviewScore;
  content?: string;
  satisfiedReasons?: SatisfiedReason[];
  file?: File[];
}