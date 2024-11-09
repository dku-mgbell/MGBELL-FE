import { BagInfoResponse } from '@/types/bag';
import TagContainer from '@/app/map/(components)/tag-container/tag-container';
import ProductInfoFooter from '@/components/product/product-info-container/(components)/footer';
import * as styles from './styles.css';

export default function ProductInfoThumbContainer({
  info: {
    onSale,
    amount,
    storeName,
    address,
    images,
    salePrice,
    costPrice,
    startAt,
    endAt,
    reviewCnt,
    storeId,
    image,
    id: bagId,
  },
  onClick,
}: {
  info: BagInfoResponse & { storeId?: number };
  onClick?: () => void;
}) {
  const thumbnail = images ? images[0] : image;
  return (
    <div
      role="button"
      className={styles.listItem}
      onClick={onClick}
      tabIndex={0}
      aria-hidden="true"
    >
      <div className={styles.contentContainer}>
        <div className={styles.bagInfoContainer}>
          <TagContainer info={{ onSale, amount }} />
          <strong className={styles.storeName}>{storeName}</strong>
          <p className={styles.address}>{address}</p>
        </div>
        <div
          className={styles.imageWrapper}
          style={{
            backgroundImage: `url('${thumbnail}')`,
          }}
        />
      </div>
      <ProductInfoFooter
        info={{
          salePrice,
          costPrice,
          startAt,
          endAt,
        }}
        reviewButton={{ reviewCnt, storeId, bagId }}
      />
    </div>
  );
}
