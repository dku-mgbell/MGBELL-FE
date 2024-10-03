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
  onSale: boolean;
  startAt: string;
  endAt: string;
};

export const defaultBagInfo = {
  title: null,
  description: null,
  costPrice: undefined,
  salePrice: undefined,
  amount: 0,
  onSale: true,
  startAt: '18:00',
  endAt: '20:30',
};

export const useBagInfoStateStore = create<BagInfoState>((set) => ({
  bagInfoState: defaultBagInfo,
  setBagInfoState: (state: BagInfo) => set({ bagInfoState: state }),
}));
