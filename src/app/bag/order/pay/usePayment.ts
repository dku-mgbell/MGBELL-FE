import { useRouter } from 'next/navigation';
import PortOne from '@portone/browser-sdk/v2';
import useModal from '@/hooks/useModal';
import { BASE_URL, PORTONE_CHANNEL_KEY, PORTONE_STORE_ID } from '@/constant';
import { useUserPaymentStore } from '../_stores/useUserPaymentStore';

export const usePayment = () => {
  const { userPaymentStore } = useUserPaymentStore();
  const { open } = useModal();
  const router = useRouter();

  const openPaymentErrorModal = () =>
    open({
      title: '결제 오류',
      description: '결제 정보가 올바르지 않습니다.',
      confirmEvent: () => {
        router.push('/');
      },
      onlyConfirmButton: true,
    });

  const requestPayment = async () =>
    PortOne.requestPayment({
      storeId: PORTONE_STORE_ID!,
      channelKey: PORTONE_CHANNEL_KEY!,
      paymentId: userPaymentStore.merchantUid!,
      orderName: userPaymentStore.name!,
      totalAmount: userPaymentStore.amount!,
      // @ts-expect-error currency type is defined as string in IMP types but we're using 'KRW' as a valid value
      currency: 'KRW',
      payMethod: 'CARD',
      redirectUrl: `${BASE_URL}/bag/order/pay/mobile?price=${userPaymentStore.amount}`,
    });

  return {
    openPaymentErrorModal,
    requestPayment,
  };
};
