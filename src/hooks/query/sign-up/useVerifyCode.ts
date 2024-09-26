import { SignUp } from '@/hooks/api/sign-up';
import { useSignUpInfoStore } from '@/hooks/stores/useSignUpInfoStore';
import { CodeVerificationResponse } from '@/types/sign-up';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useVerifyCode = () => {
  const route = useRouter();
  const { signUpInfo } = useSignUpInfoStore();

  return useMutation({
    mutationFn: (code: string) =>
      SignUp.verifyCode({
        email: signUpInfo.email!,
        token: code,
      }),
    onSuccess: ({ valid }: CodeVerificationResponse) => {
      if (valid) route.push('/sign-up/password');
    },
  });
};
