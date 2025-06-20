import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { User } from '@/hooks/api/user';
import { ErrorResponse } from '@/types/api';

type ErrorCode = 'STORE_NOT_FOUND';

export const useGetUserAccountInfo = ({ redirect }: { redirect?: boolean }) => {
  const router = useRouter();
  return useMutation({
    mutationKey: ['user-account-info'],
    mutationFn: () => User.getAccountInfo(),
    onSuccess: (res) => {
      if (redirect) {
        // CUSTOMER 계정
        if (res.data.userRole === 'CUSTOMER') {
          router.push('/');
        }

        // OWNER 계정 & 가게 승인
        else if (res.data.approved === 'APPROVED') {
          if (res.data.goodsId) {
            router.push('/store/order');
          } else {
            router.push('/register/bag');
          }
        }
        // OWNER 계정 & 가게 승인 대기, 거절
        else if (
          res.data.approved === 'WAITING' ||
          res.data.approved === 'REJECTED'
        ) {
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
