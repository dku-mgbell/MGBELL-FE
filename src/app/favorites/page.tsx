'use client';

import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/navigation';
import { Intersection } from '@/components/intersection/intersection';
import HeaderLayout from '@/components/layout/header-layout/header-layout';
import ProductInfoThumbContainer from '@/components/product/product-info-thumb-container/product-info-thumb-container';
import { useGetUserFavoriteList } from '@/hooks/query/favorite/useGetUserFavoriteList';
import { useBagHistoryStore } from '@/hooks/stores/useBagHistoryStore';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { BagInfoResponse } from '@/types/bag';
import 'swiper/css';
import 'swiper/css/pagination';
import './swiper-styles.css';
import * as styles from './styles.css';

export default function Page() {
  const bagListState = useGetUserFavoriteList({ size: 5 });
  const route = useRouter();
  const {
    list: favoriteList,
    intersection,
    isLoading,
  } = useInfiniteScroll<BagInfoResponse>(bagListState);
  const { bagHistory } = useBagHistoryStore();

  if (isLoading) return <> </>;
  return (
    <HeaderLayout title="즐겨찾기">
      <Swiper
        className="screen-swiper"
        pagination={{
          clickable: true,
        }}
        spaceBetween={30}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <div className={styles.container}>
            {!favoriteList!.length && (
              <p className={styles.emptyMessage}>찜한 매장이 없어요!</p>
            )}
            {favoriteList?.map((data) => (
              <div className={styles.listItem} key={`favorite-${data.id}`}>
                <ProductInfoThumbContainer
                  info={data}
                  onClick={() => route.push(`/bag/${data.id}`)}
                />
              </div>
            ))}
          </div>
          <Intersection ref={intersection} />
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.container}>
            {!bagHistory.length && (
              <p className={styles.emptyMessage}>최근 본 매장이 없어요!</p>
            )}
            {bagHistory?.map((data) => (
              <div className={styles.listItem} key={`bag-history-${data.id}`}>
                <ProductInfoThumbContainer
                  info={data}
                  onClick={() => route.push(`/bag/${data.id}`)}
                />
              </div>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </HeaderLayout>
  );
}
