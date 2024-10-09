'use client';

import React, { useEffect } from 'react';
import { MapMarker } from '@/types/map';
import marker from '@/assets/images/map/marker.png';
import { data } from './data';

const [DEFAULT_LAT, DEFAULT_LNG] = [37.3214151882177, 127.110106750383];
export default function Map() {
  useEffect(() => {
    const loadMap = () => {
      const mapOptions = {
        center: new naver.maps.LatLng(DEFAULT_LAT, DEFAULT_LNG),
        zoom: 17,
      };
      const map = new naver.maps.Map('map', mapOptions);
      const generateMarker = ({ lat, lng, name }: Omit<MapMarker, 'address'>) =>
        new naver.maps.Marker({
          position: new naver.maps.LatLng(lat, lng),
          map,
          title: name,
          icon: marker.src,
        });

      data.forEach(({ name, lat, lng }) => {
        generateMarker({ name, lat, lng });
      });
    };

    if (window.naver && window.naver.maps) {
      loadMap();
    } else {
      const mapScript = document.createElement('script');
      mapScript.onload = () => loadMap();
      mapScript.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`;
      document.head.appendChild(mapScript);
    }
  }, []);

  return <div id="map" style={{ width: '100%', height: '100dvh' }} />;
}
