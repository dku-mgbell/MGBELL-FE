import ChevronRightIcon from '@/assets/svg/ChevronRightIcon';
import { useRouter } from 'next/navigation';
import * as styles from './styles.css';

export default function ReviewButton({
  bagId,
  storeId,
  reviewCnt,
}: {
  bagId?: number;
  storeId?: number;
  reviewCnt: number;
}) {
  const route = useRouter();

  return (
    <button
      type="button"
      className={styles.reviewButton}
      onClick={() => {
        if (storeId)
          route.push(`/bag/review?storeId=${storeId}&bagId=${bagId}`);
      }}
    >
      리뷰 {reviewCnt}개{storeId && <ChevronRightIcon />}
    </button>
  );
}
