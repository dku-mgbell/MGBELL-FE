import { ModalProps, useModalStateStore } from './stores/useModalStateStore';

export default function useModal() {
  const { setModalState } = useModalStateStore();

  const open = ({ visible, ...props }: ModalProps) => {
    setModalState({ visible: true, ...props });
  };

  const close = () => {
    setModalState({
      visible: false,
      content: null,
      confirmEvent: () => {},
    });
  };

  return { open, close };
}
