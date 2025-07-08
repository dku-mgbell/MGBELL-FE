import { OAuthProviderType } from './oauth';
import { UserRole } from './user';

export interface SignUpData {
  providerType: null | OAuthProviderType;
  authCode: string;
  userRole: UserRole | null;
  nickName: string;
  phoneNumber?: string;
}

export type VerifyAlreadySignedUpRequest = Pick<
  SignUpData,
  'providerType' | 'authCode'
>;

export type OAuthLoginRequest = VerifyAlreadySignedUpRequest;
