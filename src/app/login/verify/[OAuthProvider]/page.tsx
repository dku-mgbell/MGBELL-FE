'use client';

import { Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Loader from '@/components/loader/loader';
import { usePostOAuthCode } from '@/hooks/query/auth/oauth/usePostOAuthCode';
import { OAuthProviderType } from '@/types/login';
import { useAuth } from '@/hooks/useAuth';

function VerifyContent({
  OAuthProvider,
}: {
  OAuthProvider: OAuthProviderType;
}) {
  const searchParams = useSearchParams();
  const { logout } = useAuth();
  const code = searchParams.get('code');
  const state = searchParams.get('state');

  const { mutate: postOAuthCode } = usePostOAuthCode({
    OAuthProvider,
    state,
  });

  useEffect(() => {
    // 로그인 전 로그아웃 처리
    logout({ withoutRedirect: true });
  }, []);

  useEffect(() => {
    if (code && OAuthProvider) {
      postOAuthCode(code);
    }
  }, [code, OAuthProvider]);

  return <Loader />;
}

export default function Page({
  params,
}: {
  params: { OAuthProvider: OAuthProviderType };
}) {
  return (
    <Suspense>
      <VerifyContent OAuthProvider={params.OAuthProvider} />
    </Suspense>
  );
}
