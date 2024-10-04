'use client';

import { useState } from 'react';
import Input from '@/components/input/input';
import { isValidPassword } from '@/utils/regex';
import { useRouter } from 'next/navigation';
import { useSignUpInfoStore } from '@/hooks/stores/useSignUpInfoStore';
import StepsLayout from '@/components/layout/steps-layout/steps-layout';
import { styles } from '../styles.css';

export default function Page() {
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const { signUpInfo, setSignUpInfo } = useSignUpInfoStore();
  const route = useRouter();

  const handleNextButtonClick = () => {
    setSignUpInfo({ ...signUpInfo, password });
    route.push('/sign-up/info');
  };
  const isInvalidPassword = (value: string) =>
    value.length > 0 && !isValidPassword(value);

  const isInvalidPasswordCheck = (value: string) =>
    value.length > 0 && value !== password;

  return (
    <StepsLayout
      title="비밀번호"
      isNextStepAllowed={
        isValidPassword(password) && password === passwordCheck
      }
      onNextStep={handleNextButtonClick}
    >
      <Input
        type="password"
        placeholder="비밀번호 입력"
        value={password}
        maxLength={16}
        theme={isInvalidPassword(password) ? 'error' : 'default'}
        onFocus={() => {
          setPasswordCheck('');
        }}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      {isValidPassword(password) && (
        <Input
          type="password"
          placeholder="비밀번호 확인"
          maxLength={16}
          value={passwordCheck}
          theme={isInvalidPasswordCheck(passwordCheck) ? 'error' : 'default'}
          onChange={(e) => {
            setPasswordCheck(e.target.value);
          }}
          style={{ marginTop: '14px' }}
        />
      )}
      <p className={styles.message()}>
        영문, 특수문자, 숫자를 조합하여
        <br /> 8~16자로 입력해주세요.
      </p>
    </StepsLayout>
  );
}
