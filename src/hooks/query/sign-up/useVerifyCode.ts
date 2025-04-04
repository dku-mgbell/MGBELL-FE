import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { SignUp } from '@/hooks/api/sign-up';
import { useSignUpInfoStore } from '@/hooks/stores/useSignUpInfoStore';
import { CodeVerificationResponse } from '@/types/sign-up';

export const useVerifyCode = () => {
  const route = useRouter();
  const { signUpInfo, setToken } = useSignUpInfoStore();

  return useMutation({
    mutationFn: (code: string) =>
      SignUp.verifyCode({
        email: signUpInfo.email!,
        token: code,
      }),
    onSuccess: ({ valid, signupToken }: CodeVerificationResponse) => {
      if (valid) {
        route.push('/sign-up/password');
        setToken(signupToken);
      }
    },
  });
};
