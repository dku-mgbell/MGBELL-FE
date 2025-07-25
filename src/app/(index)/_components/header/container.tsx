'use client';

import { ReactNode, useEffect, useState } from 'react';
import { useInstallGuideStore } from '@/hooks/stores/useInstallGuideStore';
import { cn } from '@/lib/utils';

export default function HeaderContainer({ children }: { children: ReactNode }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { isBarShown, isModalOpen } = useInstallGuideStore();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 50) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={cn(
        'relative',
        isBarShown && !isModalOpen ? 'mt-[70px]' : 'mt-0',
      )}
    >
      <div
        className={cn(
          'w-full h-[env(safe-area-inset-top)] bg-white fixed top-0 left-1/2 transform -translate-x-1/2 max-w-[450px] z-[999]',
        )}
      />
      <header
        className={cn(
          'w-full flex flex-col',
          'bg-primary fixed left-1/2 transform -translate-x-1/2 max-w-[450px] z-[9999]',
          'has-[.full]:max-w-[100dvw]',
          'pt-[calc(env(safe-area-inset-top)+16px)]',
          'transition-transform duration-300 ease-in-out',
          isVisible
            ? 'translate-y-0'
            : '-translate-y-[calc(100%-env(safe-area-inset-top))] z-99',
        )}
      >
        {children}
      </header>
    </div>
  );
}
