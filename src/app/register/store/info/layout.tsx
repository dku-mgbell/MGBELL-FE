import { ReactNode } from 'react';
import HeaderLayout from '@/components/layout/header-layout/header-layout';

export default function Layout({ children }: { children: ReactNode }) {
  return <HeaderLayout title="매장 등록">{children}</HeaderLayout>;
}
