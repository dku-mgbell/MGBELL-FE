import { getFullDateTime } from '@/utils/getFullDateTime';

export function OrderInfo({
  orderId,
  orderDateTime,
}: {
  orderId: string;
  orderDateTime: string;
}) {
  return (
    <p className="text-b2 text-gray5">
      주문일시: {getFullDateTime(orderDateTime)}
      <br />
      주문번호: {orderId}
    </p>
  );
}
