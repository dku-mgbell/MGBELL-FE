'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useAuthStore } from '@/hooks/stores/useAuthStore';
import useModal from '@/hooks/useModal';
import { useAuth } from '@/hooks/useAuth';
import { mapButtonInfo, navigationTabList } from './navigation-tab-list';
import * as styles from './styles.css';

export default function Navigation() {
  const pathname = usePathname();
  const currentRoute = pathname.split('?')[0];
  const { isLoggedIn } = useAuthStore();
  const { logout } = useAuth();
  const { open } = useModal();
  const handleNavigationLink = ({
    loggedIn,
    tabInfo,
  }: {
    loggedIn?: boolean;
    tabInfo: (typeof navigationTabList)[0];
  }) => {
    if (loggedIn) {
      return tabInfo.route;
    }
    if (tabInfo.forGuest) {
      return tabInfo.route;
    }
    return '';
  };

  return (
    navigationTabList.map(({ route }) => route).includes(currentRoute) && (
      <nav className={styles.wrapper}>
        <div className={styles.container}>
          {navigationTabList.map((tabInfo) => {
            const active = currentRoute === tabInfo.route;
            return (
              <Link
                key={tabInfo.id}
                href={handleNavigationLink({ loggedIn: isLoggedIn, tabInfo })}
                onClick={() => {
                  if (!isLoggedIn && !tabInfo.forGuest)
                    open({
                      content: '로그인 이후 이용 가능합니다.',
                      confirmEvent: () => {
                        logout();
                      },
                    });
                }}
                style={tabInfo.margin}
              >
                <div>{tabInfo.icon(active)}</div>
                <p className={styles.tabName({ active })}>{tabInfo.name}</p>
              </Link>
            );
          })}
        </div>
        <Link className={styles.mapButton} href={mapButtonInfo.route}>
          {mapButtonInfo.icon}
        </Link>
      </nav>
    )
  );
}
