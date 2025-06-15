import AppleIcon from '@/assets/svg/social/apple';
import GoogleIcon from '@/assets/svg/social/google';
import KakaoIcon from '@/assets/svg/social/kakao';
import NaverIcon from '@/assets/svg/social/naver';
import { colors } from '@/styles/constant';

export const loginButtonConfig = {
  KAKAO: {
    icon: <KakaoIcon />,
    text: '카카오로 로그인하기',
    borderColor: '#FAE200',
    textColor: '#000000',
    bgColor: '#FAE200',
    link: process.env.NEXT_PUBLIC_KAKAO_OAUTH!,
  },
  GOOGLE: {
    icon: <GoogleIcon />,
    text: '구글로 로그인하기',
    borderColor: colors.gray7,
    textColor: '#000000',
    bgColor: '#FFFFFF',
    link: process.env.NEXT_PUBLIC_GOOGLE_OAUTH!,
  },
  APPLE: {
    icon: <AppleIcon />,
    text: '애플로 로그인하기',
    borderColor: '#000000',
    textColor: '#FFFFFF',
    bgColor: '#000000',
    link: process.env.NEXT_PUBLIC_APPLE_OAUTH!,
  },
  NAVER: {
    icon: <NaverIcon />,
    text: '네이버로 로그인하기',
    borderColor: '#36AE3C',
    textColor: '#FFFFFF',
    bgColor: '#36AE3C',
    link: process.env.NEXT_PUBLIC_NAVER_OAUTH!,
  },
};
