import { ReactNode } from 'react';
import { useModalStateStore } from './stores/useModalStateStore';

export default function useModal() {
  const { setModalState } = useModalStateStore();

  const open = ({ content }: { content: ReactNode }) => {
    setModalState({ visible: true, content });
  };

  const close = () => {
    setModalState({ visible: false, content: null });
  };

  return { open, close };
}
