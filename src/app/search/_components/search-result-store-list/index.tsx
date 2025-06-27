import { Intersection } from '@/components/intersection/intersection';
import { StoreList } from '@/components/store/list';
import { useGetStoreInfiniteList } from '@/hooks/query/user/useGetStoreInfiniteList';
import { StoreListItemResponse } from '@/types/store';
import { useSuspenseInfiniteScroll } from '@/hooks/useSuspenseInfiniteScroll';

export default function SearchResultStoreList({
  keyword,
}: {
  keyword: string;
}) {
  const StoreInfiniteListState = useGetStoreInfiniteList({
    size: 1,
    sortType: 'RECENT_DESC',
    keyword,
  });
  const { list, intersection } =
    useSuspenseInfiniteScroll<StoreListItemResponse>(StoreInfiniteListState);

  if (list && list.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[100px]">
        검색 결과가 없습니다.
      </div>
    );
  }

  return (
    <StoreList.Container>
      {list?.map((store) => (
        <StoreList.Item key={store.storeId} data={store} />
      ))}
      <Intersection ref={intersection} />
    </StoreList.Container>
  );
}
