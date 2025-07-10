'use client';

import { useRouter } from 'next/navigation';
import HeaderLayout from '@/components/layout/header-layout';

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <HeaderLayout
      title="리뷰쓰기"
      previousButtonClickEvent={() => router.back()}
    >
      {children}
    </HeaderLayout>
  );
}
