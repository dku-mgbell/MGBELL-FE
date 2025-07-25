export type OAuthProviderType = 'KAKAO' | 'GOOGLE' | 'NAVER' | 'APPLE';

export type OAuthSignUpErrorCode =
  | 'INVALID_PHONE_NUMBER'
  | 'DUPLICATE_NICKNAME';

export const OAuthName: Record<OAuthProviderType, string> = {
  KAKAO: '카카오',
  GOOGLE: '구글',
  NAVER: '네이버',
  APPLE: '애플',
} as const;

export interface OAuthAccessTokenResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
  scope: string;
  refresh_token?: string;
  refresh_token_expires_in?: number;
  id_token?: string;
  error?: string;
}

export interface DeleteOAuthAccountRequest {
  providerType: OAuthProviderType;
  authCode: string;
}
