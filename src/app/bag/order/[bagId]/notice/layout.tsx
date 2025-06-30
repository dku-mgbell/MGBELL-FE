'use client';

import { useRouter } from 'next/navigation';
import HeaderLayout from '@/components/layout/header-layout';

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <HeaderLayout
      title="안내사항"
      previousButtonClickEvent={() => {
        router.back();
      }}
    >
      {children}
    </HeaderLayout>
  );
}
