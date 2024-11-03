'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/navigation';
import { Pagination } from 'swiper/modules';
import HeaderLayout from '@/components/layout/header-layout/header-layout';
import { useGetUserFavoriteList } from '@/hooks/query/favorite/useGetUserFavoriteList';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { BagInfoResponse } from '@/types/bag';
import { Intersection } from '@/components/intersection/intersection';
import ProductInfoThumbContainer from '@/components/product/product-info-thumb-container/product-info-thumb-container';
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

  if (isLoading) return <> </>;
  return (
    <HeaderLayout title="즐겨찾기">
      <Swiper
        className="screen-swiper"
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <div className={styles.container}>
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
        <SwiperSlide>최근</SwiperSlide>
      </Swiper>
    </HeaderLayout>
  );
}
