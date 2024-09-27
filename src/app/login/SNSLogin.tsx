'use client';

import Image from 'next/image';
import { Google, Kakao, Naver } from '@/assets/images/SNS/SNS-Image';
import { styles } from './styles.css';

export default function SNSLogin() {
  return (
    <div className={styles.buttonContainer}>
      <Image src={Kakao.src} alt="SNS Login Logo" width={45} height={45} />
      <Image src={Naver.src} alt="SNS Login Logo" width={45} height={45} />
      <Image src={Google.src} alt="SNS Login Logo" width={45} height={45} />
    </div>
  );
}
