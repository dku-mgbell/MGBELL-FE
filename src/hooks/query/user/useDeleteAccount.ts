import { User } from '@/hooks/api/user';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useDeleteAccount = () => {
  const route = useRouter();
  return useMutation({
    mutationFn: () => User.deleteAccount(),
    onSuccess: () => {
      route.push('/');
    },
  });
};
