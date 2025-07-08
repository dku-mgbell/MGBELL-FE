import { cn } from '@/lib/utils';
import {
  OrderStatus,
  OrderStatusColor,
  UserOrderStatusName,
} from '@/types/order';

export function OrderStatusText({
  orderStatus,
  className,
}: {
  orderStatus: OrderStatus;
  className?: string;
}) {
  return (
    <p
      className={cn(
        'text-b2 font-bold',
        className,
        OrderStatusColor[orderStatus],
      )}
    >
      {UserOrderStatusName[orderStatus]}
    </p>
  );
}
