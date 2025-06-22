'use client';

import { Intersection } from '@/components/intersection/intersection';
import { useGetUserOrderList } from '@/hooks/query/order/useGetUserOrderList';
import { UserOrderDetailPreview } from '@/types/order';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { Order } from '../_components/order-item';

export default function Page() {
  const orderListState = useGetUserOrderList({ size: 5 });
  const { list, intersection, isLoading } =
    useInfiniteScroll<UserOrderDetailPreview>(orderListState);

  if (isLoading) return <> </>;
  return (
    <>
      <div className="pb-[calc(env(safe-area-inset-bottom)+70px)]">
        {list!.length === 0 ? (
          <p className="absolute-center text-h5 text-gray5">
            주문 내역이 없어요!
          </p>
        ) : (
          list!.map((item) => <Order.ListItem key={item.orderId} data={item} />)
        )}
      </div>
      <Intersection ref={intersection} />
    </>
  );
}
