import { create } from 'zustand';
import { UserActivity } from '@/types/user';

interface UserAccountInfoStore {
  userAccountInfo: UserActivity | null;
  setUserAccountInfo: (userAccountInfo: UserActivity) => void;
}

export const useUserAccountInfoStore = create<UserAccountInfoStore>((set) => ({
  userAccountInfo: null,
  setUserAccountInfo: (userAccountInfo) => set({ userAccountInfo }),
}));
