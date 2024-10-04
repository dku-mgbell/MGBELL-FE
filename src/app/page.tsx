'use client';

import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import SearchInput from '@/components/input/search/search-input';
import FilterIcon from '../assets/svg/FilterIcon';
import LocationMarkerIcon from '../assets/svg/LocationMarkerIcon';
import { container, styles } from './styles.css';
import SortContainer from './(components)/sort-container/sort-container';
import StoreList from './(components)/store-list/store-list';

export default function Page({
  searchParams: { sort },
}: {
  searchParams: { sort: string };
}) {
  const { logout } = useAuth();

  return (
    <section className={container()}>
      <header className={styles.header}>
        <Link href="location" className={styles.location}>
          <LocationMarkerIcon />
          위치를 설정해주세요!
        </Link>
        <div className={styles.search}>
          <SearchInput placeholder="가게의 이름을 검색해보세요!" />
          <button type="button" className={styles.filterButton}>
            <FilterIcon />
          </button>
        </div>
      </header>
      <button
        type="button"
        onClick={logout}
        style={{ position: 'absolute', right: 0 }}
      >
        로그아웃
      </button>
      <section className={styles.contentWrapper}>
        <SortContainer state={sort} />
        <StoreList />
      </section>
    </section>
  );
}
