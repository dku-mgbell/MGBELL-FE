import { useMutation } from '@tanstack/react-query';
import { useSignUpStore } from '@/app/sign-up/_/sign-up-store';
import { User } from '@/hooks/api/user';
import { useVerifyAlreadySignedUp } from './useVerifyAlreadySignedUp';

export const usePostKakaoAccessToken = () => {
  const { updateSignUpInfo } = useSignUpStore();
  const { mutate: verifyAlreadySignedUp } = useVerifyAlreadySignedUp();
  return useMutation({
    mutationFn: (code: string) => User.postKakaoAccessToken({ code }),
    onSuccess: (data) => {
      updateSignUpInfo('providerType', 'KAKAO');
      updateSignUpInfo('authCode', data.access_token);

      if (data.access_token) {
        verifyAlreadySignedUp({
          providerType: 'KAKAO',
          authCode: data.access_token,
        });
      }
    },
  });
};
