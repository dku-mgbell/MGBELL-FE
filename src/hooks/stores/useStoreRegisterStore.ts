import { StoreRegistration } from '@/types/store';
import { create } from 'zustand';

interface StoreState {
  storeState: StoreRegistration;
  setStoreState: (state: StoreRegistration) => void;
}

export const useStoreRegisterStore = create<StoreState>((set) => ({
  storeState: {
    name: '',
    address: '',
    storeType: null,
    images: [],
  },
  setStoreState: (state: StoreRegistration) => set({ storeState: state }),
}));
