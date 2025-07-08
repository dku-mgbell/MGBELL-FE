import { Coordinate } from './map';

export interface BagRegistrationRequest {
  description: string;
  startTime: string;
  endTime: string;
  quantity: number;
  originalPrice: number;
  discount: number;
  salePrice: number;
}

export interface BagInfo {
  bagName: string | null;
  description: string | null;
  costPrice: number | undefined;
  salePrice: number | undefined;
  amount: number;
  onSale: boolean;
  startAt: string;
  endAt: string;
}

export interface BagInfoResponse extends BagInfo, Coordinate {
  id: number;
  storeName: string;
  favorite: boolean;
  address: string;
  images: string[];
  reviewCnt: number;
  image?: string;
}

export interface BagDetail extends BagInfoResponse {
  storeId: number;
  description: string;
}
