'use client';

import { useState } from 'react';
import StepsLayout from '@/components/layout/steps-layout';
import LabeledField from '@/components/ui/labeled-field';
import TextField from '@/components/ui/text-field';
import { SignUpData } from '@/types/sign-up';
import { isValidNickname, isValidPhoneNumber } from '@/utils/regex';
import { useSignUpStore } from '../_/sign-up-store';
import AgreementBottomSheet from './_components/agreement-bottom-sheet';

export default function Page() {
  const { signUpInfo, updateSignUpInfo } = useSignUpStore();
  const [isAgreementBottomSheetOpen, setIsAgreementBottomSheetOpen] =
    useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof SignUpData,
  ) => {
    updateSignUpInfo(key, e.target.value);
  };

  const handleNextButtonClick = () => {
    setIsAgreementBottomSheetOpen(true);
  };

  const isNextButtonEnabled =
    isValidNickname(signUpInfo.nickName) &&
    isValidPhoneNumber(signUpInfo.phoneNumber ?? '');

  return (
    <StepsLayout
      isNextButtonEnabled={isNextButtonEnabled}
      onNextButtonClick={handleNextButtonClick}
      nextButtonText="다음"
    >
      <LabeledField
        label="닉네임"
        description="2~16자의 영어 또는 숫자 또는 한글로 구성"
      >
        <TextField
          placeholder="닉네임을 입력해주세요"
          value={signUpInfo.nickName}
          onChange={(e) => handleInputChange(e, 'nickName')}
          maxLength={16}
        />
        <p className="text-b3 pl-[10px] text-gray3" />
      </LabeledField>

      <LabeledField label="휴대폰번호">
        <TextField
          type="number"
          placeholder="휴대폰번호 입력해주세요"
          value={signUpInfo.phoneNumber}
          onChange={(e) => handleInputChange(e, 'phoneNumber')}
        />
      </LabeledField>
      <AgreementBottomSheet
        isOpen={isAgreementBottomSheetOpen}
        setOpen={setIsAgreementBottomSheetOpen}
      />
    </StepsLayout>
  );
}
