'use client';

import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import HeaderLayout from '@/components/layout/header-layout/header-layout';

export default function Layout({ children }: { children: ReactNode }) {
  const route = useRouter();
  return (
    <HeaderLayout
      title="주문하기"
      previousButtonClickEvent={() => {
        route.back();
      }}
    >
      {children}
    </HeaderLayout>
  );
}
