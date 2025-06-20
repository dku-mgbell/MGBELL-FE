import StoreMarkerImage from '@/assets/images/map/store-marker.png';
import UserPositionMarkerImage from '@/assets/images/map/user-position-marker.png';
import { MapMarker } from '@/types/map';

export const generateMarker = ({
  lat,
  lng,
  name,
  isUserLocation,
  map,
}: MapMarker) => {
  let [markerWidth, markerHeight] = [32, 32];
  markerWidth = isUserLocation ? 32 : 32;
  markerHeight = isUserLocation ? 42 : 32;
  const markerImage = isUserLocation
    ? UserPositionMarkerImage.src
    : StoreMarkerImage.src;

  return new naver.maps.Marker({
    position: new naver.maps.LatLng(lat, lng),
    map,
    title: name,
    icon: {
      content: `<img src="${markerImage}" alt="" style="margin: 0px; padding: 0px; border: 0px solid transparent; display: block; max-width: none; max-height: none; -webkit-user-select: none; position: absolute; width: ${markerWidth}px; height: ${markerHeight}px; left: 0px; top: 0px;">`,
      size: new naver.maps.Size(markerWidth, markerHeight),
    },
  });
};

export const getUserCurrentPosition = (
  setPosition: (position: [number, number]) => void,
) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      setPosition([position.coords.latitude, position.coords.longitude]);
    });
  }
};
