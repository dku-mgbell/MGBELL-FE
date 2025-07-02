import { usePathname, useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { useSignUpStore } from '@/app/sign-up/_/sign-up-store';
import { User } from '@/hooks/api/user';
import { useGetUserAccountInfo } from '@/hooks/query/user/useGetUserAccountInfo';
import useLoadingModal from '@/hooks/useModal/loading';
import { ErrorResponse } from '@/types/api';
import { OAuthLoginRequest, SignUpData } from '@/types/sign-up';
import { useAuth } from '@/hooks/useAuth';
import useModal from '@/hooks/useModal';
import { READY_TO_DEPLOY } from '@/constant';

type LoginErrorCode = 'INVALID_PHONE_NUMBER' | 'DUPLICATE_NICKNAME';

export const usePostOAuthLogin = (nextPage?: string) => {
  const router = useRouter();

  const {
    refetch: getAccountInfo,
    data: accountInfo,
    isFetched: isAccountInfoFetched,
  } = useGetUserAccountInfo();
  const { open } = useModal();
  const { setTokenResponse } = useAuth();
  const { closeLoading } = useLoadingModal();
  const { resetSignUpInfo } = useSignUpStore();
  const pathname = usePathname();
  const isLoginPage = pathname.includes('/login');

  // 로그인 로직
  if (isLoginPage && isAccountInfoFetched && accountInfo) {
    // OWNER 계정 리다이렉트 로직
    if (accountInfo.approved === 'APPROVED') {
      if (accountInfo.goodsId === 'null') {
        router.push('/register/bag');
      } else {
        router.push(`/store/${READY_TO_DEPLOY === 'true' ? 'order' : 'temp'}`);
      }
    } else if (
      accountInfo.approved === 'WAITING' ||
      accountInfo.approved === 'REJECTED'
    ) {
      router.push('/register/store/pending');
    }
    // CUSTOMER 계정 리다이렉트 로직
    else if (accountInfo.userRole === 'CUSTOMER') {
      router.push('/');
    }
  }

  return useMutation({
    mutationFn: (data: SignUpData | OAuthLoginRequest) => User.oAuthLogin(data),
    onSuccess: async (res) => {
      closeLoading();
      const {
        authorization: accessTokenResponse,
        refreshtoken: refreshTokenResponse,
      } = res.headers;

      if (!accessTokenResponse || !refreshTokenResponse) {
        open({
          content: '토큰 발급 오류',
          confirmEvent: () => {
            router.push('/login');
          },
          onlyConfirmButton: true,
        });
        return;
      }

      const [accessToken, refreshToken] = [
        accessTokenResponse.split(' ')[1],
        refreshTokenResponse.split(' ')[1],
      ];

      // 토큰 저장
      setTokenResponse({ accessToken, refreshToken });

      // 신규 회원가입
      if (nextPage) {
        // 명시한 회원가입 리다이렉 페이지로 이동
        router.push(nextPage);
      } else {
        const accountInfoResponse = await getAccountInfo();
        const error =
          accountInfoResponse.error as unknown as ErrorResponse<string>;
        if (error) {
          const errorCode = error.response?.data.code;
          if (errorCode === 'STORE_NOT_FOUND') {
            router.push('/register/store');
          }
        }
      }
      resetSignUpInfo();
    },
    onError: (err: ErrorResponse<LoginErrorCode>) => {
      closeLoading();
      const errorCode = err.response.data.code;
      if (errorCode === 'INVALID_PHONE_NUMBER') {
        router.push('/sign-up/info/phone-number');
        return;
      }
      open({
        content: err.response.data.message,
      });
    },
  });
};
