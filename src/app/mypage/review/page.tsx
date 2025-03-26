'use client';

import { useRouter } from 'next/navigation';
import { Intersection } from '@/components/intersection/intersection';
import HeaderLayout from '@/components/layout/header-layout/header-layout';
import ReviewPost from '@/components/review-post/review-post';
import { useGetMyReview } from '@/hooks/query/review/useGetMyReview';
import { MyReviewResponse } from '@/types/review';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

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
        route.push('/mypage');
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
