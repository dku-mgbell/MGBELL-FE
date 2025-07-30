import { OAuthProviderType } from '@/types/oauth';
import AppleIcon from './apple';
import GoogleIcon from './google';
import KakaoIcon from './kakao';
import NaverIcon from './naver';

export default function SocialIcon({
  size = 30,
  provider,
  color,
}: {
  size?: number;
  provider?: OAuthProviderType;
  color?: string;
}) {
  if (!provider) return <span />;

  const Component = {
    GOOGLE: GoogleIcon,
    APPLE: AppleIcon,
    KAKAO: KakaoIcon,
    NAVER: NaverIcon,
  }[provider];

  return <Component size={size} color={color} />;
}
