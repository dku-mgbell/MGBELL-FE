import LoginButton from './components/login-button';
import { loginButtonConfig } from './components/login-button-list';

export default function LoginButtonContainer() {
  const socialLoginTypeList = Object.keys(loginButtonConfig) as Array<
    keyof typeof loginButtonConfig
  >;

  return (
    <div className="flex flex-col gap-[12px]">
      {socialLoginTypeList.map((type) => (
        <LoginButton key={type} type={type} />
      ))}
    </div>
  );
}
