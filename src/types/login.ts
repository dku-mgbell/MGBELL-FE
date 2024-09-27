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
