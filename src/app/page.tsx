'use client';

import { useAuth } from '@/hooks/useAuth';
import FilterIcon from '../assets/svg/FilterIcon';
import LocationMarkerIcon from '../assets/svg/LocationMarkerIcon';
import SearchIcon from '../assets/svg/SearchIcon';
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
        <div className={styles.location}>
          <LocationMarkerIcon />
          위치를 설정해주세요!
        </div>
        <div className={styles.search}>
          <div className={styles.searchInputContainer}>
            <SearchIcon />
            <input
              className={styles.searchInput}
              placeholder="가게의 이름을 검색해보세요!"
            />
          </div>
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
