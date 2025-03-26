import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { User } from '@/hooks/api/user';
import { PasswordChange } from '@/types/user';
import useModal from '@/hooks/useModal';

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
