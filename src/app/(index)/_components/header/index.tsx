'use client';

import { useEffect, useState } from 'react';
import SearchInput from '@/components/input/search/search-input';
import { cn } from '@/lib/utils';
import AddressEnterLink from './address-enter-link';

export default function MainHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
    <header
      className={cn(
        'w-full flex flex-col gap-[8px]',
        'bg-primary fixed top-0 left-1/2 transform -translate-x-1/2 max-w-[450px] z-[9999]',
        'px-[20px] py-[16px]',
        'transition-transform duration-300 ease-in-out',
        isVisible ? 'translate-y-0' : '-translate-y-full',
      )}
    >
      <AddressEnterLink />
      <SearchInput placeholder="마감벨 입점 매장을 검색해보세요!" />
    </header>
  );
}
