export type UserRole = 'USER' | 'OWNER';

export interface UserInfoResponse {
  id: number;
  username: string;
  email: string;
}

export interface PasswordChange {
  newPassword: string;
}
