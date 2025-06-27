import { create } from 'zustand';
import { StoreListItemResponse } from '@/types/store';

export type MapStateStore = {
  selectedStore: StoreListItemResponse | undefined;
  setSelectedStore: (selectedStore: StoreListItemResponse | undefined) => void;
  isListSheetHidden: boolean;
  setIsListSheetHidden: (isListSheetHidden: boolean) => void;
};

export const useMapStore = create<MapStateStore>((set) => ({
  selectedStore: undefined,
  setSelectedStore: (selectedStore) => set({ selectedStore }),
  isListSheetHidden: false,
  setIsListSheetHidden: (isListSheetHidden) => set({ isListSheetHidden }),
}));
