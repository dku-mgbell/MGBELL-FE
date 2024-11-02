import { Order } from '@/hooks/api/order';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useGetUserOrderList = ({ size }: { size: number }) =>
  useInfiniteQuery({
    queryKey: ['user-order-list'],
    queryFn: ({ pageParam: pageNum }) =>
      Order.getInfiniteList({ page: pageNum, size }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length ? allPages.length : undefined,
  });
