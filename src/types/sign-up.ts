import { UserRole } from './user';

export interface CodeVerificationResponse {
  valid: boolean;
}

export interface SignUpInfo {
  name: string;
  phoneNumber: string;
  email?: string;
  userRole: UserRole | null;
  password: string;
}
