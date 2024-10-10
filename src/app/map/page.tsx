'use client';

import React, { useEffect, useState } from 'react';
import { Sheet } from 'react-modal-sheet';
import { MapMarker } from '@/types/map';
import markerImg from '@/assets/images/map/marker1.png';
import ProductInfoContainer from '@/components/product/info-container/ProductInfoContainer';
import TimeIcon from '@/assets/svg/TimeIcon';
import StarIcon from '@/assets/svg/StarIcon';
import Tag from '@/components/text/tag/tag';
import { data } from './data';
import * as styles from './styles.css';
import LocationButton from './(components)/location-button';

const [DEFAULT_LAT, DEFAULT_LNG] = [37.3214151882177, 127.110106750383];

export default function Map() {
  const [isOpen, setOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState<MapMarker>();
  const loadMap = () => {
    const mapOptions = {
      center: new naver.maps.LatLng(DEFAULT_LAT, DEFAULT_LNG),
      zoom: 17,
    };
    const map = new naver.maps.Map('map', mapOptions);
    const markerSize = 60;
    // naver.maps.Event.addListener(map, 'zoom_changed', function (zoom) {
    //   if (zoom < 17) {
    //     markerSize = 10;
    //   }
    // });
    const generateMarker = ({ lat, lng, name }: Omit<MapMarker, 'address'>) =>
      new naver.maps.Marker({
        position: new naver.maps.LatLng(lat, lng),
        map,
        title: name,
        icon: {
          url: markerImg.src,
          size: new naver.maps.Size(markerSize, markerSize),
        },
      });

    data.forEach(({ name, lat, lng, address }) => {
      const marker = generateMarker({ name, lat, lng });

      naver.maps.Event.addListener(marker, 'click', () => {
        setSelectedStore({ name, lat, lng, address });
        setOpen(true);
        map.morph(new naver.maps.LatLng(lat, lng), 17);
      });
    });
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
  }, []);

  return (
    <div id="map" style={{ width: '100%', height: '100dvh' }}>
      <button
        type="button"
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 9999 }}
        onClick={() => loadMap()}
      >
        button
      </button>
      <LocationButton />
      <Sheet
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        snapPoints={[200, 0]}
      >
        <Sheet.Backdrop
          onTap={() => {
            setOpen(false);
          }}
          style={{ backgroundColor: 'transparent' }}
        />
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <div className={styles.modalContainer}>
              <header className={styles.modalHeader}>
                <strong>{selectedStore?.name}</strong>
                <div className={styles.tagContainer}>
                  <Tag content="영업 중" theme="primary" />
                  <Tag content="4개 남음" />
                </div>
              </header>
              <p className={styles.address}>{selectedStore?.address}</p>
              <ProductInfoContainer
                salePrice={100}
                costPrice={100}
                firstRow={{
                  icon: <TimeIcon width={20} height={19.2} />,
                  text: '17:00 ~ 19:00',
                }}
                secondRow={{ icon: <StarIcon />, text: '4.9' }}
                rowGap={2}
              />
            </div>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </div>
  );
}
