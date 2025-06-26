import { OAuthProviderType } from './oauth';
import { OrderState } from './order';

export type UserRole = 'CUSTOMER' | 'OWNER';

export interface UserInfoResponse {
  id: number;
  username: string;
  email: string;
}

export interface PasswordChange {
  oldPassword: string;
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
  image: string;
}

export interface AccountInfo {
  status: string;
  data: {
    email: string;
    userRole: 'CUSTOMER' | 'OWNER';
    providerType: OAuthProviderType;
    approved: 'APPROVED' | 'WAITING' | 'REJECTED';
    goodsId: number | 'null';
  };
}
