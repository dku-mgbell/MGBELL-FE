import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { User } from '@/hooks/api/user';
import { ErrorResponse } from '@/types/api';
import { OAuthLoginRequest, SignUpData } from '@/types/sign-up';
import useModal from '@/hooks/useModal';
import { useGetUserAccountInfo } from '../../user/useGetUserAccountInfo';

type LoginErrorCode = 'INVALID_PHONE_NUMBER' | 'DUPLICATE_NICKNAME';

export const usePostOAuthLogin = (nextPage?: string) => {
  const router = useRouter();
  const [isTokenIssued, setIsTokenIssued] = useState(false);
  const { mutate: getAccountInfo } = useGetUserAccountInfo({ redirect: true });
  const { open } = useModal();

  useEffect(() => {
    // 토큰 발급시 정보 조회하여 userRole에 따라 리다이렉트
    if (isTokenIssued) {
      getAccountInfo();
    }
  }, [isTokenIssued]);

  return useMutation({
    mutationFn: (data: SignUpData | OAuthLoginRequest) => User.oAuthLogin(data),
    onSuccess: (res) => {
      const authHeader = res.headers.authorization;
      const accessToken = authHeader ? authHeader.split(' ')[1] : undefined;

      // 토큰 저장
      if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
      }
      // 회원가입 시 정보 입력
      if (nextPage) {
        router.push(nextPage);
      }

      // 로그인
      // 토큰 발급 여부 업데이트를 통하여 정보 조회 로직 실행
      setIsTokenIssued(true);
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
