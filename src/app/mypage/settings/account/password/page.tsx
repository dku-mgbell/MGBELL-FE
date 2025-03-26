'use client';

import { ChangeEvent, useState } from 'react';
import Input from '@/components/input/input';
import HeaderLayout from '@/components/layout/header-layout/header-layout';
import StepsLayout from '@/components/layout/steps-layout/steps-layout';
import QuestionContainer from '@/components/question-container/question-container';
import { useChangePassword } from '@/hooks/query/user/useChangePassword';
import { isValidPassword } from '@/utils/regex';
import * as styles from './styles.css';

export default function Page() {
  const [input, setInput] = useState({
    password: {
      value: '',
      error: false,
    },
    newPassword: {
      value: '',
      error: false,
    },
    newPasswordCheck: {
      value: '',
      error: false,
    },
  });
  const { mutate: postPasswordChange } = useChangePassword();

  const isInvalidPassword = (value: string) =>
    value.length > 0 && !isValidPassword(value);

  const isInvalidPasswordCheck = (value: string) =>
    value.length > 0 && value !== input.newPassword.value;

  const handleInputEvent = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target as {
      value: string;
      name: 'password' | 'newPassword' | 'newPasswordCheck';
    };

    setInput({ ...input, [name]: { ...input[name], value } });
  };

  const isNextStepAllowed =
    input.newPassword.value.length > 0 &&
    input.password.value.length > 0 &&
    input.newPassword.value === input.newPasswordCheck.value;

  const handleNextButtonClick = () => {
    postPasswordChange({
      oldPassword: input.password.value,
      newPassword: input.newPassword.value,
    });
  };

  return (
    <HeaderLayout
      title="비밀번호 변경"
      previousPageLink="/mypage/settings/account"
    >
      <StepsLayout
        onNextStep={handleNextButtonClick}
        isNextStepAllowed={isNextStepAllowed}
        buttonContent="변경하기"
      >
        <form className={styles.container}>
          <QuestionContainer
            title="현재 비밀번호"
            content={
              <Input
                name="password"
                type="password"
                placeholder="현재 비밀번호를 입력해주세요."
                value={input.password.value}
                onChange={handleInputEvent}
                theme={input.password.error ? 'error' : 'default'}
              />
            }
          />

          <QuestionContainer
            title="새 비밀번호"
            desc="영문, 특수문자, 숫자를 조합하여 8~16자로 입력해주세요."
            content={
              <Input
                name="newPassword"
                type="password"
                placeholder="비밀번호 입력"
                value={input.newPassword.value}
                maxLength={16}
                theme={
                  isInvalidPassword(input.newPassword.value)
                    ? 'error'
                    : 'default'
                }
                onFocus={() => {
                  setInput({
                    ...input,
                    newPassword: { ...input.newPassword, value: '' },
                    newPasswordCheck: { ...input.newPasswordCheck, value: '' },
                  });
                }}
                onChange={handleInputEvent}
              />
            }
          />

          {isValidPassword(input.newPassword.value) && (
            <QuestionContainer
              title="새 비밀번호 확인"
              content={
                <Input
                  name="newPasswordCheck"
                  type="password"
                  placeholder="비밀번호 확인"
                  maxLength={16}
                  value={input.newPasswordCheck.value}
                  theme={
                    isInvalidPasswordCheck(input.newPasswordCheck.value)
                      ? 'error'
                      : 'default'
                  }
                  onChange={handleInputEvent}
                />
              }
            />
          )}
        </form>
      </StepsLayout>
    </HeaderLayout>
  );
}
