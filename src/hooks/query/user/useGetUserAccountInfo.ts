import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { User } from '@/hooks/api/user';
import { ErrorResponse } from '@/types/api';

type ErrorCode = 'OWNER_NOT_FOUND_STORE';

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
        else if (res.data.approved) {
          router.push('/store');
        }
        // OWNER 계정 & 가게 미승인
        else if (res.data.approved === false) {
          router.push('/register/store/pending');
        }
      }
    },
    onError: (err: ErrorResponse<ErrorCode>) => {
      const errorCode = err.response.data.code;
      if (errorCode === 'OWNER_NOT_FOUND_STORE') {
        router.push('/register/store');
      }
    },
  });
};
