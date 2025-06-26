'use client';

import StepsLayout from '@/components/layout/steps-layout';
import TextField from '@/components/ui/text-field';
import { usePostOAuthLogin } from '@/hooks/query/auth/oauth/usePostOAuthLogin';
import { isValidNickname } from '@/utils/regex';
import { useSignUpStore } from '../_/sign-up-store';

export default function Page() {
  const { signUpInfo, updateSignUpInfo } = useSignUpStore();
  const signUpRedirectPage =
    signUpInfo.userRole === 'CUSTOMER' ? '/sign-up/success' : '/register/store';
  const { mutate: postOAuthLogin } = usePostOAuthLogin(signUpRedirectPage);

  const handleNextButtonClick = () => {
    postOAuthLogin(signUpInfo);
  };

  return (
    <StepsLayout
      title="닉네임을 입력해주세요"
      isNextButtonEnabled={isValidNickname(signUpInfo.nickName)}
      onNextButtonClick={handleNextButtonClick}
      nextButtonText="다음"
    >
      <TextField
        placeholder="닉네임을 입력해주세요"
        value={signUpInfo.nickName}
        onChange={(e) => updateSignUpInfo('nickName', e.target.value)}
        maxLength={16}
      />
      <p className="text-b3 pl-[10px] text-gray3">
        2~16자의 영어 또는 숫자 또는 한글로 구성
      </p>
    </StepsLayout>
  );
}
