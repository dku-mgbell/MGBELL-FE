'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import LabeledField from '@/components/ui/labeled-field';
import PopularStoreList from './_components/popular-store-list';
import RecentKeywordList from './_components/recent-keyword-list';
import SearchResultStoreList from './_components/search-result-store-list';

function Content() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword');

  if (keyword) return <SearchResultStoreList keyword={keyword} />;

  return (
    <div className="flex flex-col gap-[30px] mt-[10px]">
      <LabeledField label="최근 검색어">
        <RecentKeywordList />
      </LabeledField>
      <LabeledField label="우리동네 인기 마감백">
        <PopularStoreList />
      </LabeledField>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense>
      <Content />
    </Suspense>
  );
}
