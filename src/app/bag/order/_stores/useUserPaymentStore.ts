import { create } from 'zustand';

interface UserPaymentStore {
  merchantUid?: string;
  name?: string;
  amount?: number; // 금액
}

interface UserPaymentStoreState {
  userPaymentStore: UserPaymentStore;
  setUserPaymentStore: (userPaymentStore: UserPaymentStore) => void;
}

export const useUserPaymentStore = create<UserPaymentStoreState>((set) => ({
  userPaymentStore: {
    merchantUid: undefined,
    name: undefined,
    amount: undefined,
  },
  setUserPaymentStore: (store) => set({ userPaymentStore: store }),
}));
