import { OrderStatus } from './order';

export interface OwnerOrderListItem {
  orderId: string;
  orderStatus: OrderStatus;
  createdAt: string;
  pickupTime: string;
  quantity: number;
  totalPrice: number;
  phoneNumber: string;
  goodsName: string;
}

export type OwnerOrderAction = 'approve' | 'reject' | 'completed' | 'cancel';

export const OwnerOrderActionName: Record<OwnerOrderAction, string> = {
  approve: '수락',
  reject: '거절',
  completed: '완료',
  cancel: '취소',
} as const;
