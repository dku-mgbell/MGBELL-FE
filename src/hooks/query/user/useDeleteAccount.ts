import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { User } from '@/hooks/api/user';
import { useAuth } from '@/hooks/useAuth';
import useModal from '@/hooks/useModal';

export const useDeleteAccount = () => {
  const route = useRouter();
  const { logout } = useAuth();
  const { open } = useModal();

  return useMutation({
    mutationFn: () => User.deleteAccount(),
    onSuccess: () => {
      route.push('/');
      logout();
      open({ content: '회원 탈퇴가 완료되었습니다.' });
    },
  });
};
