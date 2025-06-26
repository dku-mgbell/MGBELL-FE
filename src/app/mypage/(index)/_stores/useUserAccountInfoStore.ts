import { create } from 'zustand';
import { AccountInfo } from '@/types/user';

interface UserAccountInfo extends Partial<AccountInfo> {
  totalDiscount?: number;
  carbonReduction?: number;
  orderCount?: number;
}

interface UserAccountInfoStore {
  userAccountInfo: UserAccountInfo | null;
  setUserAccountInfo: (userAccountInfo: UserAccountInfo) => void;
}

export const useUserAccountInfoStore = create<UserAccountInfoStore>((set) => ({
  userAccountInfo: null,
  setUserAccountInfo: (userAccountInfo) => set({ userAccountInfo }),
}));
