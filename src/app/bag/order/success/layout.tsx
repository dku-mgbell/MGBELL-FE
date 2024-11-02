'use client';

import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import HeaderLayout from '@/components/layout/header-layout/header-layout';
import StepsLayout from '@/components/layout/steps-layout/steps-layout';

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <HeaderLayout title="" previousPageLink="/">
      <StepsLayout
        onNextStep={() => {
          router.push('/order');
        }}
        buttonContent="확인"
      >
        {children}
      </StepsLayout>
    </HeaderLayout>
  );
}
