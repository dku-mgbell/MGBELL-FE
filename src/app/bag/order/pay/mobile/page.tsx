'use client';

import { Suspense, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Loader from '@/components/loader/loader';
import { useCompletePayment } from '@/hooks/query/order/payment/useCompletePayment';

function Content() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const errorMessage = searchParams.get('message');
  const paymentId = searchParams.get('paymentId');
  const price = searchParams.get('price');
  const { mutate: completePayment } = useCompletePayment();

  useEffect(() => {
    if (errorMessage) {
      router.push(`/bag/order/fail`);
      return;
    }

    if (paymentId) {
      completePayment(paymentId, {
        onSuccess: () => {
          router.push(`/bag/order/success?price=${price}`);
        },
        onError: () => {
          router.push(`/bag/order/fail`);
        },
      });
    }
  }, [paymentId, errorMessage]);

  return <Loader />;
}

export default function Page() {
  return (
    <Suspense>
      <Content />
    </Suspense>
  );
}
