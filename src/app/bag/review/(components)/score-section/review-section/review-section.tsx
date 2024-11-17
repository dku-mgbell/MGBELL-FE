import 'swiper/css';
import 'swiper/css/pagination';
import CameraIcon from '@/assets/svg/CameraIcon';
import SortIcon from '@/assets/svg/SortIcon';
import { useGetReviewList } from '@/hooks/query/review/useGetReviewList';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { ReviewResponse } from '@/types/review';
import { Intersection } from '@/components/intersection/intersection';
import ReviewPost from '@/components/review-post/review-post';
import * as styles from './styles.css';

export default function ReviewSection({
  storeId,
  reviewCount,
}: {
  storeId: number;
  reviewCount: number;
}) {
  const reviewListState = useGetReviewList({ storeId, size: 5 });
  const { list, intersection, isLoading } =
    useInfiniteScroll<ReviewResponse>(reviewListState);

  if (isLoading) return <> </>;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.reviewCommentTitle}>
            최근 리뷰 {reviewCount}개
          </h1>
          <p className={styles.ownerCommentTitle}>
            사장님 댓글 {reviewCount}개
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <button type="button" className={styles.button({ theme: 'primary' })}>
            <SortIcon />
            최신순
          </button>
          <button type="button" className={styles.button({ theme: 'green' })}>
            <CameraIcon />
            사진리뷰만
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
