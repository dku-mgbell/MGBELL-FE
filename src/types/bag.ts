export interface BagInfo {
  bagName: string | null;
  description: string | null;
  costPrice: number | undefined;
  salePrice: number | undefined;
  amount: number;
  pickupTime: {
    onSale: boolean;
    startAt: string;
    endAt: string;
  };
}

export interface BagInfoResponse extends BagInfo {
  id: number;
  storeName: string;
  remain: number;
  isLike: boolean;
  onSale: boolean;
  startAt: string;
  endAt: string;
}