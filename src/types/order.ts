export interface OrderInfo {
  storeId: number;
  pickupTime: string;
  request: string;
  amount: number;
  payment: 'SPOT';
}
