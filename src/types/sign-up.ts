import { OAuthProviderType } from './login';
import { UserRole } from './user';

export interface CodeVerificationResponse {
  valid: boolean;
  signupToken: string;
}

export interface SignUpInfo {
  name: string;
  phoneNumber: string;
  email?: string;
  userRole: UserRole | null;
  password: string;
  nickname?: string;
}

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
