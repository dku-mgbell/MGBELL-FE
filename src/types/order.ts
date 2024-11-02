export interface OrderInfo {
  storeId: number;
  pickupTime: string;
  request: string;
  amount: number;
  payment: 'SPOT';
}

export interface UserOrderDetail {
  orderId: number;
  postId: number;
  orderDateTime: string;
  storeName: string;
  bagName: string;
  orderState: OrderState;
  amount: number;
  subTotal: number;
  images: string;
}

export type OrderState =
  | 'REQUESTED'
  | 'ACCEPTED'
  | 'COMPLETED'
  | 'USER_CANCELED'
  | 'OWNER_REFUSED';

export const OrderStateName = {
  REQUESTED: '주문대기',
  ACCEPTED: '픽업예정',
  COMPLETED: '픽업완료',
  USER_CANCELED: '본인취소',
  OWNER_REFUSED: '매장취소',
} as const;
