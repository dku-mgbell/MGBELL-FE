import { ReactNode } from 'react';
import HeaderLayout from '@/components/layout/header-layout';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HeaderLayout title="회원가입" previousPageLink="/login">
      {children}
    </HeaderLayout>
  );
}
