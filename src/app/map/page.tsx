'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useGetBagList as useGetStoreList } from '@/hooks/query/bag/useGetBagList';
import { BagInfoResponse as StoreInfoResponse } from '@/types/bag';
import useModal from '@/hooks/useModal';
import DetailBottomSheet from './(components)/detail-bottom-sheet';
import ListBottomSheet from './(components)/list-bottom-sheet';
import LocationButton from './(components)/location-button';
import { useMapStore } from './useMapStore';
import { generateMarker, getUserCurrentPosition } from './utils';

export default function Map() {
  const [isDetailBottomSheetOpen, setIsDetailBottomSheetOpen] = useState(false);
  const [userLocation, setUserLocation] = useState<[number, number]>();
  const mapRef = useRef<naver.maps.Map | null>(null);
  const { data: storeList, isFetched: isStoreListFetched } = useGetStoreList({
    page: 0,
    size: 100,
  });
  const storeListOnMap = storeList?.pages[0];
  const { selectedStore, setSelectedStore } = useMapStore();

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
    store: StoreInfoResponse,
    coord: [number, number],
  ) => {
    const [lat, lng] = coord;
    setSelectedStore(store);
    if (mapRef.current) {
      const map = mapRef.current;
      const position = new naver.maps.LatLng(lat, lng);

      map.morph(position, 18);
    }
  };

  const loadMap = () => {
    const defaultCoord = [36.5, 127.8];
    const coord = userLocation || defaultCoord;

    const mapOptions = {
      center: new naver.maps.LatLng(coord[0], coord[1]),
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
      storeListOnMap.forEach((store: StoreInfoResponse) => {
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

  useEffect(() => {
    setIsDetailBottomSheetOpen(true);
  }, [selectedStore]);

  useEffect(() => {
    if (!isDetailBottomSheetOpen) {
      setSelectedStore(undefined);
    }
  }, [isDetailBottomSheetOpen]);

  return (
    <div id="map" className="w-full h-[100dvh]">
      <LocationButton onClick={morphToCurrentPosition} />
      <ListBottomSheet map={loadedMap!} setSelectedStore={setSelectedStore} />
      {selectedStore && (
        <DetailBottomSheet
          info={selectedStore}
          isOpen={isDetailBottomSheetOpen}
          setOpen={setIsDetailBottomSheetOpen}
        />
      )}
    </div>
  );
}
