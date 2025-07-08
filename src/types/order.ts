export interface UserOrderRequest {
  goodsId: string;
  quantity: number;
  totalPrice: number;
  pickupTime: string;
  memo: string;
}

export interface UserOrderResponse {
  merchantUid: string;
  totalAmount: number;
}

export interface UserOrderDetailPreview {
  orderId: string;
  orderStatus: OrderStatus;
  createdAt: string;
  storeId: string;
  storeName: string;
  imageUrls: string[];
  goodsList: {
    goodsName: string;
    quantity: number;
    salePrice: number;
  }[];
  reviewIds: number[];
}

export interface UserOrderDetail
  extends Omit<
    UserOrderDetailPreview,
    'imageUrls' | 'goodsList' | 'reviewIds'
  > {
  storeAddress: string;
  imageUrl: string;
  totalPrice: number;
  pickupTime: string;
  memo: string;
  reviewId: number;
  quantity: number;
}

export const OrderStatusColor: Record<OrderStatus, string> = {
  PAID: 'text-primary',
  ACCEPTED: 'text-secondary',
  COMPLETED: 'text-gray5',
  CANCELED: 'text-error',
  REJECTED: 'text-error',
  PENDING: 'text-error',
  FAILED: 'text-error',
} as const;

export type OrderStatus =
  | 'PENDING'
  | 'PAID'
  | 'ACCEPTED'
  | 'REJECTED'
  | 'COMPLETED'
  | 'CANCELED'
  | 'FAILED';

export const OrderStatusName: Record<OrderStatus, string> = {
  PENDING: '주문대기',
  PAID: '결제완료',
  ACCEPTED: '픽업예정',
  REJECTED: '주문거절',
  COMPLETED: '픽업완료',
  CANCELED: '주문취소',
  FAILED: '결제실패',
} as const;

export const UserOrderStatusName: Record<OrderStatus, string> = {
  PAID: '주문대기중',
  ACCEPTED: '픽업대기중',
  COMPLETED: '픽업완료',
  CANCELED: '본인취소',
  REJECTED: '매장취소',
  PENDING: '결제요청',
  FAILED: '결제실패',
} as const;
