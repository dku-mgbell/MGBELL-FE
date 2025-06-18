import {
  ModalProps,
  useModalStateStore,
} from '@/hooks/stores/useModalStateStore';

export default function useModal() {
  const { setModalState } = useModalStateStore();

  const open = ({ ...props }: Omit<ModalProps, 'visible'>) => {
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
