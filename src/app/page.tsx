'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { useAuthStore } from '@/hooks/stores/useAuthStore';
import SearchInput from '@/components/input/search/search-input';
import { UserRole } from '@/types/user';
import { useAddressStateStore } from '@/hooks/stores/useAddressStore';
// import FilterIcon from '../assets/svg/FilterIcon';
import {
  initializeMessaging,
  issueFcmToken,
  onMessageListener,
} from '@/hooks/notification/firebase';
import { useRegisterFCMToken } from '@/hooks/query/notification/useRegisterFCMToken';
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
  const { mutate: registerFCMToken } = useRegisterFCMToken();

  useEffect(() => {
    const messaging = initializeMessaging();
    const fcmToken = localStorage.getItem('fcmToken');
    if (messaging) {
      issueFcmToken(messaging).then(() => {
        if (fcmToken) registerFCMToken(fcmToken);
      });
      onMessageListener(messaging).then((payload) => {
        // eslint-disable-next-line no-console
        console.log(payload);
      });
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker
          .register('/firebase-messaging-sw.js')
          .then((registration) => {
            // eslint-disable-next-line no-console
            console.log(
              'Service Worker registered with scope:',
              registration.scope,
            );
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.error('Service Worker registration failed:', error);
          });
      }
    }
  }, []);

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
      <section className={`${container} pwa-layout`}>
        <header className={styles.header}>
          <Link href="location" className={styles.location}>
            <LocationMarkerIcon />
            <span className={styles.locationText}>
              {addressState.address
                ? addressState.address
                : '위치를 입력해주세요'}
            </span>
          </Link>
          <div className={styles.search}>
            <SearchInput placeholder="마감벨 입점 매장을 검색해보세요!" />
            {/* <button type="button" className={styles.filterButton}>
              <FilterIcon />
            </button> */}
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
