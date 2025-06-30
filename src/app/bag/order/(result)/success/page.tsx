'use client';

import { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Guide } from '@/components/layout/guide-layout';
import useGuideLayout from '@/components/layout/guide-layout/useGuideLayout';
import StepsLayout from '@/components/layout/steps-layout';
import { Steps } from './_components/steps';

function Content() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const price = Number(searchParams.get('price'));

  const handleLastStepComplete = () => {
    router.push(`/order`);
  };
  const { handleNextButtonClick, currentStep } = useGuideLayout({
    totalSteps: 2,
    onComplete: handleLastStepComplete,
  });

  return (
    <StepsLayout
      isNextButtonEnabled
      onNextButtonClick={handleNextButtonClick}
      nextButtonText="확인"
    >
      <Guide.Layout currentStep={currentStep}>
        <Steps.Success />
        <Steps.SavingEarth price={price} />
      </Guide.Layout>
    </StepsLayout>
  );
}

export default function Page() {
  return (
    <Suspense>
      <Content />
    </Suspense>
  );
}
