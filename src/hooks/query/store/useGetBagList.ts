import { Bag } from '@/hooks/api/bag';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useGetBagList = ({ size }: { size: number }) =>
  useInfiniteQuery({
    queryKey: ['bag-list'],
    queryFn: ({ pageParam: pageNum }) => Bag.getList({ page: pageNum, size }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length ? allPages.length : undefined,
  });
