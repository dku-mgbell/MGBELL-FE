import { create } from 'zustand';
import { AccountInfo, UserActivity } from '@/types/user';

type UserAccountInfo = AccountInfo & UserActivity;

interface UserAccountInfoStore {
  userAccountInfo: UserAccountInfo | null;
  setUserAccountInfo: (userAccountInfo: UserAccountInfo) => void;
}

export const useUserAccountInfoStore = create<UserAccountInfoStore>((set) => ({
  userAccountInfo: null,
  setUserAccountInfo: (userAccountInfo) => set({ userAccountInfo }),
}));
