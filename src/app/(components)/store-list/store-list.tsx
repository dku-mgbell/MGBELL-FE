import Link from 'next/link';
import { common } from '@/styles/common.css';
import ShoppingIcon from '@/assets/svg/ShoppingIcon';
import TimeIcon from '@/assets/svg/TimeIcon';
import { colors } from '@/styles/constant';
import LikeIcon from '@/assets/svg/LikeIcon';
import { useGetBagList } from '@/hooks/query/store/useGetBagList';
import { BagInfoResponse } from '@/types/bag';
import { Intersection } from '@/components/intersection/intersection';
import Tag from '@/components/text/tag/tag';
import ProductInfoContainer from '@/components/product/info-container/ProductInfoContainer';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import Thumbnail from '../../../mocks/thumbnail.png';
import * as styles from './styles.css';

export default function StoreList() {
  const bagListState = useGetBagList({ size: 5 });
  const { list, intersection, isFetching } =
    useInfiniteScroll<BagInfoResponse>(bagListState);

  return (
    <main className={styles.main}>
      {!isFetching &&
        list!.map(
          ({
            id,
            amount,
            isLike,
            costPrice,
            salePrice,
            storeName,
            bagName,
            onSale,
            startAt,
            endAt,
          }) => (
            <Link href={`/bag/${id}`} key={id}>
              <div className={styles.thumbWrapper}>
                <div className={styles.thumbGrid}>
                  <img src={Thumbnail.src} className={styles.imageLeft} />
                  <img src={Thumbnail.src} className={styles.imageTopRight} />
                  <img
                    src={Thumbnail.src}
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
                    <div
                      className={common.flexBox({ direction: 'row', gap: 5 })}
                    >
                      <Tag
                        content={onSale ? '예약 가능' : '예약 불가능'}
                        theme={onSale ? 'default' : 'gray'}
                      />
                      <Tag content={`${amount ?? 0}개 남음`} theme="white" />
                    </div>
                    {isLike ? <LikeIcon /> : <LikeIcon off />}
                  </div>
                  <p className={styles.storeName}>{storeName}</p>
                </div>
              </div>
              <ProductInfoContainer
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
