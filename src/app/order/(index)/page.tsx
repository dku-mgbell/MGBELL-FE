'use client';

import { Intersection } from '@/components/intersection/intersection';
import { useGetUserOrderList } from '@/hooks/query/order/useGetUserOrderList';
import { UserOrderDetailPreview } from '@/types/order';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import OrderItem from '../(components)/order-item/order-item';

export default function Page() {
  const orderListState = useGetUserOrderList({ size: 5 });
  const { list, intersection, isLoading } =
    useInfiniteScroll<UserOrderDetailPreview>(orderListState);

  if (isLoading) return <> </>;
  return (
    <>
      {list!.length === 0 ? (
        <p className="absolute-center text-h5 text-gray5">
          주문 내역이 없어요!
        </p>
      ) : (
        list!.map((data) => <OrderItem key={data.orderId} data={data} />)
      )}

      <Intersection ref={intersection} />
    </>
  );
}
