import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { useUserAccountInfoStore } from '@/app/mypage/(index)/_stores/useUserAccountInfoStore';
import { User } from '@/hooks/api/user';
import { ErrorResponse } from '@/types/api';
import { READY_TO_DEPLOY } from '@/constant';

type ErrorCode = 'STORE_NOT_FOUND';

export const useGetUserAccountInfo = (options?: { redirect?: boolean }) => {
  const router = useRouter();
  const { setUserAccountInfo } = useUserAccountInfoStore();
  const redirect = options?.redirect ?? false;

  return useMutation({
    mutationKey: ['user-account-info'],
    mutationFn: () => User.getAccountInfo(),
    onSuccess: (res) => {
      if (!redirect) {
        setUserAccountInfo(res);
        return;
      }

      if (redirect) {
        // CUSTOMER 계정
        if (res.userRole === 'CUSTOMER') {
          router.push('/');
        }

        // OWNER 계정 & 가게 승인
        else if (res.approved === 'APPROVED') {
          if (res.goodsId !== 'null') {
            router.push(
              `/store/${READY_TO_DEPLOY === 'true' ? 'order' : 'temp'}`,
            );
          } else {
            router.push('/register/bag');
          }
        }
        // OWNER 계정 & 가게 승인 대기, 거절
        else if (res.approved === 'WAITING' || res.approved === 'REJECTED') {
          router.push('/register/store/pending');
        }
      }
    },
    onError: (err: ErrorResponse<ErrorCode>) => {
      const errorCode = err.response.data.code;
      if (errorCode === 'STORE_NOT_FOUND') {
        router.push('/register/store');
      }
    },
  });
};
