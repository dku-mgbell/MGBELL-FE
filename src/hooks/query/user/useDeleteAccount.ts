import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { User } from '@/hooks/api/user';
import useLoadingModal from '@/hooks/useModal/loading';
import { useAuth } from '@/hooks/useAuth';
import useModal from '@/hooks/useModal';

export const useDeleteAccount = () => {
  const route = useRouter();
  const { logout } = useAuth();
  const { open } = useModal();
  const { openLoading, closeLoading } = useLoadingModal();

  return useMutation({
    mutationFn: () => User.deleteAccount(),
    onMutate: () => {
      openLoading();
    },
    onSuccess: () => {
      closeLoading();
      route.push('/');
      logout();
      open({ content: '회원 탈퇴가 완료되었습니다.' });
    },
    onError: () => {
      closeLoading();
      open({ content: '회원 탈퇴에 실패했습니다.' });
    },
  });
};
