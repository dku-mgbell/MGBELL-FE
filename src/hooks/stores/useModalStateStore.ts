import { ReactNode } from 'react';
import { create } from 'zustand';

type ModalState = {
  modalState: ModalProps;
  setModalState: (state: ModalProps) => void;
};

export type ModalProps = {
  visible: boolean;
  title?: string;
  description?: string;
  content?: ReactNode;
  confirmEvent?: () => void;
  className?: string;
  showButton?: boolean;
  onlyConfirmButton?: boolean;
  confirmButtonText?: string;
  setOpen?: (open: boolean) => void;
  autoCloseOnConfirm?: boolean;
};

export const useModalStateStore = create<ModalState>((set) => ({
  modalState: {
    visible: false,
    title: undefined,
    description: undefined,
    content: null,
    confirmEvent: undefined,
    className: undefined,
    showButton: true,
    onlyConfirmButton: false,
    confirmButtonText: undefined,
  },
  setModalState: (state: ModalProps) => set({ modalState: state }),
}));
