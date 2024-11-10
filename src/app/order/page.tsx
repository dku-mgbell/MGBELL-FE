'use client';

import { Intersection } from '@/components/intersection/intersection';
import HeaderLayout from '@/components/layout/header-layout/header-layout';
import { useGetUserOrderList } from '@/hooks/query/order/useGetUserOrderList';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { UserOrderDetailPreview } from '@/types/order';
import OrderItem from './(components)/order-item/order-item';
import * as styles from './styles.css';

export default function Page() {
  const orderListState = useGetUserOrderList({ size: 5 });
  const { list, intersection, isLoading } =
    useInfiniteScroll<UserOrderDetailPreview>(orderListState);

  if (isLoading) return <> </>;

  return (
    <HeaderLayout title="주문내역">
      <div className={styles.container}>
        {list!.map((data) => (
          <OrderItem key={data.orderId} data={data} />
        ))}
        <Intersection ref={intersection} />
      </div>
    </HeaderLayout>
  );
}
