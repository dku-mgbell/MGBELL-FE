import 'swiper/css';
import 'swiper/css/pagination';
import formatTimeDifference from '@/utils/formatTimeDifference';
import { MyReviewResponse, SatisfiedReasonName } from '@/types/review';
import { Swiper, SwiperSlide } from 'swiper/react';
import ThumbsUpIcon from '@/assets/svg/ThumbsUpIcon';
import ChevronRightIcon from '@/assets/svg/ChevronRightIcon';
import Link from 'next/link';
import * as styles from './styles.css';

export default function ReviewPost({
  isMine,
  review,
}: {
  isMine?: boolean;
  review: MyReviewResponse;
}) {
  // TODO line 24 storeId -> id 로 수정 예정

  return (
    <div className={styles.reviewContainer}>
      <div className={styles.reviewHeader({ align: 'center' })}>
        {isMine ? (
          <div>
            <Link href={`/bag/${review.storeId}`} className={styles.storeName}>
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
          <button type="button" className={styles.deleteButton}>
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
        {review.reasons &&
          review.reasons.map((reason) => (
            <p key={reason} className={styles.reasonTag}>
              {SatisfiedReasonName[reason]}
              <ThumbsUpIcon />
            </p>
          ))}
        {review.satisfiedReasons &&
          review.satisfiedReasons.map((reason) => (
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
      {review.ownerComment && (
        <div className={styles.comment}>
          <p className={styles.commentWriter}>사장님</p>
          <p className={styles.commentContent}>{review.ownerComment}</p>
        </div>
      )}
    </div>
  );
}
