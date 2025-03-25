import { useRouter } from 'next/navigation';
import { User } from '@/hooks/api/user';
import useModal from '@/hooks/useModal';
import { PasswordChange } from '@/types/user';
import { useMutation } from '@tanstack/react-query';

export const useChangePassword = () => {
  const route = useRouter();
  const { open } = useModal();

  return useMutation({
    mutationFn: (data: PasswordChange) => User.changePassword(data),
    onSuccess: () => {
      route.push('/mypage/settings/account');
      open({ content: '비밀번호 변경이 완료되었습니다.' });
    },
  });
};
