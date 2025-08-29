'use client';

import Navigation from '@/components/navigation/navigation';
import { adminNavigationTabList } from '@/components/navigation/navigation-tab-list';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Navigation navigationTabList={adminNavigationTabList} />
    </>
  );
}
