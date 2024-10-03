import { create } from 'zustand';

type BagInfoState = {
  bagInfoState: BagInfo;
  setBagInfoState: (state: BagInfo) => void;
};

type BagInfo = {
  title: string | null;
  description: string | null;
  costPrice: number | undefined;
  salePrice: number | undefined;
  amount: number;
  onSale: boolean | null;
  startAt: string | null;
  endAt: string | null;
};

export const useBagInfoStateStore = create<BagInfoState>((set) => ({
  bagInfoState: {
    title: null,
    description: null,
    costPrice: undefined,
    salePrice: undefined,
    amount: 0,
    onSale: null,
    startAt: null,
    endAt: null,
  },
  setBagInfoState: (state: BagInfo) => set({ bagInfoState: state }),
}));
