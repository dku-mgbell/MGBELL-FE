'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { usePostOAuthCode } from '@/hooks/query/auth/oauth/usePostOAuthCode';
import { OAuthProviderType } from '@/types/login';

export default function DeleteContent({
  OAuthProvider,
}: {
  OAuthProvider: OAuthProviderType;
}) {
  const { mutate: postOAuthCode } = usePostOAuthCode({
    action: 'delete',
    OAuthProvider,
  });
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    if (code) {
      postOAuthCode(code);
    }
  }, [code, postOAuthCode]);

  return null;
}
