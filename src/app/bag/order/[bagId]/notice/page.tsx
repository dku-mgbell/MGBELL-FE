'use client';

import { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Guide } from '@/components/layout/guide-layout';
import useGuideLayout from '@/components/layout/guide-layout/useGuideLayout';
import StepsLayout from '@/components/layout/steps-layout';
import { Steps } from './_contents/steps';

interface PageProps {
  params: {
    bagId: string;
  };
}

export default function Page({ params }: PageProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const storeId = searchParams.get('storeId');

  const handleLastStepComplete = () => {
    router.push(`/bag/order/${params.bagId}?storeId=${storeId}`);
  };
  const { handleNextButtonClick, currentStep } = useGuideLayout({
    totalSteps: 2,
    onComplete: handleLastStepComplete,
  });

  return (
    <Suspense>
      <StepsLayout onNextButtonClick={handleNextButtonClick}>
        <Guide.Layout currentStep={currentStep}>
          <Steps.RandomBread />
          <Steps.ConfirmOrder />
        </Guide.Layout>
      </StepsLayout>
    </Suspense>
  );
}
