import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { useSignUpStore } from '@/app/sign-up/_/sign-up-store';
import { User } from '@/hooks/api/user';
import { VerifyAlreadySignedUpRequest } from '@/types/sign-up';
import { usePostOAuthLogin } from './usePostOAuthLogin';

export const useVerifyAlreadySignedUp = () => {
  const { signUpInfo } = useSignUpStore();
  const router = useRouter();
  const { mutate: postOAuthLogin } = usePostOAuthLogin();

  return useMutation({
    mutationFn: (data: VerifyAlreadySignedUpRequest) =>
      User.verifyAlreadySignedUp(data),
    onSuccess: ({
      data: isAlreadySignedUp,
    }: {
      status: string;
      data: boolean;
    }) => {
      if (isAlreadySignedUp) {
        postOAuthLogin({
          providerType: signUpInfo.providerType,
          authCode: signUpInfo.authCode,
        });
      } else {
        router.push('/sign-up');
      }
    },
  });
};
