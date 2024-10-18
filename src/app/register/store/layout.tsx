import HeaderLayout from '@/components/layout/header-layout/header-layout';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <HeaderLayout title="매장 등록">{children}</HeaderLayout>;
}
