import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useBagOrderState } from '@/hooks/stores/useBagOrderStateStore';
import { useAuth } from '@/hooks/useAuth';
import useModal from '@/hooks/useModal';
import { useStoreDetailStore } from '../../_stores/useStoreDetailStore';

export default function OrderButton() {
  const { isLoggedIn } = useAuth();
  const { openRequireLoginModal } = useAuth();
  const route = useRouter();
  const { open } = useModal();
  const { storeDetail } = useStoreDetailStore();
  const { bagAmount } = useBagOrderState();

  const isOrderable =
    storeDetail && storeDetail.quantity > 0 && storeDetail.saleStatus === 'ON';

  const handleOrderButtonClick = () => {
    if (!isLoggedIn) {
      openRequireLoginModal();
      return;
    }
    if (bagAmount > 0) {
      route.push(
        `order/${storeDetail!.goodsId}/notice?storeId=${storeDetail!.storeId}`,
      );
    } else {
      open({
        title: '수량을 선택해주세요',
        description: '주문하실 상품의 수량을 선택해주세요.',
      });
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
