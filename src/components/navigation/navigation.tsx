'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useModalMessage } from '@/hooks/useModal/message';
import { useAuth } from '@/hooks/useAuth';

export type NavigationTab = {
  id: string;
  forGuest: boolean;
  name: string;
  route: string;
  icon: (active: boolean) => React.ReactNode;
  readyToDeploy?: boolean;
};

export default function Navigation({
  navigationTabList,
}: {
  navigationTabList: NavigationTab[];
}) {
  const pathname = usePathname();
  const currentRoute = pathname.split('?')[0];
  const { openRequireLoginModal, isLoggedIn } = useAuth();
  const { openNotReadyModal } = useModalMessage();

  const handleNavigationLink = ({
    tabInfo,
  }: {
    tabInfo: (typeof navigationTabList)[0];
  }) => {
    if (!tabInfo.readyToDeploy) {
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
                  if (!tabInfo.readyToDeploy) {
                    openNotReadyModal();
                    return;
                  }

                  if (!isLoggedIn && !tabInfo.forGuest) openRequireLoginModal();
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
