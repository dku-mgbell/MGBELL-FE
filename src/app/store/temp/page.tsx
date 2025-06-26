'use client';

import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

export default function Page() {
  const { logout } = useAuth();

  return (
    <div className="w-full flex flex-col items-center justify-center h-screen">
      <div className="absolute-center">
        <h1>준비 중입니다.</h1>
        <Button onClick={() => logout()}>로그아웃</Button>
      </div>
    </div>
  );
}
