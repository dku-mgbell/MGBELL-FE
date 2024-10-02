'use client';

import StepsLayout from '@/components/layout/steps-layout/steps-layout';
import { useRouter } from 'next/navigation';

export default function Page() {
  const route = useRouter();

  return (
    <StepsLayout
      isNextStepAllowed
      onNextStep={() => {
        route.push('/register/bag/info');
      }}
      buttonContent="마감백 설정하기"
      theme="secondary"
    >
      마감백 설명
    </StepsLayout>
  );
}
