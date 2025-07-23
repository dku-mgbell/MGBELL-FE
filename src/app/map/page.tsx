'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useGetStoreList } from '@/hooks/query/store/useGetStoreList';
import { StoreListItemResponse } from '@/types/store';
import useModal from '@/hooks/useModal';
import DetailBottomSheet from './_components/detail-bottom-sheet';
import ListBottomSheet from './_components/list-bottom-sheet';
import LocationButton from './_components/location-button';
import StoreSearchInput from './_components/store-search-input';
import { DEFAULT_COORD } from './_constant/map';
import { useMapStore } from './_stores/useMapStore';
import { generateMarker, getUserCurrentPosition } from './_utils/map';

export default function Map() {
  const mapRef = useRef<naver.maps.Map | null>(null);
  const { data: storeListOnMap, isFetched: isStoreListFetched } =
    useGetStoreList({
      size: 100,
      sortType: 'RECENT_DESC',
    });
  const {
    setSelectedStore,
    setIsListSheetHidden,
    userLocation,
    setUserLocation,
  } = useMapStore();
  const [loadedMap, setLoadedMap] = useState<naver.maps.Map | null>(null);

  const { open } = useModal();

  const markCurrentPosition = () => {
    getUserCurrentPosition((position) => {
      setUserLocation(position);
    });
  };

  useEffect(() => {
    markCurrentPosition();
  }, []);

  const morphToCurrentPosition = useCallback(() => {
    if (userLocation) {
      mapRef.current?.morph(
        new naver.maps.LatLng(userLocation[0], userLocation[1]),
      );
    } else {
      open({
        content: '위치 접근 권한이 필요합니다.',
      });
    }
  }, [userLocation]);

  const handleStoreClick = (
    store: StoreListItemResponse,
    coord: [number, number],
  ) => {
    const [lat, lng] = coord;
    setSelectedStore(store);
    if (mapRef.current) {
      const map = mapRef.current;
      const position = new naver.maps.LatLng(lat - 0.0005, lng);

      map.morph(position, 18);
    }
  };

  const loadMap = () => {
    const coord = userLocation || DEFAULT_COORD;

    const mapOptions = {
      center: new naver.maps.LatLng(coord[0] - 0.7, coord[1]),
      zoom: 7,
    };
    const map = new naver.maps.Map('map', mapOptions);
    mapRef.current = map;
    setLoadedMap(map);

    // 현위치 핀 표시
    if (userLocation) {
      generateMarker({
        name: 'user-location',
        lat: coord[0],
        lng: coord[1],
        address: '',
        isUserLocation: true,
        map,
      });
    }

    // 매장 위치 마커 표시
    if (storeListOnMap) {
      storeListOnMap.forEach((store: StoreListItemResponse) => {
        const [lat, lng] = [Number(store.latitude), Number(store.longitude)];
        const marker = generateMarker({
          name: store.storeName,
          address: store.address,
          lat,
          lng,
          map,
        });
        naver.maps.Event.addListener(marker, 'click', () => {
          handleStoreClick(store, [lat, lng]);
          setIsListSheetHidden(true);
        });
      });
    }
  };

  useEffect(() => {
    if (
      window &&
      window.naver &&
      window.naver.maps &&
      isStoreListFetched &&
      userLocation
    ) {
      loadMap();
    } else {
      const mapScript = document.createElement('script');
      mapScript.onload = () => loadMap();
      mapScript.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`;
      document.head.appendChild(mapScript);
    }
  }, [isStoreListFetched, userLocation]);

  return (
    <div id="map" className="w-full h-[100dvh]">
      <StoreSearchInput />
      <ListBottomSheet
        map={loadedMap!}
        locationButton={<LocationButton onClick={morphToCurrentPosition} />}
      />
      <DetailBottomSheet />
    </div>
  );
}
