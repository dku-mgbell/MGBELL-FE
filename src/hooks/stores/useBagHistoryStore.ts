import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { BagDetail } from '@/types/bag';

type BagHistoryState = {
  bagHistory: BagDetail[];
  setBagHistory: (newBag: BagDetail) => void;
};

export const useBagHistoryStore = create(
  persist<BagHistoryState>(
    (set) => ({
      bagHistory: [],
      setBagHistory: (newBag: BagDetail) => {
        set((current) => {
          const filteredHistory = current.bagHistory.filter(
            (existingBag) => !(existingBag.storeId === newBag.storeId),
          );
          return {
            bagHistory: [newBag, ...filteredHistory],
          };
        });
      },
    }),
    {
      name: 'bag-history',
    },
  ),
);
