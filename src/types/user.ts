import { OAuthProviderType } from './oauth';

export type UserRole = 'CUSTOMER' | 'OWNER';

export interface UserActivity {
  purchaseCount: number;
  savedKg: number;
  savedPrice: number;
}

export interface AccountInfo {
  email: string;
  nickName: string;
  userRole: 'CUSTOMER' | 'OWNER';
  providerType: OAuthProviderType;
  approved: 'APPROVED' | 'WAITING' | 'REJECTED';
  goodsId: string | 'null';
}
