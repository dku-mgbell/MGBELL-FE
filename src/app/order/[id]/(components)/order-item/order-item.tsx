import Link from 'next/link';
import { OrderStateName, UserOrderDetailPreview } from '@/types/order';
import ProductInfoFooter from '@/components/product/product-info-footer/product-info-footer';
import { fontWeight } from '@/styles/constant';
import { formatDateTime } from '@/utils/formatDateTime';

import * as styles from './styles.css';

export default function OrderItem({
  data: {
    postId,
    storeName,
    bagName,
    orderState,
    amount,
    images,
    subTotal,
    orderDateTime,
    orderId,
  },
}: {
  data: UserOrderDetailPreview;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.orderInfoContainer}>
        <div className={styles.orderInfoSection}>
          <span className={styles.orderState({ orderState })}>
            {OrderStateName[orderState]}
          </span>
          <Link href={`/bag/${postId}`} className={styles.storeName}>
            {storeName}
          </Link>
          <p className={styles.bagInfo}>
            {bagName} {amount}개
          </p>
        </div>
        <div
          className={styles.thumbnail}
          style={{ backgroundImage: `url('${images}')` }}
        />
      </div>
      <ProductInfoFooter
        salePrice={subTotal}
        priceStyle={{
          color: 'black',
          fontSize: 17,
          fontWeight: fontWeight.bold,
        }}
        firstRow={{
          text: (
            <p className={styles.orderInfoText}>
              주문일시: {formatDateTime(orderDateTime)}
            </p>
          ),
        }}
        secondRow={{
          text: <p className={styles.orderInfoText}>주문번호: {orderId}</p>,
        }}
        noPadding
      />
    </div>
  );
}
