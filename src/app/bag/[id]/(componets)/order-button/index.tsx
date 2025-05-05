import { useRouter } from 'next/navigation';
import Button from '@/components/button/text-button/button';
import { useAuthStore } from '@/hooks/stores/useAuthStore';
import { useAuth } from '@/hooks/useAuth';
import useModal from '@/hooks/useModal';
import { useGetBagDetailStore } from '../../(stores)/useGetBagDetailStore';

import * as styles from '../../styles.css';

export default function OrderButton() {
  const { isLoggedIn } = useAuthStore();
  const { logout } = useAuth();
  const route = useRouter();
  const { bagDetail, isBagDetailFetched } = useGetBagDetailStore();
  const { open } = useModal();

  const isOrderable =
    isBagDetailFetched && bagDetail!.amount > 0 && bagDetail!.onSale;

  return (
    <Button
      value={isOrderable ? '주문하기' : '주문불가'}
      theme={isOrderable ? 'primary' : 'inactive-primary'}
      onClick={() => {
        if (!isLoggedIn) {
          open({
            content: '로그인 이후 이용 가능합니다.',
            confirmEvent: () => {
              logout();
            },
          });
          return;
        }
        if (bagDetail!.amount > 0) {
          route.push(`order/${bagDetail!.storeId}?bagId=${bagDetail!.id}`);
        } else {
          open({ content: '수량을 선택해주세요' });
        }
      }}
      className={styles.orderButton}
    />
  );
}
