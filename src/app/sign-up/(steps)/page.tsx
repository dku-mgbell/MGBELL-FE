'use client';

import { ChangeEvent, Suspense, useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { OwnerImage, UserImage } from '@/assets/images/sign-up/image';
import StepsLayout from '@/components/layout/steps-layout/steps-layout';
import Loader from '@/components/loader/loader';
import { useAuthStore } from '@/hooks/stores/useAuthStore';
import { useSignUpInfoStore } from '@/hooks/stores/useSignUpInfoStore';
import { UserRole } from '@/types/user';
import { userStyles } from './styles.css';

function SignUpPageContent() {
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const { signUpInfo, setSignUpInfo } = useSignUpInfoStore();
  const route = useRouter();
  const searchParams = useSearchParams();
  const { OAuthState, setOAuthState } = useAuthStore();

  const handleButtonClick = (e: ChangeEvent<HTMLInputElement>) => {
    setUserRole(e.target.value as UserRole);
  };

  useEffect(() => {
    if (searchParams.get('oAuth')) {
      setOAuthState({ ...OAuthState, isOAuth: true });
    }
  }, [searchParams]);

  return (
    <StepsLayout
      title="어떤 목적으로 마감벨을 사용하시나요?"
      isNextStepAllowed={!!userRole}
      onNextStep={() => {
        route.push(OAuthState.isOAuth ? '/sign-up/info' : '/sign-up/email');
        setSignUpInfo({ ...signUpInfo, userRole });
      }}
    >
      <div className={userStyles.container}>
        <label className={userStyles.button}>
          <input
            type="radio"
            name="user-type"
            value="USER"
            onChange={handleButtonClick}
          />
          <Image
            className={userStyles.image}
            alt="user icon"
            src={UserImage.src}
            width={78}
            height={92}
          />
          <strong>일반 사용자</strong>
          <p>
            상품을 저렴하게
            <br />
            구입하고 싶어요!
          </p>
        </label>
        <label className={userStyles.button}>
          <input
            type="radio"
            name="user-type"
            value="OWNER"
            onChange={handleButtonClick}
            // disabled
          />
          <Image
            className={userStyles.image}
            alt="user icon"
            src={OwnerImage.src}
            width={92}
            height={93}
          />
          <strong>자영업자</strong>
          <p>
            남은 음식을
            <br />
            판매하고 싶어요!
          </p>
        </label>
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
