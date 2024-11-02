import Link from 'next/link';
import { OrderStateName, UserOrderDetail } from '@/types/order';
import { formatDate } from '@/utils/formatDate';
import { commaizeNumber } from '@/utils/commaizeNumber';
import Button from '@/components/button/text-button/button';
import ChevronRightIcon from '@/assets/svg/ChevronRightIcon';
import * as styles from './styles.css';

export default function OrderItem({
  /* TODO API 이미지, 마감백 아이디 */
  data: {
    orderId,
    postId,
    orderDateTime,
    storeName,
    bagName,
    orderState,
    amount,
    subTotal,
    images,
  },
}: {
  data: UserOrderDetail;
}) {
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
          <Link href={`/bag/${postId}`} className={styles.storeName}>
            {storeName} <ChevronRightIcon color="#000" />
          </Link>
          <p className={styles.bagInfo}>
            {bagName} {amount}개
          </p>
          <p className={styles.bagInfo}>{commaizeNumber(subTotal)}원</p>
        </div>
      </div>
      {orderState === 'COMPLETED' && (
        <Button
          value="리뷰쓰기"
          theme="outline-secondary"
          style={{ margin: '15px 0 5px 0' }}
        />
      )}
    </div>
  );
}
