'use client';

import { ReactNode } from 'react';
import HeaderLayout from '@/components/layout/header-layout/header-layout';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HeaderLayout title="마감백 설정" previousPageLink="/settings">
      {children}
    </HeaderLayout>
  );
}
