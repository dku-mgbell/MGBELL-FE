import { useMutation } from '@tanstack/react-query';
import { useSignUpStore } from '@/app/sign-up/_/sign-up-store';
import { User } from '@/hooks/api/user';
import { OAuthProviderType } from '@/types/login';
import { useDeleteOAuthAccount } from './useDeleteOAuthAccount';
import { useVerifyAlreadySignedUp } from './useVerifyAlreadySignedUp';

export const usePostOAuthCode = ({
  OAuthProvider,
  action = 'login',
}: {
  OAuthProvider: OAuthProviderType;
  action?: 'login' | 'delete';
}) => {
  const { updateSignUpInfo } = useSignUpStore();
  const { mutate: deleteOAuthAccount } = useDeleteOAuthAccount();
  const { mutate: verifyAlreadySignedUp } = useVerifyAlreadySignedUp();
  return useMutation({
    mutationFn: (code: string) =>
      User.postOAuthCode({
        provider: OAuthProvider,
        code,
        action,
      }),
    onSuccess: (data) => {
      if (action === 'delete') {
        if (data.access_token) {
          deleteOAuthAccount({
            providerType: OAuthProvider,
            authCode: data.access_token,
          });
        } else {
          alert('OAuth 인증 오류');
        }
        return;
      }

      updateSignUpInfo('providerType', OAuthProvider);
      updateSignUpInfo('authCode', data.access_token);

      if (data.access_token) {
        verifyAlreadySignedUp({
          providerType: OAuthProvider,
          authCode: data.access_token,
        });
      }
    },
  });
};
