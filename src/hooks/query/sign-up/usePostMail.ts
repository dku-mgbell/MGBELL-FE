import { SignUp } from '@/hooks/api/sign-up';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const usePostMail = () => {
  const route = useRouter();
  return useMutation({
    mutationFn: (email: string) => SignUp.postMail(email),
    onSuccess: () => {
      route.push('/sign-up/verify');
    },
  });
};
