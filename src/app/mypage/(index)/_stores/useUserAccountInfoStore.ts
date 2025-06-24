import { create } from 'zustand';
import { UserActivity } from '@/types/user';

interface UserInfo extends UserActivity {
  email: string;
}

interface UserAccountInfoStore {
  userAccountInfo: UserInfo | null;
  setUserAccountInfo: (userAccountInfo: UserInfo) => void;
}

export const useUserAccountInfoStore = create<UserAccountInfoStore>((set) => ({
  userAccountInfo: null,
  setUserAccountInfo: (userAccountInfo) => set({ userAccountInfo }),
}));
