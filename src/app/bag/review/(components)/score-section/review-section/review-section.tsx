import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import CameraIcon from '@/assets/svg/CameraIcon';
import SortIcon from '@/assets/svg/SortIcon';
import { Intersection } from '@/components/intersection/intersection';
import ReviewPost from '@/components/review-post/review-post';
import { useGetReviewList } from '@/hooks/query/review/useGetReviewList';
import { ReviewResponse } from '@/types/review';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import * as styles from './styles.css';

export default function ReviewSection({
  storeId,
  reviewCount,
}: {
  storeId: number;
  reviewCount: number;
}) {
  const [sortedByRecentDate, setSortedByRecentDate] = useState(true);
  const [filterPhoto, setFilterPhoto] = useState(false);
  const reviewListState = useGetReviewList({
    storeId,
    size: 5,
    sortedByRecentDate,
    isOnlyPhoto: filterPhoto,
  });
  const { list, intersection, isLoading } =
    useInfiniteScroll<ReviewResponse>(reviewListState);
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ['review-list'] });
  }, [sortedByRecentDate, filterPhoto]);

  if (isLoading) return <> </>;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.reviewCommentTitle}>
            최근 리뷰 {reviewCount}개
          </h1>
          {/* <p className={styles.ownerCommentTitle}>
            사장님 댓글 {reviewCount}개
          </p> */}
        </div>
        <div className={styles.buttonContainer}>
          <button
            type="button"
            className={styles.button({ theme: 'primary' })}
            onClick={() => {
              setSortedByRecentDate((prev) => !prev);
            }}
          >
            <SortIcon />
            {sortedByRecentDate ? '최신순' : '오래된 순'}
          </button>
          <button
            type="button"
            className={styles.button({ theme: 'green' })}
            onClick={() => {
              setFilterPhoto((prev) => !prev);
            }}
          >
            <CameraIcon />
            {filterPhoto ? '전체보기' : '사진리뷰만'}
          </button>
        </div>
      </header>
      <main className={styles.reviewSection}>
        {list!.map((review) => (
          <ReviewPost
            key={`${review.userName} ${review.createdAt}`}
            review={review}
          />
        ))}
        <Intersection ref={intersection} />
      </main>
    </div>
  );
}
