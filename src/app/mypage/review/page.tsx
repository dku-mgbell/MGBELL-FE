'use client';

import { useRouter } from 'next/navigation';
import HeaderLayout from '@/components/layout/header-layout/header-layout';
import { useGetMyReview } from '@/hooks/query/review/useGetMyReview';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { MyReviewResponse } from '@/types/review';
import { Intersection } from '@/components/intersection/intersection';
import ReviewPost from '@/components/review-post/review-post';

import * as styles from './styles.css';

export default function Page() {
  const route = useRouter();
  const reviewListState = useGetMyReview({ size: 20 });
  const {
    list: reviewList,
    intersection,
    isLoading,
  } = useInfiniteScroll<MyReviewResponse>(reviewListState);

  if (isLoading) return <> </>;

  return (
    <HeaderLayout
      title="리뷰관리"
      previousButtonClickEvent={() => {
        route.back();
      }}
      paddingBottom={false}
    >
      <div className={styles.container}>
        <h1 className={styles.title}>내가 쓴 총 리뷰</h1>
        <div className={styles.reviewList}>
          {reviewList?.map((review) => (
            <ReviewPost key={review.reviewId} isMine review={review} />
          ))}
          <Intersection ref={intersection} />
        </div>
      </div>
    </HeaderLayout>
  );
}