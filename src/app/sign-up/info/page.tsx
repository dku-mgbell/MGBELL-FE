'use client';

import { useRouter } from 'next/navigation';
import StepsLayout from '@/components/layout/steps-layout';
import TextField from '@/components/ui/text-field';
import { isValidNickname } from '@/utils/regex';
import { useSignUpStore } from '../_/sign-up-store';

export default function Page() {
  const { signUpInfo, updateSignUpInfo } = useSignUpStore();
  const router = useRouter();

  const handleNextButtonClick = () => {
    const nextPage =
      signUpInfo.userRole === 'USER' ? '/sign-up/success' : '/register/store';
    router.push(nextPage);
  };

  return (
    <StepsLayout
      title="닉네임을 입력해주세요"
      isNextButtonEnabled={isValidNickname(signUpInfo.nickname)}
      onNextButtonClick={handleNextButtonClick}
      nextButtonText="회원가입"
    >
      <TextField
        placeholder="닉네임을 입력해주세요"
        value={signUpInfo.nickname}
        onChange={(e) => updateSignUpInfo('nickname', e.target.value)}
        maxLength={16}
      />
      <p className="text-b3 pl-[10px] text-gray3">
        2~16자의 영어 또는 숫자 또는 한글로 구성
      </p>
    </StepsLayout>
  );
}
