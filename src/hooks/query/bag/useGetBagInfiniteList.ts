import { Bag } from '@/hooks/api/bag';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useGetBagInfiniteList = ({
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
  useInfiniteQuery({
    queryKey: ['bag-list'],
    queryFn: ({ pageParam: pageNum }) =>
      Bag.getInfiniteList(
        { isLoggedIn, sortedBy, searchKeyword },
        { page: pageNum, size },
      ),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length ? allPages.length : undefined,
  });
