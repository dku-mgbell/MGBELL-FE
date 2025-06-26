'use client';

import { Suspense } from 'react';
import HeaderLayout from '@/components/layout/header-layout';
import { Button } from '@/components/ui/button';
import getOAuthLink from '@/utils/getOAuthLink';
import DeleteContent from './content';

export default function Page() {
  const handleDeleteOAuthAccount = () => {
    window.location.href = getOAuthLink('KAKAO', { action: 'delete' });
  };

  return (
    <HeaderLayout title="계정삭제" previousPage="/login">
      <div className="flex flex-col gap-4 mt-[100px]">
        <p>계정을 삭제하시겠습니까?</p>
        <Button onClick={handleDeleteOAuthAccount} variant="gray-outline">
          삭제
        </Button>
        <Suspense fallback={<div>로딩중...</div>}>
          <DeleteContent OAuthProvider="KAKAO" />
        </Suspense>
      </div>
    </HeaderLayout>
  );
}
