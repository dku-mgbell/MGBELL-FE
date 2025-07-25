'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Loader from '@/components/loader/loader';
import { useCompletePayment } from '@/hooks/query/order/payment/useCompletePayment';
import useLoadingModal from '@/hooks/useModal/loading';
import { useUserPaymentStore } from '../_stores/useUserPaymentStore';
import { usePayment } from './usePayment';

interface PaymentStatus {
  status: 'IDLE' | 'PENDING' | 'FAILED' | 'PAID';
  message?: string;
}

export default function Page() {
  const router = useRouter();
  const { userPaymentStore } = useUserPaymentStore();
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>({
    status: 'IDLE',
    message: '',
  });
  const { openPaymentErrorModal, requestPayment } = usePayment();
  const { openLoading, closeLoading } = useLoadingModal();
  const { mutate: completePayment } = useCompletePayment();

  const redirectPath = {
    FAILED: '/bag/order/fail',
    PAID: `/bag/order/success?price=${userPaymentStore.amount}`,
  };

  useEffect(() => {
    if (paymentStatus.status === 'PAID' || paymentStatus.status === 'FAILED') {
      closeLoading();
      router.push(redirectPath[paymentStatus.status]);
    }
  }, [paymentStatus]);

  const handlePayment = async () => {
    openLoading('결제창 불러오는 중...');
    setPaymentStatus({
      status: 'PENDING',
    });

    try {
      const paymentResponse = await requestPayment();
      if (!paymentResponse || paymentResponse.paymentId === undefined) {
        setPaymentStatus({
          status: 'FAILED',
        });
      } else {
        closeLoading();
        openLoading('결제 처리 중...');
        completePayment(userPaymentStore.merchantUid!, {
          onSuccess: (res) => {
            const isSuccess = res.data === 'success';
            setPaymentStatus({
              status: isSuccess ? 'PAID' : 'FAILED',
            });
          },
          onError: () => {
            setPaymentStatus({
              status: 'FAILED',
            });
          },
        });
      }
    } catch (error) {
      setPaymentStatus({
        status: 'FAILED',
      });
    }
  };

  useEffect(() => {
    const isRequestValid =
      userPaymentStore.name &&
      userPaymentStore.amount &&
      userPaymentStore.merchantUid;

    if (!isRequestValid) {
      openPaymentErrorModal();
      return;
    }

    setPaymentStatus({
      status: 'PENDING',
    });

    handlePayment();
  }, []);

  return <Loader />;
}
