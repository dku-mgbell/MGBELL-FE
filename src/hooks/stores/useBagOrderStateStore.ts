import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type BagOrderState = {
  bagAmount: number;
  setBagAmount: (state: number) => void;
};

export const useBagOrderState = create(
  persist<BagOrderState>(
    (set) => ({
      bagAmount: 0,
      setBagAmount: (state: number) => {
        set({ bagAmount: state });
      },
    }),
    {
      name: 'bag-order',
    },
  ),
);
