'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import RegisterStoreImage from '@/assets/images/store/register-store.png';
import StepsLayout from '@/components/layout/steps-layout/steps-layout';
import * as styles from './styles.css';

export default function Page() {
  const route = useRouter();
  return (
    <StepsLayout
      onNextStep={() => route.push('/register/store/info')}
      buttonContent="매장 등록하기"
    >
      <div className="h-[calc(100dvh-100px)] flex flex-col items-center justify-center gap-[30px]">
        <Image
          className="bg-cover"
          src={RegisterStoreImage.src}
          width={RegisterStoreImage.width}
          height={RegisterStoreImage.height}
          alt="매장 등록 이미지"
        />
        <h3 className={styles.message}>
          매장 등록은 <br /> 5분 정도 소요돼요!
        </h3>
      </div>
    </StepsLayout>
  );
}
