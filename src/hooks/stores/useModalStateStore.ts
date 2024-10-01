import { ReactNode } from 'react';
import { create } from 'zustand';

type ModalState = {
  modalState: Modal;
  setModalState: (state: Modal) => void;
};

type Modal = {
  visible: boolean;
  content: ReactNode;
};

export const useModalStateStore = create<ModalState>((set) => ({
  modalState: {
    visible: false,
    content: null,
  },
  setModalState: (state: Modal) => set({ modalState: state }),
}));
