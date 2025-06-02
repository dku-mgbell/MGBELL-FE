'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { loginButtonConfig } from './login-button-config';

export default function LoginButton({
  type,
}: {
  type: keyof typeof loginButtonConfig;
}) {
  const router = useRouter();
  const config = loginButtonConfig[type];
  return (
    <Button
      className="relative flex border-[1px]"
      style={{
        backgroundColor: config.bgColor,
        color: config.textColor,
        borderColor: config.borderColor,
      }}
      onClick={() => router.push(config.link)}
    >
      <span className="absolute left-[20px]">{config.icon}</span>
      {config.text}
    </Button>
  );
}
