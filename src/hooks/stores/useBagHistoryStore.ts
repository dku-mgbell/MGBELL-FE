import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { BagDetail } from '@/types/bag';

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
