import { UserRole } from '@/types/user';

export interface IndexPageSearchParams {
  sort: string;
  accessToken: string;
  isNewUser: string;
  userRole: UserRole;
}
