import { create } from 'zustand';

type NumberState = {
  number: number;
  setNumber: (state: number) => void;
};
export const useNumberInputStore = create<NumberState>((set) => ({
  number: 0,
  setNumber: (state: number) => set({ number: state }),
}));
