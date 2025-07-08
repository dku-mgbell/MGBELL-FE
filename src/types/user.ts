import { OAuthProviderType } from './oauth';

export type UserRole = 'CUSTOMER' | 'OWNER';

export interface UserActivity {
  name: string;
  orderCount: number;
  carbonReduction: number;
  totalDiscount: number;
}

export interface AccountInfo {
  email: string;
  nickName: string;
  userRole: 'CUSTOMER' | 'OWNER';
  providerType: OAuthProviderType;
  approved: 'APPROVED' | 'WAITING' | 'REJECTED';
  goodsId: number | 'null';
}
