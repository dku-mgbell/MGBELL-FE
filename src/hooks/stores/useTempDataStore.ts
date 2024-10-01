import { create } from 'zustand';

type TempDataState = {
  tempData: string | null;
  setTempData: (state: string | null) => void;
};
export const useTempDataStore = create<TempDataState>((set) => ({
  tempData: null,
  setTempData: (state: string | null) => set({ tempData: state }),
}));
