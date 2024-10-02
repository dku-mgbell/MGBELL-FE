'use client';

import StepsLayout from '@/components/layout/steps-layout/steps-layout';
import { useRouter } from 'next/navigation';

export default function Page() {
  const route = useRouter();

  const handleNextButtonClick = () => {
    route.push('/settings');
  };

  return (
    <StepsLayout
      isNextStepAllowed
      onNextStep={handleNextButtonClick}
      theme="secondary"
      isPadding
    >
      마감백 등록 성공 페이지
    </StepsLayout>
  );
}
