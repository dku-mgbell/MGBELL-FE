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
