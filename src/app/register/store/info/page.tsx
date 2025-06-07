'use client';

import StepsLayout from '@/components/layout/steps-layout';
import LabeledField from '@/components/ui/labeled-field';
import TextField from '@/components/ui/text-field';

export default function Page() {
  return (
    <StepsLayout
      isNextButtonEnabled
      nextButtonText="등록"
      onNextButtonClick={() => {}}
    >
      <LabeledField
        label="매장 이름"
        description="체인점일 경우, 지점명까지 입력해주세요!"
      >
        <TextField
          onChange={() => {}}
          name="storeName"
          placeholder="매장 이름 입력"
        />
      </LabeledField>
    </StepsLayout>
  );
}
