import { useMutation } from '@tanstack/react-query';
import { useSignUpStore } from '@/app/sign-up/_/sign-up-store';
import { User } from '@/hooks/api/user';
import { useDeleteOAuthAccount } from './useDeleteOAuthAccount';
import { useVerifyAlreadySignedUp } from './useVerifyAlreadySignedUp';

export const usePostKakaoAccessToken = (option?: {
  action: 'login' | 'delete';
}) => {
  const { updateSignUpInfo } = useSignUpStore();
  const { mutate: deleteOAuthAccount } = useDeleteOAuthAccount();
  const { mutate: verifyAlreadySignedUp } = useVerifyAlreadySignedUp();
  return useMutation({
    mutationFn: (code: string) =>
      User.postKakaoAccessToken({ code, action: option?.action ?? 'login' }),
    onSuccess: (data) => {
      if (option?.action === 'delete') {
        if (data.access_token) {
          deleteOAuthAccount({
            providerType: 'KAKAO',
            authCode: data.access_token,
          });
        } else {
          alert('카카오 토큰 발급 실패');
        }
        return;
      }

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
