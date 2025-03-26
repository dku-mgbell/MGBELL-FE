import { Dispatch, SetStateAction } from 'react';
import { useMutation } from '@tanstack/react-query';
import { User } from '@/hooks/api/user';
import useModal from '@/hooks/useModal';

export const useVerifyFindPasswordCode = (
  updateIsCodeValid: Dispatch<SetStateAction<boolean>>,
  updateResetPasswordToken: Dispatch<SetStateAction<string>>,
) => {
  const { open } = useModal();

  return useMutation({
    mutationFn: ({ email, code }: { email: string; code: string }) =>
      User.verifyFindPasswordCode({ email, code }),
    onSuccess: (data: { valid: boolean; signupToken: string }) => {
      if (data.valid) {
        updateIsCodeValid(true);
        updateResetPasswordToken(data.signupToken);
      }
    },
    onError: () => {
      open({
        content: '인증코드를 다시 확인해주세요.',
      });
    },
  });
};
