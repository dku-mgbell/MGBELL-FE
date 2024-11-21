'use client';

import { useEffect, useState } from 'react';
import Input from '@/components/input/input';
import { useVerifyCode } from '@/hooks/query/sign-up/useVerifyCode';
import { usePostMail } from '@/hooks/query/sign-up/usePostMail';
import { useSignUpInfoStore } from '@/hooks/stores/useSignUpInfoStore';
import StepsLayout from '@/components/layout/steps-layout/steps-layout';
import Loader from '@/components/loader/loader';
import { styles } from '../styles.css';
import { verifyStyles } from './styles.css';

export default function Page() {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const [isSentMailAgain, setIsSentMailAgain] = useState(false);
  const isInvalidCode = (value: string) => value.length === 0;
  const {
    mutate,
    data: verificationResponse,
    isPending: isVerifying,
    isSuccess,
  } = useVerifyCode();
  const { mutate: sendMail, isPending } = usePostMail();
  const { signUpInfo } = useSignUpInfoStore();
  const handleSubmitcode = () => {
    mutate(code);
  };

  const handleRetryButtonClick = () => {
    sendMail(signUpInfo.email!);
    setIsSentMailAgain(true);
    setTimeout(() => {
      setIsSentMailAgain(false);
    }, 3000);
  };

  useEffect(() => {
    if (verificationResponse && !verificationResponse?.valid) {
      setMessage('인증코드를 다시 확인해주세요');
    }
  }, [verificationResponse]);

  if (isPending || isSuccess || isVerifying) return <Loader />;

  return (
    <StepsLayout
      title="인증코드"
      isNextStepAllowed={!isInvalidCode(code)}
      onNextStep={handleSubmitcode}
      buttonContent="확인"
    >
      <Input
        placeholder="메일로 보낸 인증코드를 입력해주세요."
        value={code}
        onChange={(e) => {
          setCode(e.target.value);
        }}
      />
      <p className={styles.message({ theme: 'error' })}>{message}</p>
      <div className={verifyStyles.retryButtonContainer}>
        {isSentMailAgain ? (
          <p className={styles.message({ theme: 'default' })}>전송 완료</p>
        ) : (
          <button
            type="button"
            className={verifyStyles.retryButton}
            onClick={handleRetryButtonClick}
          >
            인증코드를 받지 못하셨나요? 재전송하기
          </button>
        )}
      </div>
    </StepsLayout>
  );
}
