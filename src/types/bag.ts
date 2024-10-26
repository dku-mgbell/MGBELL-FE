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
  remain: number;
  isLike: boolean;
  address: string;
}

export interface BagInfoPageResponse {
  pageParams: number[];
  pages: BagInfoResponse[][];
}
