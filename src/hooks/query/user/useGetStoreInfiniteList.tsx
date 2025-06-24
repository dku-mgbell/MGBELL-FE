import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { Store } from '@/hooks/api/store';
import { StoreListRequestParams } from '@/types/store';

export const useGetStoreInfiniteList = (
  queryParams: Omit<StoreListRequestParams, 'page'>,
) => {
  const { size, keyword, sortType, onlyAvailable, latitude, longitude } =
    queryParams;
  return useSuspenseInfiniteQuery({
    queryKey: [
      'store-list',
      size,
      keyword,
      sortType,
      onlyAvailable,
      latitude,
      longitude,
    ],
    queryFn: ({ pageParam: page }) =>
      Store.getInfiniteList({ ...queryParams, page }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length ? allPages.length : undefined,
    staleTime: 30 * 1000,
    gcTime: 60 * 1000,
  });
};
