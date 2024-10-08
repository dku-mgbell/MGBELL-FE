'use client';

import StepsLayout from '@/components/layout/steps-layout/steps-layout';
import SuccessLayout from '@/components/layout/success-layout/success-layout';
import { useRouter } from 'next/navigation';

export default function Page() {
  const route = useRouter();
  const handleNextButtonClick = () => {
    route.push('/');
  };
  return (
    <StepsLayout
      isNextStepAllowed
      onNextStep={handleNextButtonClick}
      buttonContent="바로 시작하기"
      isFullHeightContent
    >
      <SuccessLayout
        title="마감벨 회원 등록"
        message="마감벨에 오신것을 환영합니다."
      />
    </StepsLayout>
  );
}
