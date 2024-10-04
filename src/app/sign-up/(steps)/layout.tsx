'use client';

import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import HeaderLayout from '@/components/layout/header-layout/header-layout';
import {
  signUpInfoDefaultValue,
  useSignUpInfoStore,
} from '@/hooks/stores/useSignUpInfoStore';

export default function Layout({ children }: { children: ReactNode }) {
  const route = useRouter();
  const { signUpInfo } = useSignUpInfoStore();
  useEffect(() => {
    if (signUpInfo === signUpInfoDefaultValue) {
      route.push('/sign-up');
    }
  }, []);
  return (
    <HeaderLayout title="회원가입" previousPageLink="/login">
      {children}
    </HeaderLayout>
  );
}
