import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { User } from '@/hooks/api/user';
import { DeleteOAuthAccountRequest } from '@/types/login';

export const useDeleteOAuthAccount = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: DeleteOAuthAccountRequest) =>
      User.deleteOAuthAccount(data),
    onSuccess: () => {
      alert('탈퇴 성공');
      router.push('/login');
    },
    onError: () => {
      alert('탈퇴 실패');
      router.push('/delete');
    },
  });
};
