import { useMutation } from '@tanstack/react-query';
import { User } from '@/hooks/api/user';
import useLoadingModal from '@/hooks/useModal/loading';
import { DeleteOAuthAccountRequest } from '@/types/oauth';
import { useAuth } from '@/hooks/useAuth';
import useModal from '@/hooks/useModal';

export const useDeleteOAuthAccount = () => {
  const { open } = useModal();
  const { openLoading } = useLoadingModal();
  const { logout } = useAuth();

  const openSuccessModal = () => {
    open({
      title: '탈퇴 완료',
      description: '마감벨을 이용해주셔서 감사합니다.',
      onlyConfirmButton: true,
      confirmEvent: () => {
        logout();
      },
    });
  };

  const openErrorModal = () => {
    open({
      title: '탈퇴 오류',
      description: '잠시후 다시 시도해주세요.',
    });
  };

  return useMutation({
    mutationFn: (data: DeleteOAuthAccountRequest) =>
      User.deleteOAuthAccount(data),
    onSuccess: () => {
      openSuccessModal();
    },
    onError: () => {
      openErrorModal();
    },
    onMutate: () => {
      openLoading();
    },
  });
};
