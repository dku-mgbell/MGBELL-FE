'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuthStore } from '@/hooks/stores/useAuthStore';
import { useAuth } from '@/hooks/useAuth';
import useModal from '@/hooks/useModal';
import { navigationTabList } from './navigation-tab-list';

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
      <nav className="bg-white z-[999] fixed w-full bottom-0 justify-center flex box-shadow-[0px_-2px_15px_2px_rgba(0,0,0,0.1)] max-w-[450px] mx-auto left-1/2 -translate-x-1/2">
        <div className="flex w-full pt-3 pb-[calc(env(safe-area-inset-bottom)*0.9+10px)] bg-white justify-between items-end">
          {navigationTabList.map((tabInfo) => {
            const active = currentRoute === tabInfo.route;
            return (
              <Link
                key={tabInfo.id}
                className="flex flex-col items-center justify-center gap-[2px] clickable w-[25%]"
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
              >
                <div>{tabInfo.icon(active)}</div>
                <p
                  className={`text-center text-b3 text-gray6 ${
                    active ? 'text-gray1' : ''
                  }`}
                >
                  {tabInfo.name}
                </p>
              </Link>
            );
          })}
        </div>
      </nav>
    )
  );
}
