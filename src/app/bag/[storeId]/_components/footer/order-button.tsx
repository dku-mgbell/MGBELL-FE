import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useSubscribeStoreOpen } from '@/hooks/query/notification/useSubscribeStoreOpen';
import { useGetStoreSubscriptionStatus } from '@/hooks/query/store/useGetStoreSubscriptionStatus';
import { useBagOrderState } from '@/hooks/stores/useBagOrderStateStore';
import { useAuth } from '@/hooks/useAuth';
import useModal from '@/hooks/useModal';
import { useStoreDetailStore } from '../../_stores/useStoreDetailStore';

export default function OrderButton({ isOrderable }: { isOrderable: boolean }) {
  const { isLoggedIn } = useAuth();
  const { openRequireLoginModal } = useAuth();
  const route = useRouter();
  const { open } = useModal();
  const { storeDetail } = useStoreDetailStore();
  const { bagAmount } = useBagOrderState();
  const { mutate: subscribeStoreOpen } = useSubscribeStoreOpen({
    storeId: storeDetail ? storeDetail.storeId : '',
  });
  const [isStoreReservationEnabled, setIsStoreReservationEnabled] =
    useState(false);
  const fcmToken = localStorage.getItem('fcmToken');
  const { data: isSubscribed } = useGetStoreSubscriptionStatus(
    storeDetail ? storeDetail.storeId : '',
  );

  useEffect(() => {
    if (storeDetail) {
      const currentTime = new Date();
      const storeStartTime = new Date(storeDetail!.startTime);
      const storeEndTime = new Date(storeDetail!.endTime);
      setIsStoreReservationEnabled(
        storeDetail &&
          storeDetail.saleStatus === 'ON' &&
          (storeStartTime.getTime() > currentTime.getTime() ||
            storeEndTime.getTime() < currentTime.getTime()),
      );
    }
  }, [storeDetail]);

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

  const handleSubscribeStoreButtonClick = (subscribeStatus: boolean) => {
    if (!isLoggedIn) {
      openRequireLoginModal();
      return;
    }

    if (!fcmToken && !subscribeStatus) {
      open({
        title: '알림 설정이 필요해요.',
        description: '알림 권한을 허용해주세요.',
      });
      return;
    }

    subscribeStoreOpen({
      fcmToken,
      subscribe: !subscribeStatus,
    });
  };

  if (isOrderable)
    return (
      <Button onClick={handleOrderButtonClick} className="flex-1">
        {isStoreReservationEnabled ? '예약하기' : '주문하기'}
      </Button>
    );

  return (
    <Button
      onClick={() => handleSubscribeStoreButtonClick(isSubscribed ?? false)}
      className="flex-1"
    >
      {isSubscribed ? '알림 취소하기' : '오픈 알림받기'}
    </Button>
  );
}
