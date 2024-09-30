import { User } from '@/hooks/api/user';
import { SignUpInfo } from '@/types/sign-up';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const usePostSignUp = () => {
  const route = useRouter();
  return useMutation({
    mutationFn: (data: SignUpInfo) => User.signUp(data),
    onSuccess: () => {
      route.push('/sign-up/success');
    },
  });
};
