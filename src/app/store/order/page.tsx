import { OwnerTabOrderStatus } from '@/types/owner';
import Aside from './_components/aside';
import OrderList from './_components/order/list';

export default function Page({
  searchParams: { status },
}: {
  searchParams: { status?: OwnerTabOrderStatus };
}) {
  return (
    <div className="flex">
      <Aside status={status} />
      <OrderList status={status} />
    </div>
  );
}
