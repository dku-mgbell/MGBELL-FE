import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import ChevronRightIcon from '@/assets/svg/ChevronRightIcon';
import ThumbsUpIcon from '@/assets/svg/ThumbsUpIcon';
import { useDeleteReview } from '@/hooks/query/review/useDeleteReview';
import { MyReviewResponse, SatisfiedReasonName } from '@/types/review';
import formatTimeDifference from '@/utils/formatTimeDifference';
import useModal from '@/hooks/useModal';
import * as styles from './styles.css';

export default function ReviewPost({
  isMine,
  review,
}: {
  isMine?: boolean;
  review: MyReviewResponse;
}) {
  const { open } = useModal();
  const { mutate: deleteReview } = useDeleteReview();
  const handleDeleteButtonClick = (id: number) => {
    open({
      content: '리뷰를 삭제하시겠습니까?',
      confirmEvent: () => {
        deleteReview(id);
      },
    });
  };

  return (
    <div className={styles.reviewContainer}>
      <div className={styles.reviewHeader({ align: 'center' })}>
        {isMine ? (
          <div>
            <Link href={`/bag/${review.id}`} className={styles.storeName}>
              {review.storeName} <ChevronRightIcon color="black" />
            </Link>
            <span className={styles.date({ theme: 'primary' })}>
              {formatTimeDifference(review.createdAt)}
            </span>
          </div>
        ) : (
          <div>
            <span className={styles.userName}>{review.userName}</span>
            <span className={styles.date()}>
              {formatTimeDifference(review.createdAt)}
            </span>
          </div>
        )}
        {isMine && (
          <button
            type="button"
            className={styles.deleteButton}
            onClick={() => {
              handleDeleteButtonClick(review.reviewId!);
            }}
          >
            삭제
          </button>
        )}
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
            <Image
              src={image}
              alt={`review-image-${image}`}
              width={200}
              height={200}
              className={styles.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.reasonContainer}>
        {review.satisfiedReasons &&
          review.satisfiedReasons.map((reason) => (
            <p key={reason} className={styles.reasonTag}>
              {SatisfiedReasonName[reason]}
              <ThumbsUpIcon />
            </p>
          ))}
      </div>
      {review.ownerComment && (
        <div className={styles.comment}>
          <div className={styles.commentHeader}>
            <p className={styles.commentWriter}>사장님</p>
            <p className={styles.commentDate}>
              {formatTimeDifference(review.ownerCommentDate!)}
            </p>
          </div>
          <p className={styles.commentContent}>{review.ownerComment}</p>
        </div>
      )}
    </div>
  );
}
