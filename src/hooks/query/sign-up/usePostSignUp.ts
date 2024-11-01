import { User } from '@/hooks/api/user';
import { useSignUpInfoStore } from '@/hooks/stores/useSignUpInfoStore';
import { SignUpInfo } from '@/types/sign-up';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/hooks/stores/useAuthStore';
import { useAuth } from '@/hooks/useAuth';
import { usePostLogin } from '../login/usePostLogin';

export const usePostSignUp = () => {
  const route = useRouter();
  const {
    signUpInfo: { userRole, email, password },
  } = useSignUpInfoStore();
  const { mutate } = usePostLogin();
  const { isOAuth } = useAuthStore();
  const { oAuthLogin } = useAuth();
  return useMutation({
    mutationFn: (data: SignUpInfo) =>
      isOAuth ? User.oAuthSignUp(data) : User.signUp(data),
    onSuccess: () => {
      if (isOAuth) {
        oAuthLogin({});
      } else {
        mutate({ email: email!, password });
      }
      if (userRole === 'USER') {
        route.push('/sign-up/success');
      } else {
        route.push('/register/store');
      }
    },
  });
};
