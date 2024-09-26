'use client';

import { useState } from 'react';
import Input from '@/components/input/input';
import { isValidEmail } from '@/utils/regex';
import { usePostMail } from '@/hooks/query/sign-up/usePostMail';
import SignUpLayout from '../(layout)/SignUpLayout';
import { styles } from './styles.css';

export default function Page() {
  const [email, setEmail] = useState('');
  const isInvalidMail = (value: string) =>
    value.length > 0 && !isValidEmail(value);
  const { mutate } = usePostMail();
  const handleSubmitEmail = () => {
    mutate(email);
  };

  return (
    <SignUpLayout
      isNextStepAllowed={isValidEmail(email)}
      onNextStep={handleSubmitEmail}
    >
      <Input
        placeholder="이메일을 입력하세요"
        value={email}
        theme={isInvalidMail(email) ? 'error' : 'default'}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      {isInvalidMail(email) && (
        <p className={styles.message}>잘못된 이메일 형식입니다.</p>
      )}
    </SignUpLayout>
  );
}
