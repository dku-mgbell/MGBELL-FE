'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import LabeledField from '@/components/ui/labeled-field';
import { useUserHistoryStore } from '@/hooks/stores/useUserHistoryStore';
import RecentSearchKeywordChip from './_components/recent-search-keyword-chip';

function Content() {
  const { searchKeywordHistory, deleteSearchKeywordHistory } =
    useUserHistoryStore();
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword');

  if (keyword) return <div> {keyword} 검색 결과 페이지 입니다.</div>;

  return (
    <div className="flex flex-col gap-[30px] mt-[10px]">
      <LabeledField label="최근 검색어">
        <ul className="flex flex-wrap gap-[8px]">
          {searchKeywordHistory.map((value) => (
            <RecentSearchKeywordChip
              key={value}
              value={value}
              onDelete={() => deleteSearchKeywordHistory(value)}
            />
          ))}
        </ul>
      </LabeledField>
      <LabeledField label="우리동네 인기 마감백">
        우리동네 인기 마감백
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
