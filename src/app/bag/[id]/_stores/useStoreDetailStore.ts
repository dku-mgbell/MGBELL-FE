import { create } from 'zustand';
import { StoreDetailWithBag } from '@/types/store';

interface StoreDetailState {
  storeId: string | undefined;
  storeDetail: StoreDetailWithBag | null;
  isStoreDetailFetched: boolean;
  setStoreDetail: (storeDetail: StoreDetailWithBag) => void;
  setStoreId: (storeId: string) => void;
  setIsStoreDetailFetched: (isStoreDetailFetched: boolean) => void;
}

export const useStoreDetailStore = create<StoreDetailState>((set) => ({
  storeId: undefined,
  storeDetail: null,
  isStoreDetailFetched: false,
  setStoreDetail: (storeDetail: StoreDetailWithBag) => set({ storeDetail }),
  setStoreId: (storeId: string) => set({ storeId }),
  setIsStoreDetailFetched: (isStoreDetailFetched: boolean) =>
    set({ isStoreDetailFetched }),
}));
