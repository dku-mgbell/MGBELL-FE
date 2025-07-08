import { PageParams } from './api';
import { BagRegistrationRequest } from './bag';
import { ImageRequest } from './image';

export type StoreListSortType =
  | 'RECENT_DESC'
  | 'PRICE_ASC'
  | 'DISTANCE_ASC'
  | 'RATING_DESC'
  | 'AVAILABLE';

export interface StoreListRequestParams extends PageParams {
  latitude?: number | null;
  longitude?: number | null;
  keyword?: string | null;
  sortType: StoreListSortType;
  onlyAvailable?: boolean | null;
}

export interface StoreListItemResponse {
  storeId: string;
  storeName: string;
  ImageUrl: string[];
  goodsName: string | null;
  startTime: string;
  endTime: string;
  originPrice: number;
  discount: number;
  salePrice: number;
  quantity: number;
  distance: number | null;
  saleStatus: 'ON' | 'OFF';
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
    storePreSignedUrlImages: {
      id: number;
      url: string;
    }[];
  };
}
export interface StoreDetailWithBag extends BagRegistrationRequest {
  storeId: string;
  goodsId: string;
  storeName: string;
  address: string;
  images: string[];
  saleStatus: 'ON' | 'OFF';
}
