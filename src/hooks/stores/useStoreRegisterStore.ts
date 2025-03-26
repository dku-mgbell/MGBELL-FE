import { create } from 'zustand';
import { StoreRegistration } from '@/types/store';

interface StoreState {
  storeState: StoreRegistration;
  setStoreState: (state: StoreRegistration) => void;
}

export const useStoreRegisterStore = create<StoreState>((set) => ({
  storeState: {
    storeName: '',
    ownerName: '',
    businessRegiNum: '',
    address: '',
    contact: '',
    storeType: null,
    latitude: '',
    longitude: '',
    images: [],
  },
  setStoreState: (state: StoreRegistration) => set({ storeState: state }),
}));
