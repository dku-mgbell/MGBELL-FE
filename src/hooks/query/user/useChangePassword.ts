import { User } from '@/hooks/api/user';
import { PasswordChange } from '@/types/user';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useChangePassword = () => {
  const route = useRouter();

  return useMutation({
    mutationFn: (data: PasswordChange) => User.changePassword(data),
    onSuccess: () => {
      // TODO 토스트 메세지 표시
      route.push('/mypage/settings/account');
    },
  });
};
