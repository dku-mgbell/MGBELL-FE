'use client';

import { useState } from 'react';
import Input from '@/components/input/input';
import HeaderLayout from '@/components/layout/header-layout/header-layout';
import StepsLayout from '@/components/layout/steps-layout/steps-layout';
import QuestionContainer from '@/components/question-container/question-container';
import { useResetPassword } from '@/hooks/query/user/useResetPassword';
import { useSendFindPasswordCode } from '@/hooks/query/user/useSendFindPasswordCode';
import { useVerifyFindPasswordCode } from '@/hooks/query/user/useVerifyFindPasswordCode';
import { isValidEmail, isValidPassword } from '@/utils/regex';
import * as styles from './styles.css';

export default function Page() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState({ value: '', valueCheck: '' });
  const [isMailSent, setIsMailSent] = useState(false);
  const [isCodeValid, setIsCodeValid] = useState(false);
  const [resetPasswordToken, setResetPasswordToken] = useState('');

  const isInvalidMail = (value: string) =>
    value.length > 0 && !isValidEmail(value);
  const isInvalidPassword = (value: string) =>
    value.length > 0 && !isValidPassword(value);
  const isInvalidPasswordCheck = (value: string) =>
    value.length > 0 && value !== password.value;

  const { mutate: sendFindPasswordCode } =
    useSendFindPasswordCode(setIsMailSent);
  const { mutate: verifyFindPasswordCode } = useVerifyFindPasswordCode(
    setIsCodeValid,
    setResetPasswordToken,
  );
  const { mutate: resetPassword } = useResetPassword();

  const handleNextButtonClick = () => {
    if (!isMailSent) {
      sendFindPasswordCode(email);
      return;
    }
    if (!isCodeValid) {
      verifyFindPasswordCode({ email, code });
      return;
    }
    if (resetPasswordToken.length) {
      resetPassword({
        email,
        token: resetPasswordToken,
        newPassword: password.value,
      });
    }
  };

  const handleNextButtonContent = (
    mailSent: boolean,
    codeValid: boolean,
  ): string => {
    if (!mailSent) return '인증코드 전송';
    if (!codeValid) return '인증코드 확인';
    if (codeValid) return '비밀번호 설정';
    return '';
  };

  const handleNextButtonAllowed = (
    mailSent: boolean,
    codeValid: boolean,
  ): boolean => {
    if (!mailSent) return isValidEmail(email);
    if (!codeValid) return code.length > 0;
    if (codeValid)
      return (
        password.value.length > 0 && password.value === password.valueCheck
      );
    return false;
  };

  return (
    <HeaderLayout title="비밀번호 찾기" previousPageLink="/login">
      <StepsLayout
        onNextStep={handleNextButtonClick}
        buttonContent={handleNextButtonContent(isMailSent, isCodeValid)}
        isNextStepAllowed={handleNextButtonAllowed(isMailSent, isCodeValid)}
      >
        <div className={styles.container}>
          <div>
            <QuestionContainer
              title="Email"
              desc="가입된 이메일로 인증 코드를 전송해드립니다."
              content={
                <Input
                  placeholder="가입된 이메일을 입력해주세요."
                  value={email}
                  disabled={isMailSent}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              }
            />
            {isInvalidMail(email) && (
              <p className={styles.message({ theme: 'error' })}>
                잘못된 이메일 형식입니다.
              </p>
            )}
          </div>
          {isMailSent && (
            <QuestionContainer
              title="인증코드 입력"
              content={
                <Input
                  value={code}
                  disabled={isCodeValid}
                  onChange={(e) => {
                    setCode(e.target.value);
                  }}
                  placeholder="인증코드를 입력해주세요"
                />
              }
            />
          )}

          {isCodeValid && (
            <>
              <QuestionContainer
                title="새 비밀번호"
                desc="영문, 특수문자, 숫자를 조합하여 8~16자로 입력해주세요."
                content={
                  <Input
                    name="newPassword"
                    type="password"
                    placeholder="비밀번호 입력"
                    value={password.value}
                    maxLength={16}
                    theme={
                      isInvalidPassword(password.value) ? 'error' : 'default'
                    }
                    onFocus={() => {
                      setPassword({ value: '', valueCheck: '' });
                    }}
                    onChange={(e) => {
                      setPassword({ value: e.target.value, valueCheck: '' });
                    }}
                  />
                }
              />

              {isValidPassword(password.value) && (
                <QuestionContainer
                  title="새 비밀번호 확인"
                  content={
                    <Input
                      name="newPasswordCheck"
                      type="password"
                      placeholder="비밀번호 확인"
                      maxLength={16}
                      value={password.valueCheck}
                      theme={
                        isInvalidPasswordCheck(password.valueCheck)
                          ? 'error'
                          : 'default'
                      }
                      onChange={(e) => {
                        setPassword({
                          ...password,
                          valueCheck: e.target.value,
                        });
                      }}
                    />
                  }
                />
              )}
            </>
          )}
        </div>
      </StepsLayout>
    </HeaderLayout>
  );
}
