'use client';

import StepsLayout from '@/components/layout/steps-layout/steps-layout';
import { useRouter } from 'next/navigation';

export default function Page() {
  const route = useRouter();

  const handleNextButtonClick = () => {
    route.push('/register/bag/success');
  };

  return (
    <StepsLayout
      isNextStepAllowed
      onNextStep={handleNextButtonClick}
      theme="secondary"
    >
      마감백 판매 여부 설정
    </StepsLayout>
  );
}
