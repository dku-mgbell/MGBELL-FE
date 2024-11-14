export interface OrderInfo {
  storeId: number;
  pickupTime: string;
  request: string;
  amount: number;
  payment: 'SPOT';
}

export interface UserOrderDetailPreview {
  orderId: number;
  postId: number;
  orderDateTime: string;
  storeName: string;
  bagName: string;
  orderState: OrderState;
  amount: number;
  subTotal: number;
  images: string;
  storeId: number;
  reviewed: boolean;
}

export interface OwnerOrderDetail {
  orderId: number;
  orderState: OrderState;
  orderedTime: string;
  pickupTime: string;
  request: string;
  amount: number;
  subTotal: number;
  payment: Payment;
  phoneNumber: string;
}

export type Payment = 'SPOT';
export const PaymentName = {
  SPOT: '현장결제',
} as const;

export interface UserOrderDetail extends UserOrderDetailPreview {
  storeId: number;
  address: string;
  payment: string;
  pickupTime: string;
  request: string;
  cancelReason: string;
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
