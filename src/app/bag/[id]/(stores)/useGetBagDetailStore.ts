import { create } from 'zustand';
import { BagDetail } from '@/types/bag';

interface BagDetailState {
  isBagDetailFetched: boolean;
  bagDetail: BagDetail | null;
  setBagDetail: (isBagDetailFetched: boolean, bagDetail: BagDetail) => void;
}

export const useGetBagDetailStore = create<BagDetailState>((set) => ({
  isBagDetailFetched: false,
  bagDetail: null,
  setBagDetail: (isBagDetailFetched: boolean, bagDetail: BagDetail) =>
    set({ isBagDetailFetched, bagDetail }),
}));
