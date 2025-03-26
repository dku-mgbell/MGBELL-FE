import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { SignUp } from '@/hooks/api/sign-up';

export const usePostMail = () => {
  const route = useRouter();
  return useMutation({
    mutationFn: (email: string) => SignUp.postMail(email),
    onSuccess: () => {
      route.push('/sign-up/verify');
    },
  });
};
