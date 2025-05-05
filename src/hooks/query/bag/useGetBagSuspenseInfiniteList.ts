import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { Bag } from '@/hooks/api/bag';

export const useGetBagSuspenseInfiniteList = ({
  isLoggedIn,
  size,
  sortedBy,
  searchKeyword,
}: {
  isLoggedIn?: boolean;
  size: number;
  sortedBy?: string;
  searchKeyword?: string;
}) =>
  useSuspenseInfiniteQuery({
    queryKey: ['bag-list'],
    queryFn: ({ pageParam: pageNum }) =>
      Bag.getInfiniteList(
        { isLoggedIn, sortedBy, searchKeyword },
        { page: pageNum, size },
      ),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length ? allPages.length : undefined,
    staleTime: 60,
  });
