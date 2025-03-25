import { Dispatch, SetStateAction } from 'react';
import { SignUp } from '@/hooks/api/sign-up';
import useModal from '@/hooks/useModal';
import { useMutation } from '@tanstack/react-query';

export const useCheckDuplicate = (
  updateIsDuplicateUser: Dispatch<SetStateAction<boolean>>,
) => {
  const { open } = useModal();

  return useMutation({
    mutationFn: (email: string) => SignUp.checkDuplicate(email),
    onSuccess: ({ valid }: { valid: boolean }) => {
      if (!valid) {
        updateIsDuplicateUser(false);
        return;
      }
      open({ content: '해당 이메일로 가입된 계정이 존재합니다.' });
    },
  });
};
