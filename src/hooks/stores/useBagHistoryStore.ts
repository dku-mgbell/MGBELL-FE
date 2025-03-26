import { create } from 'zustand';
import { BagDetail } from '@/types/bag';
import { persist } from 'zustand/middleware';

type BagHistoryState = {
  bagHistory: BagDetail[];
  setBagHistory: (state: BagDetail[]) => void;
};

export const useBagHistoryStore = create(
  persist<BagHistoryState>(
    (set) => ({
      bagHistory: [],
      setBagHistory: (state: BagDetail[]) => {
        set({ bagHistory: state });
      },
    }),
    {
      name: 'bag-history',
    },
  ),
);
