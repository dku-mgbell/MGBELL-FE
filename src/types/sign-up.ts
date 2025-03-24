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
