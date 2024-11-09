import TagContainer from '@/app/map/(components)/tag-container/tag-container';
import { ProductInfoContainerProps } from '@/types/bag';
import ProductInfoFooter from '@/components/product/product-info-container/(components)/footer';
import * as styles from './styles.css';

export default function ProductInfoContainer({
  info: {
    storeName,
    onSale,
    amount,
    address,
    salePrice,
    costPrice,
    startAt,
    endAt,
  },
  isPadding,
  reviewButton,
}: {
  info: ProductInfoContainerProps;
  isPadding?: boolean;
  reviewButton: { bagId?: number; storeId?: number; reviewCnt: number };
}) {
  return (
    <div className={styles.container({ isPadding })}>
      <header className={styles.header}>
        <strong className={styles.storeName}>{storeName}</strong>
        <TagContainer info={{ onSale, amount }} />
      </header>
      <p className={styles.address}>{address}</p>
      <ProductInfoFooter
        info={{
          salePrice,
          costPrice,
          startAt,
          endAt,
        }}
        reviewButton={reviewButton}
      />
    </div>
  );
}
