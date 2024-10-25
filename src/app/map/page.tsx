'use client';

import React, { useEffect, useState } from 'react';
import { MapMarker } from '@/types/map';
import markerImg from '@/assets/images/map/marker.png';
import pinImg from '@/assets/images/map/pin.png';
import BackButton from '@/components/button/back-button/back-button';
import { BagInfoResponse as StoreListResponse } from '@/types/bag';
import { useGetBagList as useGetStoreList } from '@/hooks/query/bag/useGetBagList';
import LocationButton from './(components)/location-button';
import ListBottomSheet from './(components)/list-bottom-sheet/list-bottom-sheet';
import DetailBottomSheet from './(components)/detail-bottom-sheet/detail-bottom-sheet';
import * as styles from './styles.css';

export default function Map() {
  // const [isOpen, setOpen] = useState(false);
  const [selectedStore] = useState<StoreListResponse>();
  const [userLocation, setUserLocation] = useState([
    37.3214151882177, 127.110106750383,
  ]);
  const { data: storeList, isFetched: storeListFetched } = useGetStoreList({
    page: 0,
    size: 100,
  });
  const [storeListOnMap, setStoreListOnMap] = useState<StoreListResponse[]>();

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

  useEffect(() => {
    if (storeListFetched) {
      setStoreListOnMap(storeList!.pages[0]);
    }
  }, [storeList]);

  const loadMap = () => {
    const mapOptions = {
      center: new naver.maps.LatLng(userLocation[0], userLocation[1]),
      zoom: 17,
    };
    const map = new naver.maps.Map('map', mapOptions);
    const markerSize = 60;
    // naver.maps.Event.addListener(map, 'zoom_changed', function (zoom) {
    //   if (zoom < 17) {
    //     markerSize = 10;
    //   }
    // });
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
      storeListOnMap.forEach(({ storeName, latitude, longitude, address }) => {
        const [lat, lng] = [Number(latitude), Number(longitude)];
        const marker = generateMarker(
          { name: storeName, lat, lng, address },
          { isUserLocation: false },
        );
        naver.maps.Event.addListener(marker, 'click', () => {
          // setSelectedStore({ name, lat, lng, address });
          // setOpen(true);
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

  return (
    <div id="map" className={styles.container}>
      <BackButton />
      <LocationButton onClick={handleUserLocation} />
      <ListBottomSheet />
      {selectedStore && <DetailBottomSheet info={selectedStore} />}
    </div>
  );
}
