'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import useModal from '@/hooks/useModal';
import { navigationTabList } from './navigation-tab-list';

export default function Navigation() {
  const pathname = usePathname();
  const currentRoute = pathname.split('?')[0];
  const { logout, isLoggedIn } = useAuth();
  const { open } = useModal();

  const handleNavigationLink = ({
    tabInfo,
  }: {
    tabInfo: (typeof navigationTabList)[0];
  }) => {
    if (tabInfo.readyToDeploy === 'false') {
      return '';
    }
    if (isLoggedIn || tabInfo.forGuest) {
      return tabInfo.route;
    }
    return '';
  };

  return (
    navigationTabList.map(({ route }) => route).includes(currentRoute) && (
      <nav
        className="bg-white z-[9999] fixed w-full bottom-0 justify-center flex max-w-[450px] mx-auto left-1/2 -translate-x-1/2"
        style={{
          boxShadow: '0px -2px 15px 2px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className="flex w-full pt-3 pb-[calc(env(safe-area-inset-bottom)*0.9+10px)] bg-white justify-between items-end">
          {navigationTabList.map((tabInfo) => {
            const active = currentRoute === tabInfo.route;
            return (
              <Link
                key={tabInfo.id}
                className="flex flex-col items-center justify-center gap-[2px] clickable w-[25%]"
                href={handleNavigationLink({ tabInfo })}
                onClick={() => {
                  if (tabInfo.readyToDeploy === 'false') {
                    open({
                      content: '준비 중입니다.',
                    });
                    return;
                  }

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
                  className={`text-center text-b3 ${
                    active ? 'text-gray1' : 'text-gray6'
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
