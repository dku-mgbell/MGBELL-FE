import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/hooks/stores/useAuthStore';
import { useBagOrderState } from '@/hooks/stores/useBagOrderStateStore';
import { useAuth } from '@/hooks/useAuth';
import useModal from '@/hooks/useModal';
import { useGetBagDetailStore } from '../../_stores/useGetBagDetailStore';

export default function OrderButton() {
  const { isLoggedIn } = useAuthStore();
  const { logout } = useAuth();
  const route = useRouter();
  const { bagDetail } = useGetBagDetailStore();
  const { open } = useModal();
  const { bagAmount } = useBagOrderState();

  const isOrderable = bagDetail && bagDetail.amount > 0 && bagDetail.onSale;

  const handleOrderButtonClick = () => {
    if (!isLoggedIn) {
      open({
        content: '로그인 이후 이용 가능합니다.',
        confirmEvent: () => {
          logout();
        },
      });
      return;
    }
    if (bagAmount > 0) {
      route.push(`order/${bagDetail!.storeId}?bagId=${bagDetail!.id}`);
    } else {
      open({ content: '수량을 선택해주세요' });
    }
  };

  return (
    <Button
      variant={isOrderable ? 'primary' : 'primary-inactive'}
      onClick={handleOrderButtonClick}
      className="flex-1"
      disabled={!isOrderable}
    >
      {isOrderable ? '주문하기' : '주문불가'}
    </Button>
  );
}
