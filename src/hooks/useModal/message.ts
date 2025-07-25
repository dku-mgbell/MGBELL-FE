import { useRouter } from 'next/navigation';
import useModal from '@/hooks/useModal';

export const useModalMessage = () => {
  const { open } = useModal();
  const route = useRouter();

  const openRequireLoginModal = () => {
    open({
      title: '로그인이 필요해요!',
      description: '서비스 이용을 위해 로그인이 필요해요.',
      confirmEvent: () => {
        route.push('/login');
      },
      confirmButtonText: '로그인',
    });
  };

  const openNotReadyModal = () => {
    open({
      title: '준비 중이에요!',
      description: '해당 기능은 현재 준비 중이에요.',
    });
  };

  return { openRequireLoginModal, openNotReadyModal };
};
