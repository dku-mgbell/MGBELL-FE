'use client';

import { Suspense, useEffect, useRef, useState, useTransition } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import SearchInput from '@/components/input/search';
import { HeaderLayoutGroup } from '@/components/layout/header-layout';
import PreviousButton from '@/components/layout/header-layout/previous-button';
import Loader from '@/components/loader/loader';
import { useUserHistoryStore } from '@/hooks/stores/useUserHistoryStore';

function Content({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { addSearchKeywordHistory } = useUserHistoryStore();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [searchKeyword, setSearchKeyword] = useState('');
  const searchParams = useSearchParams();
  const keywordParam = searchParams.get('keyword');
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setSearchKeyword(keywordParam ?? '');
  }, [keywordParam]);

  useEffect(() => {
    if (!keywordParam) {
      searchInputRef.current?.focus();
    }
  }, [keywordParam, searchInputRef]);

  const handlePreviousButtonClick = () => {
    router.back();
  };

  const handleSearchKeywordEnter = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    const keyword = e.currentTarget.value;
    if (keyword && keyword.length > 0) {
      addSearchKeywordHistory(keyword);
      startTransition(() => {
        router.push(`?keyword=${keyword}`);
      });
    }
  };

  const handleSearchKeywordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchKeyword(e.currentTarget.value);
  };

  return (
    <HeaderLayoutGroup.Layout>
      <HeaderLayoutGroup.Header className="py-[10px] h-[58px]">
        <PreviousButton
          onClick={handlePreviousButtonClick}
          width={15}
          height={17}
        />
        <SearchInput
          ref={searchInputRef}
          placeholder="마감백 운영 가게 검색"
          className="bg-gray10 rounded-[10px] ml-[10px]"
          onEnter={handleSearchKeywordEnter}
          onChange={handleSearchKeywordChange}
          value={searchKeyword}
          autoFocus
        />
      </HeaderLayoutGroup.Header>
      <HeaderLayoutGroup.Main className="pt-[58px]">
        {isPending ? <Loader /> : children}
      </HeaderLayoutGroup.Main>
    </HeaderLayoutGroup.Layout>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <Content>{children}</Content>
    </Suspense>
  );
}
