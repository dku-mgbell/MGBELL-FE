'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Google, Kakao, Naver } from '@/assets/images/SNS/SNS-Image';
import { styles } from './styles.css';

export default function SNSLogin() {
  return (
    <div className={styles.buttonContainer}>
      <Link href={process.env.NEXT_PUBLIC_KAKAO_OAUTH!}>
        <Image src={Kakao.src} alt="SNS Login Logo" width={45} height={45} />
      </Link>
      <Link href={process.env.NEXT_PUBLIC_NAVER_OAUTH!}>
        <Image src={Naver.src} alt="SNS Login Logo" width={45} height={45} />
      </Link>
      <Link href={process.env.NEXT_PUBLIC_GOOGLE_OAUTH!}>
        <Image src={Google.src} alt="SNS Login Logo" width={45} height={45} />
      </Link>
    </div>
  );
}
