import { OAuthProviderType } from '@/types/oauth';
import LoginButton from './login-button';
import { loginButtonConfig } from './login-button-config';

export default function LoginButtonContainer() {
  const socialLoginTypeList = Object.keys(
    loginButtonConfig,
  ) as Array<OAuthProviderType>;

  return (
    <div className="flex flex-col gap-[12px]">
      {socialLoginTypeList.map((type) => (
        <LoginButton key={type} type={type} />
      ))}
    </div>
  );
}
