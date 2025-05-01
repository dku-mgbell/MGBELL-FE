'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';
import { Intersection } from '@/components/intersection/intersection';
import { useGetBagSuspenseInfiniteList } from '@/hooks/query/bag/useGetBagSuspenseInfiniteList';
import { useAuthStore } from '@/hooks/stores/useAuthStore';
import { BagInfoResponse } from '@/types/bag';
import { useSuspenseInfiniteScroll } from '@/hooks/useSuspenseInfiniteScroll';
import StoreListItem from './store-list-item';
import * as styles from './styles.css';

export default function StoreList() {
  const { isLoggedIn } = useAuthStore();
  const searchParams = useSearchParams();
  const sortedBy = searchParams.get('sort') ?? '';
  const searchKeyword = searchParams.get('search') ?? '';

  const queryClient = useQueryClient();
  const bagListState = useGetBagSuspenseInfiniteList({
    isLoggedIn: isLoggedIn ?? false,
    size: 5,
    sortedBy,
    searchKeyword,
  });
  const { list, intersection, isSuccess } =
    useSuspenseInfiniteScroll<BagInfoResponse>(bagListState);

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ['bag-list'] });
  }, [searchParams]);
  // if (isLoading) return <>loading...</>;

  return (
    <main className={styles.main}>
      {isSuccess &&
        list!.map((props: BagInfoResponse) => (
          <StoreListItem key={props.id} {...props} />
        ))}
      <Intersection ref={intersection} />
    </main>
  );
}
