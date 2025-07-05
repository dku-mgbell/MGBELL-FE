import { useInfiniteQuery } from '@tanstack/react-query';
import { Owner } from '@/hooks/api/order/owner';
import { OwnerTabOrderStatus } from '@/types/order';

export const useGetOrderListByOwner = ({
  size,
  status,
}: {
  size: number;
  status?: OwnerTabOrderStatus;
}) =>
  useInfiniteQuery({
    queryKey: ['owner-order-list', status],
    queryFn: ({ pageParam: pageNum }) =>
      Owner.getOrderList({ page: pageNum, size }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length ? allPages.length : undefined,
    gcTime: 0,
    staleTime: 0,
  });
