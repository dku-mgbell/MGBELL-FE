'use client';

import { useRouter } from 'next/navigation';
import { Intersection } from '@/components/intersection/intersection';
import HeaderLayout from '@/components/layout/header-layout';
import { StoreList } from '@/components/store/list';
import { useGetStoreInfiniteList } from '@/hooks/query/user/useGetStoreInfiniteList';
import { StoreListItemResponse } from '@/types/store';
import { useSuspenseInfiniteScroll } from '@/hooks/useSuspenseInfiniteScroll';

export default function Page() {
  const storeListState = useGetStoreInfiniteList({
    size: 10,
    sortType: 'RECENT_DESC',
  });
  const { list, isFetching, intersection } =
    useSuspenseInfiniteScroll<StoreListItemResponse>(storeListState);
  const router = useRouter();

  const handleStoreItemClick = (store: StoreListItemResponse) => {
    router.push(`/admin/store/${store.storeId}`);
  };

  if (isFetching) {
    return <div />;
  }
  return (
    <HeaderLayout title="가게 목록">
      <StoreList.Container className="pb-[50px]">
        {list!.map((store) => (
          <StoreList.Item
            key={store.storeId}
            data={store}
            onClick={() => {
              handleStoreItemClick(store);
            }}
          />
        ))}
      </StoreList.Container>
      <Intersection ref={intersection} />
    </HeaderLayout>
  );
}
