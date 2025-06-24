'use client';

import { useSearchParams } from 'next/navigation';
import { Intersection } from '@/components/intersection/intersection';
import { useGetStoreInfiniteList } from '@/hooks/query/user/useGetStoreInfiniteList';
import { StoreListItemResponse, StoreListSortType } from '@/types/store';
import { useSuspenseInfiniteScroll } from '@/hooks/useSuspenseInfiniteScroll';
import StoreListItem from './item';

export default function StoreList() {
  const searchParams = useSearchParams();
  const sortType = searchParams.get('sort') ?? 'RECENT_DESC';
  const searchKeyword = searchParams.get('search');
  const latitude = searchParams.get('latitude')
    ? Number(searchParams.get('latitude'))
    : null;
  const longitude = searchParams.get('longitude')
    ? Number(searchParams.get('longitude'))
    : null;
  const onlyAvailable = searchParams.get('available') === 'true' ? true : null;

  const bagListState = useGetStoreInfiniteList({
    size: 5,
    sortType: sortType as StoreListSortType,
    keyword: searchKeyword,
    onlyAvailable,
    latitude,
    longitude,
  });
  const { list, intersection, isSuccess } =
    useSuspenseInfiniteScroll<StoreListItemResponse>(bagListState);

  return (
    <>
      {isSuccess &&
        list!.map((props: StoreListItemResponse) => (
          <StoreListItem key={props.storeId} {...props} />
        ))}
      <Intersection ref={intersection} />
    </>
  );
}
