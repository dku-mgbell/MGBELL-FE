'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useGetStoreList } from '@/hooks/query/store/useGetStoreList';
import { StoreListItemResponse } from '@/types/store';
import useModal from '@/hooks/useModal';
import DetailBottomSheet from './_components/detail-bottom-sheet';
import ListBottomSheet from './_components/list-bottom-sheet';
import LocationButton from './_components/location-button';
import { DEFAULT_COORD } from './_constant/map';
import { useMapStore } from './_stores/useMapStore';
import { generateMarker, getUserCurrentPosition } from './_utils/map';

export default function Map() {
  const [userLocation, setUserLocation] = useState<[number, number]>();
  const mapRef = useRef<naver.maps.Map | null>(null);
  const { data: storeListOnMap, isFetched: isStoreListFetched } =
    useGetStoreList({
      size: 100,
      sortType: 'RECENT_DESC',
    });
  const { setSelectedStore, setIsListSheetHidden } = useMapStore();
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
        18,
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
        // const [lat, lng] = [Number(store.latitude), Number(store.longitude)];
        const [lat, lng] = [33 + Math.random() * 5, 126 + Math.random() * 3]; // TODO: 매장 좌표 추가
        const marker = generateMarker({
          name: store.storeName,
          address: '경기도 용인시 수지구 죽전로 77 1층', // TODO: 매장 주소 추가
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
      mapScript.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`;
      document.head.appendChild(mapScript);
    }
  }, [isStoreListFetched, userLocation]);

  return (
    <div id="map" className="w-full h-[100dvh]">
      <LocationButton onClick={morphToCurrentPosition} />
      <ListBottomSheet map={loadedMap!} />
      <DetailBottomSheet map={loadedMap!} />
    </div>
  );
}
