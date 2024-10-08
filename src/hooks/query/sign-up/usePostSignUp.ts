import { User } from '@/hooks/api/user';
import { useSignUpInfoStore } from '@/hooks/stores/useSignUpInfoStore';
import { SignUpInfo } from '@/types/sign-up';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { usePostLogin } from '../login/usePostLogin';

export const usePostSignUp = () => {
  const route = useRouter();
  const {
    signUpInfo: { userRole, email, password },
  } = useSignUpInfoStore();
  const { mutate } = usePostLogin();

  return useMutation({
    mutationFn: (data: SignUpInfo) => User.signUp(data),
    onSuccess: () => {
      mutate({ email: email!, password });
      if (userRole === 'USER') {
        route.push('/sign-up/success');
      } else {
        route.push('/register/store');
      }
    },
  });
};
