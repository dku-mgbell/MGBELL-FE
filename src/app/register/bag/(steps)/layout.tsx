'use client';

import HeaderLayout from '@/components/layout/header-layout/header-layout';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HeaderLayout title="마감백 설정" previousPageLink="/settings">
      {children}
    </HeaderLayout>
  );
}
