import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { useSignUpStore } from '@/app/sign-up/_/sign-up-store';
import { User } from '@/hooks/api/user';
import { OAuthName, OAuthProviderType } from '@/types/oauth';
import { useAuth } from '@/hooks/useAuth';
import useModal from '@/hooks/useModal';
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
  const { open } = useModal();
  const route = useRouter();
  const isLoggedIn = useAuth();

  const openOAuthErrorModal = () => {
    open({
      title: `${OAuthName[OAuthProvider]} 계정 인증 오류`,
      description: '로그인을 다시 시도해주세요.',
      onlyConfirmButton: true,
      confirmEvent: () => {
        route.push('/login');
      },
    });
  };

  const openNotLoggedInModal = () => {
    open({
      title: '로그인 필요',
      description: '로그인 후 다시 시도해주세요.',
      confirmEvent: () => {
        route.push('/login');
      },
    });
  };

  return useMutation({
    mutationFn: (code: string) =>
      User.postOAuthCode({
        provider: OAuthProvider,
        code,
        action,
      }),
    onSuccess: (data) => {
      if (action === 'delete') {
        if (isLoggedIn) {
          openNotLoggedInModal();
          return;
        }

        if (data.access_token) {
          deleteOAuthAccount({
            providerType: OAuthProvider,
            authCode: data.access_token,
          });
        } else {
          openOAuthErrorModal();
        }
        return;
      }

      if (data.error) {
        openOAuthErrorModal();
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
