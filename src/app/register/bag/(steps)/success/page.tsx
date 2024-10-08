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
      theme="secondary"
      isFullHeightContent
    >
      <SuccessLayout
        title="마감백 등록"
        theme="secondary"
        message={
          <>
            마감벨에서 승인 절차를 거친 후 <br />
            바로 판매 가능합니다.
          </>
        }
      />
    </StepsLayout>
  );
}
