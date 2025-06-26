import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { User } from '@/hooks/api/user';
import { ErrorResponse } from '@/types/api';
import { OAuthLoginRequest, SignUpData } from '@/types/sign-up';
import { useAuth } from '@/hooks/useAuth';
import useModal from '@/hooks/useModal';
import { useGetUserAccountInfo } from '../../user/useGetUserAccountInfo';

type LoginErrorCode = 'INVALID_PHONE_NUMBER' | 'DUPLICATE_NICKNAME';

export const usePostOAuthLogin = (nextPage?: string) => {
  const router = useRouter();
  const [isTokenIssued, setIsTokenIssued] = useState(false);
  const { mutate: getAccountInfo } = useGetUserAccountInfo({ redirect: true });
  const { open } = useModal();
  const { setTokenResponse } = useAuth();

  useEffect(() => {
    // 토큰 발급시 정보 조회하여 userRole에 따라 리다이렉트
    if (isTokenIssued) {
      getAccountInfo();
    }
  }, [isTokenIssued]);

  return useMutation({
    mutationFn: (data: SignUpData | OAuthLoginRequest) => User.oAuthLogin(data),
    onSuccess: (res) => {
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
      }
      // 기존 회원 로그인
      else {
        // 토큰 발급 여부 업데이트하여 정보 조회 로직 실행
        setIsTokenIssued(true);
      }
    },
    onError: (err: ErrorResponse<LoginErrorCode>) => {
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
