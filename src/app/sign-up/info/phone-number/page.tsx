'use client';

import StepsLayout from '@/components/layout/steps-layout';
import TextField from '@/components/ui/text-field';
import { usePostOAuthLogin } from '@/hooks/query/user/usePostOAuthLogin';
import { isValidPhoneNumber } from '@/utils/regex';
import { useSignUpStore } from '../../_/sign-up-store';

export default function Page() {
  const { signUpInfo, updateSignUpInfo } = useSignUpStore();
  const signUpRedirectPage =
    signUpInfo.userRole === 'CUSTOMER' ? '/sign-up/success' : '/register/store';
  const { mutate: postOAuthLogin } = usePostOAuthLogin(signUpRedirectPage);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSignUpInfo('phoneNumber', e.target.value);
  };

  const handleNextButtonClick = () => {
    postOAuthLogin(signUpInfo);
  };

  return (
    <StepsLayout
      title="휴대폰번호를 입력해주세요"
      isNextButtonEnabled={isValidPhoneNumber(signUpInfo.phoneNumber ?? '')}
      onNextButtonClick={handleNextButtonClick}
      nextButtonText="회원가입"
    >
      <TextField
        type="number"
        placeholder="휴대폰번호 입력해주세요"
        value={signUpInfo.phoneNumber}
        onChange={handleInputChange}
      />
    </StepsLayout>
  );
}
