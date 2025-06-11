import { Suspense } from 'react';
import { cn } from '@/styles/cn';
import MainHeader from './_components/header';
import InitialSetter from './initial-setter';
import SkeletonStoreList from './store-list/skeleton-store-list';
import StoreList from './store-list/store-list';
import * as styles from './styles.css';
import { IndexPageSearchParams } from './types';

export default function Page({
  searchParams,
}: {
  searchParams: IndexPageSearchParams;
}) {
  return (
    <>
      <InitialSetter searchParams={searchParams} />
      <MainHeader />
      {!searchParams.isNewUser && (
        <section className={cn(styles.container, 'pwa-layout')}>
          <section className={styles.contentWrapper}>
            {/* <SortContainer state={searchParams.sort} /> */}
            <Suspense fallback={<SkeletonStoreList />}>
              <StoreList />
            </Suspense>
          </section>
        </section>
      )}
    </>
  );
}

// <button type="button" className={styles.filterButton}>
// <FilterIcon />
// </button>
