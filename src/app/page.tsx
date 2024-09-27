'use client';

import { MainPageView } from '@/types/pageView';
import { useAuth } from '@/hooks/useAuth';
import FilterIcon from '../assets/svg/FilterIcon';
import LocationMarkerIcon from '../assets/svg/LocationMarkerIcon';
import SearchIcon from '../assets/svg/SearchIcon';
import { container, styles } from './styles.css';
import Content from './(components)/_Content';

export default function Home({
  searchParams: { viewType },
}: {
  searchParams: { viewType: MainPageView };
}) {
  const { logout } = useAuth();

  return (
    <section className={container({ color: viewType })}>
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
              placeholder="당신의 맛집을 찾아보세요!"
            />
          </div>
          <button type="button" className={styles.filterButton}>
            <FilterIcon />
          </button>
        </div>
      </header>
      <button type="button" onClick={logout}>
        로그아웃
      </button>
      <section className={styles.contentWrapper}>
        <Content viewType={viewType} />
      </section>
    </section>
  );
}
