'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import SearchInput from '@/components/input/search';
import { HeaderLayoutGroup } from '@/components/layout/header-layout';
import PreviousButton from '@/components/layout/header-layout/previous-button';

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    searchInputRef.current?.focus();
  }, [searchInputRef]);

  return (
    <HeaderLayoutGroup.Layout>
      <HeaderLayoutGroup.Header className="py-[10px] h-[58px]">
        <PreviousButton onClick={router.back} width={8} height={14} />
        <SearchInput
          ref={searchInputRef}
          placeholder="마감백 운영 가게를 검색해보세요!"
          className="bg-gray10 rounded-[10px] ml-[10px]"
        />
      </HeaderLayoutGroup.Header>
      <HeaderLayoutGroup.Main className="pt-[58px]">
        {children}
      </HeaderLayoutGroup.Main>
    </HeaderLayoutGroup.Layout>
  );
}
