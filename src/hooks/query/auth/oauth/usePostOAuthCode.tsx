import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { useSignUpStore } from '@/app/sign-up/_/sign-up-store';
import { OAuth } from '@/hooks/api/auth/OAuth';
import useLoadingModal from '@/hooks/useModal/loading';
import { OAuthName, OAuthProviderType } from '@/types/oauth';
import { useAuth } from '@/hooks/useAuth';
import useModal from '@/hooks/useModal';
import { useDeleteOAuthAccount } from './useDeleteOAuthAccount';
import { usePostOAuthLogin } from './usePostOAuthLogin';
import { useVerifyAlreadySignedUp } from './useVerifyAlreadySignedUp';

export const usePostOAuthCode = ({
  OAuthProvider,
  action = 'login',
  state,
}: {
  OAuthProvider: OAuthProviderType;
  action?: 'login' | 'delete';
  state?: string | null;
}) => {
  const { signUpInfo, updateSignUpInfo } = useSignUpStore();
  const { mutate: deleteOAuthAccount } = useDeleteOAuthAccount();
  const { data: isAlreadySignedUp } = useVerifyAlreadySignedUp({ action });
  const { mutate: postOAuthLogin } = usePostOAuthLogin();
  const { open } = useModal();
  const route = useRouter();
  const isLoggedIn = useAuth();
  const { openLoading, closeLoading } = useLoadingModal();

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

  useEffect(() => {
    if (action === 'delete') {
      closeLoading();
      return;
    }
    const OAuthLoginRequest = {
      providerType: signUpInfo.providerType,
      authCode: signUpInfo.authCode,
    };
    if (isAlreadySignedUp) {
      postOAuthLogin(OAuthLoginRequest, {
        onSuccess: () => {
          closeLoading();
        },
        onError: () => {
          closeLoading();
        },
      });
    } else if (isAlreadySignedUp === false) {
      route.push('/sign-up');
      closeLoading();
    }
  }, [isAlreadySignedUp]);

  return useMutation({
    mutationFn: (code: string) =>
      OAuth.postOAuthCode({
        provider: OAuthProvider,
        code,
        action,
        state,
      }),
    onMutate: () => {
      openLoading();
    },
    onSuccess: (data) => {
      if (action === 'delete') {
        if (!isLoggedIn) {
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

      if (data.access_token) {
        updateSignUpInfo('providerType', OAuthProvider);
        updateSignUpInfo('authCode', data.access_token);
      }
    },
  });
};
