import { create } from 'zustand';
import { BagInfoResponse as StoreInfoResponse } from '@/types/bag';

export type MapStateStore = {
  selectedStore: StoreInfoResponse | undefined;
  setSelectedStore: (selectedStore: StoreInfoResponse | undefined) => void;
  isListSheetHidden: boolean;
  setIsListSheetHidden: (isListSheetHidden: boolean) => void;
};

export const useMapStore = create<MapStateStore>((set) => ({
  selectedStore: undefined,
  setSelectedStore: (selectedStore) => set({ selectedStore }),
  isListSheetHidden: false,
  setIsListSheetHidden: (isListSheetHidden) => set({ isListSheetHidden }),
}));
