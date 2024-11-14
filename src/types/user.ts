import { OrderState } from './order';

export type UserRole = 'USER' | 'OWNER';

export interface UserInfoResponse {
  id: number;
  username: string;
  email: string;
}

export interface PasswordChange {
  newPassword: string;
}

export interface UserActivity {
  name: string;
  orderCount: number;
  carbonReduction: number;
  totalDiscount: number;
  currentOrders: CurrentOrder[];
}

export interface CurrentOrder {
  id: number;
  storeName: string;
  pickupTime: string;
  orderState: OrderState;
}
