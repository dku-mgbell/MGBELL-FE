'use client';

import { ReactNode, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import HeaderLayout from '@/components/layout/header-layout/header-layout';
import StepsLayout from '@/components/layout/steps-layout/steps-layout';
import Loader from '@/components/loader/loader';

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
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </StepsLayout>
    </HeaderLayout>
  );
}
