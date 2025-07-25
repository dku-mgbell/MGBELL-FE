import { create } from 'zustand';
import { StoreListItemResponse } from '@/types/store';
import { DEFAULT_COORD } from '../_constant/map';

export type MapStateStore = {
  selectedStore: StoreListItemResponse | undefined;
  setSelectedStore: (selectedStore: StoreListItemResponse | undefined) => void;
  isListSheetHidden: boolean;
  setIsListSheetHidden: (isListSheetHidden: boolean) => void;
  userLocation: [number, number];
  setUserLocation: (userLocation: [number, number]) => void;
};

export const useMapStore = create<MapStateStore>((set) => ({
  selectedStore: undefined,
  setSelectedStore: (selectedStore) => set({ selectedStore }),
  isListSheetHidden: false,
  setIsListSheetHidden: (isListSheetHidden) => set({ isListSheetHidden }),
  userLocation: DEFAULT_COORD as [number, number],
  setUserLocation: (userLocation) => set({ userLocation }),
}));
