import { useQuery } from '@tanstack/react-query';
import { useSignUpStore } from '@/app/sign-up/_/sign-up-store';
import { User } from '@/hooks/api/user';

export const useVerifyAlreadySignedUp = (options?: {
  action?: 'login' | 'delete';
}) => {
  const { signUpInfo } = useSignUpStore();

  return useQuery({
    queryKey: [
      'verify-already-signed-up',
      signUpInfo.authCode,
      options?.action,
    ],
    queryFn: () =>
      User.verifyAlreadySignedUp({
        providerType: signUpInfo.providerType,
        authCode: signUpInfo.authCode,
      }),
    enabled: signUpInfo.authCode.length > 0 && options?.action === 'login',
  });
};
