import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ChevronRightIcon from '@/assets/svg/ChevronRightIcon';
import Button from '@/components/button/text-button/button';
import { OrderStateName, UserOrderDetailPreview } from '@/types/order';
import { commaizeNumber } from '@/utils/commaizeNumber';
import { formatDate } from '@/utils/formatDate';
import * as styles from './styles.css';

export default function OrderItem({
  data: {
    orderId,
    id,
    orderDateTime,
    storeName,
    bagName,
    orderState,
    amount,
    subTotal,
    images,
    reviewed,
  },
}: {
  data: UserOrderDetailPreview;
}) {
  const route = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerOrderInfo}>
          <span className={styles.date}>{formatDate(orderDateTime)}</span>
          <span className={styles.orderState({ orderState })}>
            {OrderStateName[orderState]}
          </span>
        </div>
        <Link href={`/order/${orderId}`} className={styles.orderDetailButton}>
          주문상세
        </Link>
      </div>
      <div className={styles.orderInfoContainer}>
        <div
          className={styles.thumbnail}
          style={{ backgroundImage: `url('${images}')` }}
        />
        <div className={styles.orderInfoSection}>
          <Link href={`/bag/${id}`} className={styles.storeName}>
            {storeName} <ChevronRightIcon color="#000" />
          </Link>
          <p className={styles.bagInfo}>
            {bagName} {amount}개
          </p>
          <p className={styles.bagInfo}>{commaizeNumber(subTotal)}원</p>
        </div>
      </div>
      {!reviewed && orderState === 'COMPLETED' && (
        <Button
          value="리뷰 작성"
          theme="outline-secondary"
          style={{ margin: '10px 0 5px 0' }}
          onClick={() => {
            route.push(`/bag/review/post?orderId=${orderId}`);
          }}
        />
      )}
    </div>
  );
}
