import Link from 'next/link';
import { storeList } from '@/mocks/storeList';
import { common } from '@/styles/common.css';
import { commaizeNumber } from '@/utils/commaizeNumber';
import ShoppingIcon from '@/assets/svg/ShoppingIcon';
import TimeIcon from '@/assets/svg/TimeIcon';
import { colors } from '@/styles/constant';
import LikeIcon from '@/assets/svg/LikeIcon';
import * as styles from './styles.css';

export default function StoreList() {
  return (
    <main className={styles.main}>
      {storeList.map(
        ({
          id,
          onSale,
          remain,
          isLike,
          thumbnail,
          startAt,
          endAt,
          costPrice,
          salePrice,
          storeName,
          bagName,
        }) => (
          <Link href={`/bag/${id}`} key={id}>
            <div className={styles.thumbWrapper}>
              <div className={styles.thumbGrid}>
                <img src={thumbnail.src} className={styles.imageLeft} />
                <img src={thumbnail.src} className={styles.imageTopRight} />
                <img src={thumbnail.src} className={styles.imageBottomRight} />
              </div>
              <div className={styles.thumbContainer}>
                <div
                  className={common.flexBox({
                    direction: 'row',
                    justify: 'between',
                  })}
                >
                  <div className={common.flexBox({ direction: 'row', gap: 5 })}>
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
                  ₩ {commaizeNumber(costPrice)}원
                </s>
              </div>
              <div className={styles.flexRowBetween}>
                <p className={styles.text({ color: 'gray' })}>
                  <TimeIcon />
                  {startAt} ~ {endAt}
                </p>
                <p className={styles.text({ color: 'red' })}>
                  ₩ {commaizeNumber(salePrice)}원
                </p>
              </div>
            </div>
          </Link>
        ),
      )}
    </main>
  );
}
