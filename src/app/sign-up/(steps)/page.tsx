'use client';

import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import { UserType } from '@/types/user';
import { OwnerImage, UserImage } from '@/assets/images/sign-up/image';
import { useRouter } from 'next/navigation';
import SignUpLayout from '../(layout)/SignUpLayout';
import { userStyles } from './styles.css';

export default function Page() {
  const [userType, setUserType] = useState<UserType | null>(null);

  const handleButtonClick = (e: ChangeEvent<HTMLInputElement>) => {
    setUserType(e.target.value as UserType);
  };

  const route = useRouter();

  return (
    <SignUpLayout
      title="어떤 목적으로 마감벨을 사용하시나요?"
      isNextStepAllowed={!!userType}
      onNextStep={() => {
        route.push('/sign-up/email');
      }}
    >
      <div className={userStyles.container}>
        <label className={userStyles.button}>
          <input
            type="radio"
            name="user-type"
            value="ROLE_USER"
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
            value="ROLE_OWNER"
            onChange={handleButtonClick}
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
    </SignUpLayout>
  );
}
