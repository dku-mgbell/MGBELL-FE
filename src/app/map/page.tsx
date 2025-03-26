'use client';

import React, { useEffect, useState } from 'react';
import markerImg from '@/assets/images/map/marker.png';
import pinImg from '@/assets/images/map/pin.png';
import BackButton from '@/components/button/back-button/back-button';
import { useGetBagList as useGetStoreList } from '@/hooks/query/bag/useGetBagList';
import { BagInfoResponse as StoreInfoResponse } from '@/types/bag';
import { MapMarker } from '@/types/map';
import DetailBottomSheet from './(components)/detail-bottom-sheet/detail-bottom-sheet';
import ListBottomSheet from './(components)/list-bottom-sheet/list-bottom-sheet';
import LocationButton from './(components)/location-button';
import * as styles from './styles.css';

const DEFAULT_COORD = [37.3214151882177, 127.110106750383];

export default function Map() {
  const [isOpen, setOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState<StoreInfoResponse>();
  const [userLocation, setUserLocation] = useState(DEFAULT_COORD);
  const { data: storeList, isFetched: storeListFetched } = useGetStoreList({
    page: 0,
    size: 100,
  });
  const [storeListOnMap, setStoreListOnMap] = useState<StoreInfoResponse[]>();
  const [storeMap, setStoreMap] = useState<naver.maps.Map>();

  // 사용자 현위치 조회
  const handleUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation([position.coords.latitude, position.coords.longitude]);
      });
    }
  };
  useEffect(() => {
    handleUserLocation();
  }, []);

  // 매장 리스트 조회
  useEffect(() => {
    if (storeListFetched) {
      setStoreListOnMap(storeList!.pages[0]);
    }
  }, [storeList]);

  const loadMap = () => {
    const mapOptions = {
      center: new naver.maps.LatLng(userLocation[0] - 0.001, userLocation[1]),
      zoom: 17,
    };
    const map = new naver.maps.Map('map', mapOptions);
    const markerSize = 60;

    setStoreMap(map);

    const generateMarker = (
      { lat, lng, name }: MapMarker,
      { isUserLocation }: { isUserLocation: boolean },
    ) =>
      new naver.maps.Marker({
        position: new naver.maps.LatLng(lat, lng),
        map,
        title: name,
        icon: {
          url: isUserLocation ? pinImg.src : markerImg.src,
          size: new naver.maps.Size(markerSize, markerSize),
        },
      });

    // 현위치 핀 표시
    generateMarker(
      {
        name: 'user-location',
        lat: userLocation[0],
        lng: userLocation[1],
        address: '',
      },
      { isUserLocation: true },
    );

    // 매장 위치 마커 표시
    if (storeListOnMap) {
      storeListOnMap.forEach((store: StoreInfoResponse) => {
        const [name, lat, lng, address] = [
          store.storeName,
          Number(store.latitude),
          Number(store.longitude),
          store.address,
        ];
        const marker = generateMarker(
          { name, lat, lng, address },
          { isUserLocation: false },
        );
        naver.maps.Event.addListener(marker, 'click', () => {
          setSelectedStore(store);
          map.morph(new naver.maps.LatLng(lat, lng));
        });
      });
    }
  };

  useEffect(() => {
    if (window.naver && window.naver.maps) {
      loadMap();
    } else {
      const mapScript = document.createElement('script');
      mapScript.onload = () => loadMap();
      mapScript.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`;
      document.head.appendChild(mapScript);
    }
  }, [userLocation, storeListOnMap]);

  useEffect(() => {
    setOpen(true);
  }, [selectedStore]);

  useEffect(() => {
    if (!isOpen) setSelectedStore(undefined);
  }, [isOpen]);

  return (
    <div id="map" className={styles.container}>
      <BackButton />
      <LocationButton onClick={handleUserLocation} />
      <ListBottomSheet map={storeMap!} setSelectedStore={setSelectedStore} />
      {selectedStore && (
        <DetailBottomSheet
          info={selectedStore}
          isOpen={isOpen}
          setOpen={setOpen}
        />
      )}
    </div>
  );
}
