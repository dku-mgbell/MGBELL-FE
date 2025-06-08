'use client';

import { ChangeEvent, Suspense } from 'react';
import { useSignUpStore } from '@/app/sign-up/_/sign-up-store';
import StepsLayout from '@/components/layout/steps-layout';
import Loader from '@/components/loader/loader';
import { UserButton } from './user-button';
import { buttonConfig } from './user-button/button-config';

function SignUpPageContent() {
  const { updateSignUpInfo, signUpInfo } = useSignUpStore();

  const handleButtonClick = (e: ChangeEvent<HTMLInputElement>) => {
    updateSignUpInfo('userRole', e.target.value);
  };

  return (
    <StepsLayout
      title="사용자 유형을 선택해주세요"
      isNextButtonEnabled={signUpInfo.userRole !== null}
      nextPage="/sign-up/info"
    >
      <div className="flex w-full gap-[18px]">
        {Object.values(buttonConfig).map((config) => (
          <UserButton.Label key={config.value}>
            <UserButton.CheckBoxIcon />
            <UserButton.Input
              value={config.value}
              onChange={handleButtonClick}
              checked={signUpInfo.userRole === config.value}
            />
            <UserButton.Character image={config.image} label={config.label} />
            <UserButton.LabelText
              label={config.label}
              description={config.description}
            />
          </UserButton.Label>
        ))}
      </div>
    </StepsLayout>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<Loader />}>
      <SignUpPageContent />
    </Suspense>
  );
}
