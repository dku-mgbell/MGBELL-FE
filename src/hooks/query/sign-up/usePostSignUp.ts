import { User } from '@/hooks/api/user';
import { useSignUpInfoStore } from '@/hooks/stores/useSignUpInfoStore';
import { SignUpInfo } from '@/types/sign-up';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/hooks/stores/useAuthStore';
import { useAuth } from '@/hooks/useAuth';
import { usePostLogin } from '../user/usePostLogin';

export const usePostSignUp = () => {
  const route = useRouter();
  const {
    signUpInfo: { userRole, email, password },
    token,
  } = useSignUpInfoStore();
  const { mutate } = usePostLogin();
  const { OAuthState } = useAuthStore();
  const { oAuthLogin } = useAuth();
  return useMutation({
    mutationFn: (data: SignUpInfo) =>
      OAuthState.isOAuth ? User.oAuthSignUp(data) : User.signUp(data, token!),
    onSuccess: () => {
      if (OAuthState.isOAuth) {
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
