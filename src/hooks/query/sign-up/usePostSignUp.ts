import { User } from '@/hooks/api/user';
import { useSignUpInfoStore } from '@/hooks/stores/useSignUpInfoStore';
import { SignUpInfo } from '@/types/sign-up';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const usePostSignUp = () => {
  const route = useRouter();
  const {
    signUpInfo: { userRole },
  } = useSignUpInfoStore();

  return useMutation({
    mutationFn: (data: SignUpInfo) => User.signUp(data),
    onSuccess: () => {
      route.push(userRole === 'USER' ? '/sign-up/success' : '/register/store');
    },
  });
};
