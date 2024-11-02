'use client';

import StepsLayout from '@/components/layout/steps-layout/steps-layout';

export default function Page() {
  return (
    <StepsLayout onNextStep={() => {}} buttonContent="주문하기">
      주문 정보 입력
    </StepsLayout>
  );
}
