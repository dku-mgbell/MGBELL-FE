'use client';

import { useState } from 'react';
import Input from '@/components/input/input';
import { useSignUpInfoStore } from '@/hooks/stores/useSignUpInfoStore';
import { isValidPhoneNumber } from '@/utils/regex';
import { usePostSignUp } from '@/hooks/query/sign-up/usePostSignUp';
import StepsLayout from '@/components/layout/steps-layout/steps-layout';
import Loader from '@/components/loader/loader';
import { styles } from '../styles.css';

export default function Page() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const { signUpInfo, setSignUpInfo } = useSignUpInfoStore();
  const { mutate: postSignUpInfo, isPending, isSuccess } = usePostSignUp();

  const handleNextButtonClick = () => {
    setSignUpInfo({ ...signUpInfo, name, phoneNumber });
    postSignUpInfo({ ...signUpInfo, name, phoneNumber });
  };

  const isInvalidPhoneNumber = (value: string) =>
    value.length > 0 && !isValidPhoneNumber(value);

  if (isPending || isSuccess) return <Loader />;

  return (
    <StepsLayout
      title="회원 정보"
      isNextStepAllowed={name.length > 0 && isValidPhoneNumber(phoneNumber)}
      onNextStep={handleNextButtonClick}
      buttonContent="가입"
    >
      <Input
        placeholder="성함을 입력해주세요."
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div style={{ height: '10px' }} />
      <Input
        placeholder="-을 제외한 연락처를 입력해주세요."
        maxLength={11}
        value={phoneNumber}
        theme={isInvalidPhoneNumber(phoneNumber) ? 'error' : 'default'}
        onChange={(e) => {
          setPhoneNumber(e.target.value);
        }}
      />
      <p className={styles.message()}>주문 관련 알림톡을 전송해드립니다.</p>
    </StepsLayout>
  );
}
