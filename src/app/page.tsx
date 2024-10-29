'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import SearchInput from '@/components/input/search/search-input';
import FilterIcon from '../assets/svg/FilterIcon';
import LocationMarkerIcon from '../assets/svg/LocationMarkerIcon';
import { container, styles } from './styles.css';
import SortContainer from './(components)/sort-container/sort-container';
import StoreList from './(components)/store-list/store-list';

export default function Page({
  searchParams: { sort, accessToken, isNewUser },
}: {
  searchParams: { sort: string; accessToken: string; isNewUser: string };
}) {
  const { setToken, oAuthLogin, logout } = useAuth();
  const route = useRouter();

  useEffect(() => {
    if (isNewUser === 'true') {
      route.push('/sign-up?oAuth=true');
      setToken({ accessToken });
    } else {
      oAuthLogin({ accessToken });
    }
  }, [isNewUser]);

  return (
    !isNewUser && (
      <section className={container}>
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
          style={{ position: 'absolute', right: 0, zIndex: 99999 }}
        >
          로그아웃
        </button>
        <section className={styles.contentWrapper}>
          <SortContainer state={sort} />
          <StoreList />
        </section>
      </section>
    )
  );
}
