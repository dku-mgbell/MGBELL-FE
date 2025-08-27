'use client';

import React from 'react';
import { ClipLoader } from 'react-spinners';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Intersection } from '@/components/intersection/intersection';
import { StoreList } from '@/components/store/list';
import { useGetUserFavoriteList } from '@/hooks/query/favorite/useGetUserFavoriteList';
import { useUserHistoryStore } from '@/hooks/stores/useUserHistoryStore';
import { StoreListItemResponse } from '@/types/store';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { colors } from '@/styles/constant';
import 'swiper/css';
import 'swiper/css/pagination';
import './swiper-styles.css';
import { Favorite } from './content';

export default function Page() {
  const bagListState = useGetUserFavoriteList({ size: 5 });
  const {
    list: favoriteList,
    intersection,
    isFetched,
    isLoading,
  } = useInfiniteScroll<StoreListItemResponse>(bagListState);
  const { recentViewedStoreList } = useUserHistoryStore();

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
          {isLoading && (
            <div className="absolute-center">
              <ClipLoader color={colors.primary} />
            </div>
          )}
          {isFetched &&
            (favoriteList!.length === 0 ? (
              <Favorite.Empty />
            ) : (
              <div>
                <StoreList.Container>
                  {favoriteList?.map((item) => (
                    <StoreList.Item
                      key={`favorite-${item.storeId}`}
                      data={item}
                    />
                  ))}
                </StoreList.Container>
                <Intersection ref={intersection} />
              </div>
            ))}
        </Favorite.SlideContainer>
        <Intersection ref={intersection} />
      </SwiperSlide>
      <SwiperSlide>
        <Favorite.SlideContainer>
          {recentViewedStoreList!.length === 0 ? (
            <Favorite.Empty />
          ) : (
            <div>
              <StoreList.Container>
                {recentViewedStoreList?.map((item) => (
                  <StoreList.Item
                    key={`recent-viewed-${item.storeId}`}
                    data={item}
                  />
                ))}
              </StoreList.Container>
              <Intersection ref={intersection} />
            </div>
          )}
        </Favorite.SlideContainer>
      </SwiperSlide>
    </Swiper>
  );
}
