import { useRouter } from 'next/navigation';
import { User } from '@/hooks/api/user';
import useModal from '@/hooks/useModal';
import { useMutation } from '@tanstack/react-query';

export const useResetPassword = () => {
  const { open } = useModal();
  const route = useRouter();

  return useMutation({
    mutationFn: (data: { email: string; newPassword: string; token: string }) =>
      User.resetPassword(data),
    onSuccess: () => {
      open({
        content: '비밀번호 재설정을 완료하였습니다.',
      });
      route.push('/login');
    },
    onError: () => {
      open({
        content: '오류가 발생하였습니다.',
      });
    },
  });
};
