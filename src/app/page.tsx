'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { useAuthStore } from '@/hooks/stores/useAuthStore';
import SearchInput from '@/components/input/search/search-input';
import { UserRole } from '@/types/user';
import { useAddressStateStore } from '@/hooks/stores/useAddressStore';
import FilterIcon from '../assets/svg/FilterIcon';
import LocationMarkerIcon from '../assets/svg/LocationMarkerIcon';
import { container, styles } from './styles.css';
import SortContainer from './(components)/sort-container/sort-container';
import StoreList from './(components)/store-list/store-list';

export default function Page({
  searchParams: { sort, accessToken, isNewUser, userRole },
}: {
  searchParams: {
    sort: string;
    accessToken: string;
    isNewUser: string;
    userRole: UserRole;
  };
}) {
  const {
    setUserRole,
    setOAuthState,
    userRole: savedUserRole,
  } = useAuthStore();
  const { setToken, oAuthLogin } = useAuth();
  const { addressState } = useAddressStateStore();
  const route = useRouter();

  useEffect(() => {
    if (userRole) setUserRole(userRole);
  }, [userRole]);

  useEffect(() => {
    if (savedUserRole === 'OWNER') route.push('/store/order');
  }, [savedUserRole]);

  useEffect(() => {
    if (isNewUser === 'true') {
      route.push('/sign-up?oAuth=true');
      setOAuthState({
        isOAuth: true,
        isNewUser: true,
      });
      setToken({ accessToken });
    } else if (isNewUser === 'false') {
      oAuthLogin({ accessToken });
      setOAuthState({
        isOAuth: true,
        isNewUser: false,
      });
    }
  }, [isNewUser]);

  return (
    !isNewUser && (
      <section className={container}>
        <header className={styles.header}>
          <Link href="location" className={styles.location}>
            <LocationMarkerIcon />
            <span className={styles.locationText}>
              {addressState.address
                ? addressState.address
                : '위치를 설정해주세요!'}
            </span>
          </Link>
          <div className={styles.search}>
            <SearchInput placeholder="가게의 이름을 검색해보세요!" />
            <button type="button" className={styles.filterButton}>
              <FilterIcon />
            </button>
          </div>
        </header>
        <section className={styles.contentWrapper}>
          <SortContainer state={sort} />
          <StoreList />
        </section>
      </section>
    )
  );
}
