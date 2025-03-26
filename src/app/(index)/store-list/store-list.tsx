'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import LikeIcon from '@/assets/svg/LikeIcon';
import ShoppingIcon from '@/assets/svg/ShoppingIcon';
import TimeIcon from '@/assets/svg/TimeIcon';
import { Intersection } from '@/components/intersection/intersection';
import ProductInfoFooter from '@/components/product/product-info-footer/product-info-footer';
import Tag from '@/components/text/tag/tag';
import { useGetBagInfiniteList } from '@/hooks/query/bag/useGetBagInfiniteList';
import { useAuthStore } from '@/hooks/stores/useAuthStore';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { common } from '@/styles/common.css';
import { colors } from '@/styles/constant';
import { BagInfoResponse } from '@/types/bag';
import { useQueryClient } from '@tanstack/react-query';

import * as styles from './styles.css';

export default function StoreList() {
  const { isLoggedIn } = useAuthStore();
  const searchParams = useSearchParams();
  const sortedBy = searchParams.get('sort') ?? '';
  const searchKeyword = searchParams.get('search') ?? '';

  const queryClient = useQueryClient();
  const bagListState = useGetBagInfiniteList({
    isLoggedIn: isLoggedIn ?? false,
    size: 5,
    sortedBy,
    searchKeyword,
  });
  const { list, intersection, isLoading } =
    useInfiniteScroll<BagInfoResponse>(bagListState);

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ['bag-list'] });
  }, [searchParams]);
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
