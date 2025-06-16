'use client';

import { Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Loader from '@/components/loader/loader';
import { usePostKakaoAccessToken } from '@/hooks/query/auth/oauth/usePostKakaoAccessToken';

function VerifyContent() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const providerType = searchParams.get('type');
  const { mutate: postKakaoAccessToken } = usePostKakaoAccessToken();

  useEffect(() => {
    if (code && providerType) {
      postKakaoAccessToken(code);
    }
  }, [code, providerType]);

  return <Loader />;
}

export default function Page() {
  return (
    <Suspense>
      <VerifyContent />
    </Suspense>
  );
}
