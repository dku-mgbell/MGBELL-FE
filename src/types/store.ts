import { Coordinate } from './map';

export type StoreID = 'BAKERY' | 'DESERT' | 'ETC';

export const StoreName = {
  BAKERY: '베이커리',
  DESSERT: '디저트',
  ETC: '기타',
} as const;

export interface StoreRegistration extends Coordinate {
  name: string;
  storeName?: string;
  address: string;
  storeType: StoreID | null;
  // images: File[];
}
