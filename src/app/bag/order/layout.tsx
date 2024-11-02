'use client';

import { ReactNode } from 'react';
import { useParams } from 'next/navigation';
import HeaderLayout from '@/components/layout/header-layout/header-layout';

export default function Layout({ children }: { children: ReactNode }) {
  const { id } = useParams();
  return (
    <HeaderLayout title="주문하기" previousPageLink={`/bag/${id}`}>
      {children}
    </HeaderLayout>
  );
}
