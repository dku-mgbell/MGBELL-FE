import ChevronRightIcon from '@/assets/svg/ChevronRightIcon';
import { useRouter } from 'next/navigation';
import * as styles from './styles.css';

export default function ReviewButton({
  bagId,
  reviewCnt,
}: {
  bagId: number;
  reviewCnt: number;
}) {
  const route = useRouter();

  return (
    <button
      type="button"
      className={styles.reviewButton}
      onClick={() => {
        route.push(`/bag/review?id=${bagId}`);
      }}
    >
      리뷰 {reviewCnt}개
      <ChevronRightIcon />
    </button>
  );
}
