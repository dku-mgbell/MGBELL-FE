import { Bag } from '@/hooks/api/bag';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useGetBagInfiniteList = ({ size }: { size: number }) =>
  useInfiniteQuery({
    queryKey: ['bag-list'],
    queryFn: ({ pageParam: pageNum }) =>
      Bag.getInfiniteList({ page: pageNum, size }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length ? allPages.length : undefined,
  });
