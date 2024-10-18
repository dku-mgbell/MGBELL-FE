'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import StepsLayout from '@/components/layout/steps-layout/steps-layout';
import RegisterStoreImage from '@/assets/images/store/register-store.png';
import * as styles from './styles.css';

export default function Page() {
  const route = useRouter();
  return (
    <StepsLayout
      onNextStep={() => route.push('/register/store/info')}
      buttonContent="매장 등록하기"
    >
      <div className={styles.container}>
        <Image
          className={styles.image}
          src={RegisterStoreImage.src}
          width={RegisterStoreImage.width}
          height={RegisterStoreImage.height}
          alt="매장 등록 이미지"
        />
        <h3 className={styles.message}>
          매장 등록은 <br /> 5분 정도 소요돼요!
        </h3>
        <p className={styles.messageDetail}>
          마이페이지에서 추후에 수정 가능합니다.
        </p>
      </div>
    </StepsLayout>
  );
}
