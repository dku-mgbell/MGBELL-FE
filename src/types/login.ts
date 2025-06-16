import { loginButtonConfig } from '@/app/login/components/login-button-config';
import { UserRole } from './user';

export interface LoginInfo {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  role: UserRole;
}

export const LoginErrorMessage = {
  USER_NOT_FOUND: '존재하지 않는 회원입니다.',
  INCORRECT_PASSWORD: '비밀번호를 다시 입력해주세요.',
};

export type LoginErrorCode = keyof typeof LoginErrorMessage;

export type OAuthProviderType = keyof typeof loginButtonConfig;

export interface KakaoAccessTokenResponse {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
  refresh_token_expires_in: number;
}
