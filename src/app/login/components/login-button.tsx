'use client';

import { Button } from '@/components/ui/button';
import { OAuthProviderType } from '@/types/oauth';
import { loginButtonConfig } from './login-button-config';

export default function LoginButton({ type }: { type: OAuthProviderType }) {
  const config = loginButtonConfig[type];
  const handleButtonClick = () => {
    window.location.href = config.link;
  };

  return (
    <Button
      className="relative flex border-[1px]"
      style={{
        backgroundColor: config.bgColor,
        color: config.textColor,
        borderColor: config.borderColor,
      }}
      onClick={handleButtonClick}
    >
      <span className="absolute left-[20px]">{config.icon}</span>
      {config.text}
    </Button>
  );
}
