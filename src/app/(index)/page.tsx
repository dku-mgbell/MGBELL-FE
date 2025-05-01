import { Suspense } from 'react';
import SearchInput from '@/components/input/search/search-input';
import { cn } from '@/styles/cn';
import AdressEnterLink from './address-enter-link';
import InitialSetter from './initial-setter';
import SortContainer from './sort-container/sort-container';
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
      {!searchParams.isNewUser && (
        <section className={cn(styles.container, 'pwa-layout')}>
          <header className={styles.header}>
            <div className={styles.headerContent}>
              <AdressEnterLink />
              <div className={styles.search}>
                <SearchInput placeholder="마감벨 입점 매장을 검색해보세요!" />
              </div>
            </div>
          </header>
          <section className={styles.contentWrapper}>
            <SortContainer state={searchParams.sort} />
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
