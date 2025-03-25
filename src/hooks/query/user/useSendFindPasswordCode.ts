import { Dispatch, SetStateAction } from 'react';
import { User } from '@/hooks/api/user';
import useModal from '@/hooks/useModal';
import { useMutation } from '@tanstack/react-query';

export const useSendFindPasswordCode = (
  updateIsMailSent: Dispatch<SetStateAction<boolean>>,
) => {
  const { open } = useModal();

  return useMutation({
    mutationFn: (email: string) => User.sendFindPasswordCode(email),
    onSuccess: () => {
      updateIsMailSent(true);
    },
    onError: () => {
      open({
        content: '해당 이메일로 가입된 계정이 존재하지 않습니다.',
      });
    },
  });
};
