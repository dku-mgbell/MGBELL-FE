'use client';

import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Intersection } from '@/components/intersection/intersection';
import { StoreList } from '@/components/store/list';
import { useGetUserFavoriteList } from '@/hooks/query/favorite/useGetUserFavoriteList';
import { useBagHistoryStore } from '@/hooks/stores/useBagHistoryStore';
import { BagInfoResponse } from '@/types/bag';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import 'swiper/css';
import 'swiper/css/pagination';
import './swiper-styles.css';
import { Favorite } from './content';

export default function Page() {
  const bagListState = useGetUserFavoriteList({ size: 5 });
  const {
    list: favoriteList,
    intersection,
    isLoading,
  } = useInfiniteScroll<BagInfoResponse>(bagListState);
  const { bagHistory } = useBagHistoryStore();

  if (isLoading) return <> </>;

  return (
    <Swiper
      className="screen-swiper"
      pagination={{
        clickable: true,
      }}
      spaceBetween={30}
      modules={[Pagination]}
    >
      <SwiperSlide>
        <Favorite.SlideContainer>
          {favoriteList!.length === 0 ? (
            <Favorite.Empty />
          ) : (
            <div>
              <StoreList.Container>
                {favoriteList?.map((item) => (
                  <StoreList.Item key={`favorite-${item.id}`} data={item} />
                ))}
              </StoreList.Container>
              <Intersection ref={intersection} />
            </div>
          )}
        </Favorite.SlideContainer>
        <Intersection ref={intersection} />
      </SwiperSlide>
      <SwiperSlide>
        <Favorite.SlideContainer>
          {!bagHistory.length && <Favorite.Empty />}
          <div>
            <StoreList.Container>
              {bagHistory?.map((item) => (
                <StoreList.Item key={`bag-history-${item.id}`} data={item} />
              ))}
            </StoreList.Container>
            <Intersection ref={intersection} />
          </div>
        </Favorite.SlideContainer>
      </SwiperSlide>
    </Swiper>
  );
}
