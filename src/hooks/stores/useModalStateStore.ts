import { ReactNode } from 'react';
import { create } from 'zustand';

type ModalState = {
  modalState: Modal;
  setModalState: (state: Modal) => void;
};

type Modal = {
  visible: boolean;
  content: ReactNode;
  confirmEvent?: () => void;
  noPadding?: boolean;
};

export const useModalStateStore = create<ModalState>((set) => ({
  modalState: {
    visible: false,
    content: null,
    confirmEvent: undefined,
    noPadding: undefined,
  },
  setModalState: (state: Modal) => set({ modalState: state }),
}));
