import { useInfiniteQuery } from '@tanstack/react-query';
import { Store } from '@/hooks/api/store';

export const useGetPendingStoreList = ({ size }: { size: number }) =>
  useInfiniteQuery({
    queryKey: ['pending-store-list'],
    queryFn: ({ pageParam: pageNum }) =>
      Store.getPendingList({ page: pageNum, size }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length ? allPages.length : undefined,
    gcTime: 0,
    staleTime: 0,
  });
