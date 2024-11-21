import { Coordinate } from './map';

export type StoreID = 'BAKERY' | 'DESERT' | 'ETC';

export const StoreName = {
  BAKERY: '베이커리',
  DESSERT: '디저트',
  ETC: '기타',
} as const;

export interface StoreRegistration extends Coordinate {
  ownerName: string;
  storeName: string;
  contact: string;
  businessRegiNum: string;
  address: string;
  storeType: StoreID | null;
  images: File[];
}

export interface MyStoreInfo {
  id: 0;
  storeName: string;
  businessRegiNum: string;
  address: string;
  longitude: string;
  latitude: string;
  storeType: StoreID;
  status: 'ACTIVE' | 'INACTIVE';
  onSale: boolean;
  originalFileDir: string[];
}

export interface StorePatch {
  request: {
    storeName: string;
    ownerName: string;
    contact: string;
    address: string;
    longitude: string;
    latitude: string;
    storeType: StoreID;
  };
  images: string[];
}
