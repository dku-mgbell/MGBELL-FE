import Image from 'next/image';
import { ReviewScoreImage } from '@/assets/images/review/bell';
import { ReviewScore, ReviewScoreName } from '@/types/review';
import { useGetReviewStatistic } from '@/hooks/query/review/useGetReviewStatistic';
// import { useGetReviewStatistic } from '@/hooks/query/review/useGetReviewStatistic';
import * as styles from './styles.css';

export default function ScoreSection({ storeId }: { storeId: number }) {
  // const reviewStatistic: ReviewStatistic = {
  //   mostReviewScore: 'BEST',
  //   reviewCount: 3 + storeId,
  //   reviewScore: {
  //     BEST: 2,
  //     GOOD: 1,
  //     NOTGOOD: storeId,
  //     NOTBAD: 0,
  //   },
  // };
  const { data: reviewStatistic, isLoading } = useGetReviewStatistic({
    storeId,
  });

  if (isLoading) return <> </>;

  return (
    <div className={styles.scoreContainer}>
      <div className={styles.scoreImageContainer}>
        <Image
          className={styles.scoreImage}
          src={ReviewScoreImage[reviewStatistic!.mostReviewScore].src}
          alt="review-score-image"
          width={85}
          height={85}
        />
        <p className={styles.finalScoreName}>
          {ReviewScoreName[reviewStatistic!.mostReviewScore]}
        </p>
      </div>
      <div className={styles.scoreStatistic}>
        {Object.entries(ReviewScoreName)
          .reverse()
          .map(([id, name]) => (
            <div key={id} className={styles.scoreItem}>
              <p
                className={styles.scoreName({
                  active: reviewStatistic!.mostReviewScore === id,
                })}
              >
                {name}
              </p>
              <div className={styles.scoreGraph}>
                <div
                  className={styles.scoreGraphFilled}
                  style={{
                    width:
                      reviewStatistic!.totalReviewCount === 0
                        ? 0
                        : `${(100 / reviewStatistic!.totalReviewCount) * reviewStatistic!.reviewCounts[id as ReviewScore]}%`,
                  }}
                />
              </div>
              <p
                className={styles.scoreNumber({
                  active: reviewStatistic!.mostReviewScore === id,
                })}
              >
                {reviewStatistic!.reviewCounts[id as ReviewScore] ?? 0}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}