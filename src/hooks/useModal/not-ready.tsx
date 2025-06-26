import useModal from '@/hooks/useModal';
import { READY_TO_DEPLOY } from '@/constant';

export const useNotReadyModal = () => {
  const { open } = useModal();

  const openNotReadyModal = () => {
    if (READY_TO_DEPLOY === 'false') {
      open({
        content: '준비 중입니다.',
      });
    }
  };

  return { openNotReadyModal };
};
