import { ReactNode } from 'react';
import { useModalStateStore } from './stores/useModalStateStore';

export default function useModal() {
  const { setModalState } = useModalStateStore();

  const open = ({
    content,
    confirmEvent,
    noPadding,
  }: {
    content: ReactNode;
    confirmEvent?: () => void;
    noPadding?: boolean;
  }) => {
    setModalState({ visible: true, content, confirmEvent, noPadding });
  };

  const close = () => {
    setModalState({
      visible: false,
      content: null,
      confirmEvent: () => {},
      noPadding: undefined,
    });
  };

  return { open, close };
}
