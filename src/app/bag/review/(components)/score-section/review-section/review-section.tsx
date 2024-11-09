import 'swiper/css';
import 'swiper/css/pagination';
import CameraIcon from '@/assets/svg/CameraIcon';
import SortIcon from '@/assets/svg/SortIcon';
import { useGetReviewList } from '@/hooks/query/review/useGetReviewList';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { ReviewResponse, SatisfiedReasonName } from '@/types/review';
import { Intersection } from '@/components/intersection/intersection';
import formatTimeDifference from '@/utils/formatTimeDifference';
import ThumbsUpIcon from '@/assets/svg/ThumbsUpIcon';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as styles from './styles.css';

export default function ReviewSection({ storeId }: { storeId: number }) {
  const reviewListState = useGetReviewList({ storeId, size: 5 });
  const { list, intersection, isLoading } =
    useInfiniteScroll<ReviewResponse>(reviewListState);

  if (isLoading) return <> </>;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.reviewCommentTitle}>최근 리뷰 9개</h1>
          <p className={styles.ownerCommentTitle}>사장님 댓글 9개</p>
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
          <div
            key={`${review.userName}-${review.createdAt}`}
            className={styles.reviewContainer}
          >
            <div className={styles.reviewHeader}>
              <p className={styles.userName}>{review.userName}</p>
              <span className={styles.date}>
                {formatTimeDifference(review.createdAt)}
              </span>
            </div>
            <p className={styles.content}>{review.content}</p>

            <Swiper
              className={styles.swiper}
              slidesPerView={1.8}
              style={{ width: '100%', maxWidth: '600px' }}
              spaceBetween={10}
              breakpoints={{
                360: {
                  slidesPerView: 1.8,
                },
                380: {
                  slidesPerView: 2,
                },
                410: {
                  slidesPerView: 2.1,
                },
                530: {
                  slidesPerView: 3,
                },
              }}
            >
              {review.images.map((image) => (
                <SwiperSlide key={image}>
                  <div
                    className={styles.image}
                    style={{
                      backgroundImage: `url('${image}')`,
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={styles.reasonContainer}>
              {review.reasons.map((reason) => (
                <p key={reason} className={styles.reasonTag}>
                  {SatisfiedReasonName[reason]}
                  <ThumbsUpIcon />
                </p>
              ))}
            </div>
            {review.ownercomment && (
              <div className={styles.comment}>
                <p className={styles.commentWriter}>사장님</p>
                <p className={styles.commentContent}>{review.ownercomment}</p>
              </div>
            )}
          </div>
        ))}
        <Intersection ref={intersection} />
      </main>
    </div>
  );
}
