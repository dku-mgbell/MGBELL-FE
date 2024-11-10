import { Order } from '@/hooks/api/order';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useGetOrderListByOwner = ({ size }: { size: number }) =>
  useInfiniteQuery({
    queryKey: ['owner-order-list'],
    queryFn: ({ pageParam: pageNum }) =>
      Order.Owner.getInfiniteList({ page: pageNum, size }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length ? allPages.length : undefined,
  });
