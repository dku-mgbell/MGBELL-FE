import { useInfiniteQuery } from '@tanstack/react-query';
import { Order } from '@/hooks/api/order';
import { OrderState } from '@/types/order';

export const useGetOrderListByOwner = ({
  size,
  state,
}: {
  size: number;
  state?: OrderState | '';
}) =>
  useInfiniteQuery({
    queryKey: ['owner-order-list', state],
    queryFn: ({ pageParam: pageNum }) =>
      Order.Owner.getInfiniteList({ state }, { page: pageNum, size }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length ? allPages.length : undefined,
  });
