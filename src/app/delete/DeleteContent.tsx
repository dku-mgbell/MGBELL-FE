'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { usePostKakaoAccessToken } from '@/hooks/query/auth/oauth/usePostKakaoAccessToken';

export default function DeleteContent() {
  const { mutate: postKakaoAccessToken } = usePostKakaoAccessToken({
    action: 'delete',
  });
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    if (code) {
      postKakaoAccessToken(code);
    }
  }, [code, postKakaoAccessToken]);

  return null;
}
