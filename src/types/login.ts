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
