import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { usePostOAuthLogin } from '@/hooks/query/auth/oauth/usePostOAuthLogin';
import BottomSheet from '@/components/bottom-sheet';
import { useSignUpStore } from '../../_/sign-up-store';
import AgreementItem from './agreement-item';

export default function AgreementBottomSheet({
  setOpen,
  isOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}) {
  const { signUpInfo } = useSignUpStore();
  const signUpRedirectPage =
    signUpInfo.userRole === 'CUSTOMER' ? '/sign-up/success' : '/register/store';
  const { mutate: postOAuthLogin } = usePostOAuthLogin(signUpRedirectPage);
  const [checkedState, setCheckedState] = useState({
    privacy: false,
    terms: false,
  });
  const isAllChecked = checkedState.privacy && checkedState.terms;

  const handleSignUpButtonClick = () => {
    postOAuthLogin(signUpInfo);
  };

  const handleAllCheckedChange = () => {
    setCheckedState({
      privacy: !isAllChecked,
      terms: !isAllChecked,
    });
  };

  const handleAgreementItemChange = (key: keyof typeof checkedState) => {
    setCheckedState({
      ...checkedState,
      [key]: !checkedState[key],
    });
  };

  return (
    <BottomSheet isOpen={isOpen} setOpen={setOpen} height={280}>
      <div className="flex flex-col px-[20px] justify-between h-full pb-[calc(env(safe-area-inset-bottom)+16px)]">
        <div className="flex flex-col gap-[16px]">
          <AgreementItem
            label="전체 동의"
            isChecked={isAllChecked}
            onChange={handleAllCheckedChange}
          />
          <hr className="border-gray8" />
          <AgreementItem
            label="(필수) 개인정보 처리 방침"
            isChecked={checkedState.privacy}
            onChange={() => handleAgreementItemChange('privacy')}
            moreContentUrl="https://cake-innocent-6a8.notion.site/225493b7c9c6802abd7dd2613ca239ea?source=copy_link"
          />
          <AgreementItem
            label={`(필수) 이용약관(${
              signUpInfo.userRole === 'CUSTOMER'
                ? '일반회원용'
                : '공급자 회원용'
            })`}
            isChecked={checkedState.terms}
            onChange={() => handleAgreementItemChange('terms')}
            moreContentUrl={
              signUpInfo.userRole === 'CUSTOMER'
                ? 'https://cake-innocent-6a8.notion.site/225493b7c9c68097b3b0ff5c4e7a8068?source=copy_link'
                : 'https://cake-innocent-6a8.notion.site/225493b7c9c6803bbea2f29412c137a4?source=copy_link'
            }
          />
        </div>
        <Button onClick={handleSignUpButtonClick} disabled={!isAllChecked}>
          회원가입
        </Button>
      </div>
    </BottomSheet>
  );
}
