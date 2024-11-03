import { ReactNode } from 'react';
import { useModalStateStore } from './stores/useModalStateStore';

export default function useModal() {
  const { setModalState } = useModalStateStore();

  const open = ({
    content,
    confirmEvent,
  }: {
    content: ReactNode;
    confirmEvent?: () => void;
  }) => {
    setModalState({ visible: true, content, confirmEvent });
  };

  const close = () => {
    setModalState({ visible: false, content: null, confirmEvent: () => {} });
  };

  return { open, close };
}
