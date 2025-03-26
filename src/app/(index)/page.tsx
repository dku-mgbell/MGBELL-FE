import SearchInput from '@/components/input/search/search-input';
import { cn } from '@/styles/cn';
import AdressEnterLink from './address-enter-link';
import InitialSetter from './initial-setter';
import SortContainer from './sort-container/sort-container';
import StoreList from './store-list/store-list';
import { container, styles } from './styles.css';
import { IndexPageSearchParams } from './types';

export default function Page({
  searchParams,
}: {
  searchParams: IndexPageSearchParams;
}) {
  return (
    !searchParams.isNewUser && (
      <section className={cn(container, 'pwa-layout')}>
        <InitialSetter searchParams={searchParams} />
        <header className={styles.header}>
          <AdressEnterLink />
          <div className={styles.search}>
            <SearchInput placeholder="마감벨 입점 매장을 검색해보세요!" />
          </div>
        </header>
        <section className={styles.contentWrapper}>
          <SortContainer state={searchParams.sort} />
          <StoreList />
        </section>
      </section>
    )
  );
}

// <button type="button" className={styles.filterButton}>
// <FilterIcon />
// </button>
