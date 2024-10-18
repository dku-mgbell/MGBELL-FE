import { Coordinate } from './map';

export type StoreID = 'FOOD' | 'BAKERY' | 'CAFE' | 'DESERT' | 'ETC';

export const StoreName = {
  FOOD: '음식점',
  BAKERY: '베이커리',
  CAFE: '카페',
  DESSERT: '디저트',
  ETC: '기타',
} as const;

export interface StoreRegistration extends Coordinate {
  name: string;
  address: string;
  storeType: StoreID | null;
  // images: File[];
}
