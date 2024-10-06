import Link from 'next/link';
import { common } from '@/styles/common.css';
import { commaizeNumber } from '@/utils/commaizeNumber';
import ShoppingIcon from '@/assets/svg/ShoppingIcon';
import TimeIcon from '@/assets/svg/TimeIcon';
import { colors } from '@/styles/constant';
import LikeIcon from '@/assets/svg/LikeIcon';
import { useGetBagList } from '@/hooks/query/store/useGetBagList';
import { BagInfoResponse } from '@/types/bag';
import { Intersection } from '@/components/intersection/intersection';
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
            remain,
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
                      <span
                        className={styles.tag({
                          theme: onSale ? 'default' : 'gray',
                        })}
                      >
                        {onSale ? '예약 가능' : '예약 불가능'}
                      </span>
                      <span className={styles.tag({ theme: 'white' })}>
                        {remain}개 남음
                      </span>
                    </div>
                    {isLike ? <LikeIcon /> : <LikeIcon off />}
                  </div>
                  <p className={styles.storeName}>{storeName}</p>
                </div>
              </div>
              <div className={styles.infoContainer}>
                <div className={styles.flexRowBetween}>
                  <p className={styles.text()}>
                    <ShoppingIcon color={colors.black} />
                    {bagName}
                  </p>
                  <s className={styles.text({ color: 'gray' })}>
                    ₩ {commaizeNumber(costPrice!)}원
                  </s>
                </div>
                <div className={styles.flexRowBetween}>
                  <p className={styles.text({ color: 'gray' })}>
                    <TimeIcon />
                    {startAt} ~ {endAt}
                  </p>
                  <p className={styles.text({ color: 'red' })}>
                    ₩ {commaizeNumber(salePrice!)}원
                  </p>
                </div>
              </div>
            </Link>
          ),
        )}
      <Intersection ref={intersection} />
    </main>
  );
}
