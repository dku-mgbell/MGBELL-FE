'use client';

import { Intersection } from '@/components/intersection/intersection';
import { useGetOrderListByOwner } from '@/hooks/query/order/owner/useGetOrderListByOwner';
import { OwnerTabOrderStatus } from '@/types/order';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import OrderListItem from './list-item';

export default function OrderList({
  status,
}: {
  status?: OwnerTabOrderStatus;
}) {
  const orderListQuery = useGetOrderListByOwner({
    size: 5,
    status: status ?? '',
  });
  const { list, intersection } = useInfiniteScroll(orderListQuery);

  return (
    <div className="flex-1 p-[20px] pl-[120px]">
      <ul className="flex flex-col gap-[20px]">
        {list?.map((item) => (
          <OrderListItem key={item.orderId} content={item} />
        ))}
      </ul>
      <Intersection ref={intersection} />
    </div>
  );
}
