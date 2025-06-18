import { ImageRequest } from './image';
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

export interface StoreRegistrationFormRequest {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  ownerName: string;
  ownerPhone: string;
  businessNumber: string;
  bankName: string;
  bankAccount: string;
  detailAddress?: string;
  storeImagesRegisters: ImageRequest[];
  images: File[];
}

export type StoreRegistrationRequest = Omit<
  StoreRegistrationFormRequest,
  'images' | 'detailAddress'
>;

export interface StoreRegistrationResponse {
  data: {
    preSignedUrlImages: {
      id: number;
      url: string;
    }[];
  };
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
