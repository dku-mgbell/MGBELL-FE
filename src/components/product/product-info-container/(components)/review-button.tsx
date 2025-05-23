import { useRouter } from 'next/navigation';
import ChevronRightIcon from '@/assets/svg/ChevronRightIcon';
import { useAuth } from '@/hooks/useAuth';
import useModal from '@/hooks/useModal';
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
  const { isLoggedIn, logout } = useAuth();
  const { open } = useModal();

  return (
    <button
      type="button"
      className={styles.reviewButton}
      onClick={() => {
        if (storeId && isLoggedIn)
          route.push(`/bag/review?storeId=${storeId}&bagId=${bagId}`);
        if (!isLoggedIn) {
          open({
            content: '로그인 이후 이용 가능합니다.',
            confirmEvent: () => {
              logout();
            },
          });
        }
      }}
    >
      리뷰 {reviewCnt}개{storeId && <ChevronRightIcon />}
    </button>
  );
}
