import { Coordinate } from './map';

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
}

export interface BagDetail extends BagInfoResponse {
  storeId: number;
  description: string;
}

export interface ProductInfoContainerProps
  extends Omit<
    BagInfoResponse,
    | 'bagName'
    | 'description'
    | 'latitude'
    | 'longitude'
    | 'favorite'
    | 'id'
    | 'reviewCnt'
    | 'images'
  > {
  reviewCnt?: number;
}

export interface BagInfoPageResponse {
  pageParams: number[];
  pages: BagInfoResponse[][];
}
