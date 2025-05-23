import Image from 'next/image';
import Link from 'next/link';
import LikeIcon from '@/assets/svg/LikeIcon';
import ShoppingIcon from '@/assets/svg/ShoppingIcon';
import TimeIcon from '@/assets/svg/TimeIcon';
import ProductInfoFooter from '@/components/product/product-info-footer/product-info-footer';
import Tag from '@/components/text/tag/tag';
import { BagInfoResponse } from '@/types/bag';
import { common } from '@/styles/common.css';
import { colors } from '@/styles/constant';
import * as styles from './styles.css';

export default function StoreListItem(
  props: { isSkeleton: true } | (BagInfoResponse & { isSkeleton?: false }),
) {
  const { isSkeleton } = props;

  if (isSkeleton) {
    return (
      <div>
        <div className={styles.thumbWrapper}>
          <div className={styles.thumbGrid}>
            <div className={styles.imageLeft} />
            <div className={styles.imageTopRight} />
            <div className={styles.imageBottomRight} />
          </div>
          <div className={styles.thumbContainer}>
            <div
              className={common.flexBox({
                direction: 'row',
                justify: 'between',
              })}
            >
              <div className={common.flexBox({ direction: 'row', gap: 5 })}>
                <Tag content="ㅤ" theme="gray" shadow />
                <Tag content="ㅤ" theme="gray" shadow />
              </div>
              <LikeIcon off />
            </div>
            <p className={styles.storeName}>ㅤ</p>
          </div>
        </div>
        <div style={{ height: '54.5px' }} />
      </div>
    );
  }

  const {
    id,
    storeName,
    images,
    onSale,
    amount,
    favorite,
    bagName,
    costPrice,
    salePrice,
    startAt,
    endAt,
  } = props;

  return (
    <div>
      <Link href={`/bag/${id}`} key={id}>
        <div className={styles.thumbWrapper}>
          <div className={styles.thumbGrid}>
            <Image
              alt={`${storeName}-thumb-01`}
              src={images[0]}
              className={styles.imageLeft}
              width={200}
              height={200}
            />
            <Image
              src={images[1] ?? images[0]}
              alt={`${storeName}-thumb-02`}
              className={styles.imageTopRight}
              width={200}
              height={200}
            />
            <Image
              src={images[2] ?? images[0]}
              alt={`${storeName}-thumb-03`}
              className={styles.imageBottomRight}
              width={200}
              height={200}
            />
            <div className={styles.gradientyOverlay} />
          </div>
          <div className={styles.thumbContainer}>
            <div
              className={common.flexBox({
                direction: 'row',
                justify: 'between',
              })}
            >
              <div className={common.flexBox({ direction: 'row', gap: 5 })}>
                <Tag
                  content={onSale ? '예약가능' : '예약불가'}
                  theme={onSale ? 'default' : 'gray'}
                  shadow
                />
                <Tag
                  content={amount > 0 ? `${amount}개 남음` : '재고 없음'}
                  theme={amount > 0 ? 'white' : 'gray'}
                  shadow
                />
              </div>
              {favorite ? <LikeIcon /> : <LikeIcon off />}
            </div>
            <p className={styles.storeName}>{storeName}</p>
          </div>
        </div>
        <ProductInfoFooter
          costPrice={costPrice ?? 0}
          salePrice={salePrice ?? 0}
          firstRow={{
            icon: <ShoppingIcon color={colors.black} />,
            text: bagName ?? '',
            color: 'black',
          }}
          secondRow={{
            icon: <TimeIcon />,
            text: `${startAt} ~ ${endAt}`,
          }}
        />
      </Link>
    </div>
  );
}
