'use client';

import { useEffect, useState } from 'react';
import Input from '@/components/input/input';
import StepsLayout from '@/components/layout/steps-layout/steps-layout';
import Loader from '@/components/loader/loader';
import { useCheckDuplicate } from '@/hooks/query/sign-up/useCheckDuplicate';
import { usePostMail } from '@/hooks/query/sign-up/usePostMail';
import { useSignUpInfoStore } from '@/hooks/stores/useSignUpInfoStore';
import { isValidEmail } from '@/utils/regex';
import { styles } from '../styles.css';

export default function Page() {
  const [email, setEmail] = useState('');
  const [isDuplicateUser, setIsDuplicateUser] = useState<boolean>(true);
  const isInvalidMail = (value: string) =>
    value.length > 0 && !isValidEmail(value);
  const { mutate, isPending, isSuccess } = usePostMail();
  const { signUpInfo, setSignUpInfo } = useSignUpInfoStore();
  const { mutate: checkDuplicateUser, isPending: checkingDuplicateUser } =
    useCheckDuplicate(setIsDuplicateUser);

  const handleSubmitButtonClick = () => {
    checkDuplicateUser(email);
  };

  useEffect(() => {
    if (!isDuplicateUser) {
      mutate(email);
      setSignUpInfo({ ...signUpInfo, email });
    }
  }, [isDuplicateUser]);

  if (isPending || isSuccess || checkingDuplicateUser) return <Loader />;

  return (
    <StepsLayout
      title="Email"
      isNextStepAllowed={isValidEmail(email)}
      onNextStep={handleSubmitButtonClick}
      buttonContent="인증코드 전송"
    >
      <Input
        placeholder="이메일을 입력해주세요."
        value={email}
        theme={isInvalidMail(email) ? 'error' : 'default'}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      {isInvalidMail(email) && (
        <p className={styles.message({ theme: 'error' })}>
          잘못된 이메일 형식입니다.
        </p>
      )}
    </StepsLayout>
  );
}
