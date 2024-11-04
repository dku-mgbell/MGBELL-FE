import Link from 'next/link';
import { common } from '@/styles/common.css';
import ShoppingIcon from '@/assets/svg/ShoppingIcon';
import TimeIcon from '@/assets/svg/TimeIcon';
import { colors } from '@/styles/constant';
import LikeIcon from '@/assets/svg/LikeIcon';
import { useGetBagInfiniteList } from '@/hooks/query/bag/useGetBagInfiniteList';
import { BagInfoResponse } from '@/types/bag';
import { Intersection } from '@/components/intersection/intersection';
import Tag from '@/components/text/tag/tag';
import ProductInfoFooter from '@/components/product/product-info-footer/product-info-footer';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import * as styles from './styles.css';

export default function StoreList() {
  const bagListState = useGetBagInfiniteList({ size: 5 });
  const { list, intersection, isLoading } =
    useInfiniteScroll<BagInfoResponse>(bagListState);

  if (isLoading) return <> </>;

  return (
    <main className={styles.main}>
      {list!.map(
        ({
          id,
          amount,
          favorite,
          costPrice,
          salePrice,
          storeName,
          bagName,
          onSale,
          startAt,
          endAt,
          images,
        }) => (
          <Link href={`/bag/${id}`} key={id}>
            <div className={styles.thumbWrapper}>
              <div className={styles.thumbGrid}>
                <img src={images[0]} className={styles.imageLeft} />
                <img
                  src={images[1] ?? images[0]}
                  className={styles.imageTopRight}
                />
                <img
                  src={images[2] ?? images[0]}
                  className={styles.imageBottomRight}
                />
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
                    />
                    <Tag
                      content={amount > 0 ? `${amount}개 남음` : '재고 없음'}
                      theme={amount > 0 ? 'white' : 'gray'}
                    />
                  </div>
                  {favorite ? <LikeIcon /> : <LikeIcon off />}
                </div>
                <p className={styles.storeName}>{storeName}</p>
              </div>
            </div>
            <ProductInfoFooter
              costPrice={costPrice!}
              salePrice={salePrice!}
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
        ),
      )}
      <Intersection ref={intersection} />
    </main>
  );
}
