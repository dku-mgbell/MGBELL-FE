'use client';

import { Suspense } from 'react';
import { useParams } from 'next/navigation';
import { useAuthStore } from '@/hooks/stores/useAuthStore';
import Header from './(componets)/header';
import SkeletonContent from './(componets)/skeleton-content';
import BagDetailContent from './bag-detail-content';
import * as styles from './styles.css';

export default function Page() {
  const params = useParams();
  const bagId = Number(params.id);
  const { isLoggedIn } = useAuthStore();

  return (
    <div className={styles.container}>
      <Header />
      <Suspense fallback={<SkeletonContent />}>
        <BagDetailContent bagId={bagId} isLoggedIn={isLoggedIn ?? false} />
      </Suspense>
    </div>
  );
}
