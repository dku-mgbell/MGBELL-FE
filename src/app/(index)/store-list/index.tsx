'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Intersection } from '@/components/intersection/intersection';
import { useGetStoreInfiniteList } from '@/hooks/query/user/useGetStoreInfiniteList';
import { useGetUserAccountInfo } from '@/hooks/query/user/useGetUserAccountInfo';
import { StoreListItemResponse, StoreListSortType } from '@/types/store';
import { useAuth } from '@/hooks/useAuth';
import { useSuspenseInfiniteScroll } from '@/hooks/useSuspenseInfiniteScroll';
import StoreListItem from './item';

export default function StoreList() {
  const router = useRouter();
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
  const { isLoggedIn } = useAuth();
  const { data: userAccountInfo } = useGetUserAccountInfo({
    enabled: isLoggedIn,
  });
  const bagListState = useGetStoreInfiniteList({
    size: 5,
    sortType: sortType as StoreListSortType,
    keyword: searchKeyword,
    onlyAvailable,
    latitude,
    longitude,
  });
  const { list, intersection } =
    useSuspenseInfiniteScroll<StoreListItemResponse>(bagListState);

  if (isLoggedIn && userAccountInfo?.userRole === 'OWNER') {
    router.push('/store/order');
  }

  return (
    <>
      {list!.map((props: StoreListItemResponse) => (
        <StoreListItem key={props.storeId} {...props} />
      ))}
      <Intersection ref={intersection} />
    </>
  );
}
