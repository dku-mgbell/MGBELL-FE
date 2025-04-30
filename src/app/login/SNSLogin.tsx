import Link from 'next/link';
import GoogleIcon from '@/assets/svg/social/google';
import KakaoIcon from '@/assets/svg/social/kakao';
import NaverIcon from '@/assets/svg/social/naver';
import { styles } from './styles.css';

export default function SNSLogin() {
  return (
    <div className={styles.buttonContainer}>
      <Link href={process.env.NEXT_PUBLIC_KAKAO_OAUTH!}>
        <KakaoIcon />
      </Link>
      <Link href={process.env.NEXT_PUBLIC_NAVER_OAUTH!}>
        <NaverIcon />
      </Link>
      <Link href={process.env.NEXT_PUBLIC_GOOGLE_OAUTH!}>
        <GoogleIcon />
      </Link>
    </div>
  );
}
