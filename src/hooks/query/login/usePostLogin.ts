import { User } from '@/hooks/api/user';
import { useAuthStore } from '@/hooks/stores/useAuthStore';
import useModal from '@/hooks/useModal';
import { ErrorResponse } from '@/types/api';
import {
  LoginErrorCode,
  LoginErrorMessage,
  LoginInfo,
  LoginResponse,
} from '@/types/login';
import { useMutation } from '@tanstack/react-query';
import { usePathname, useRouter } from 'next/navigation';

export const usePostLogin = () => {
  const route = useRouter();
  const { setIsLoggedIn, setUserRole } = useAuthStore();
  const pathname = usePathname();
  const { open } = useModal();

  return useMutation({
    mutationFn: (data: LoginInfo) => User.login(data),
    onSuccess: ({ accessToken, refreshToken, role }: LoginResponse) => {
      if (pathname === '/login') {
        if (role === 'OWNER') {
          route.push('/store/order');
        } else {
          route.push('/');
        }
      }
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      setIsLoggedIn(true);
      setUserRole(role);
    },
    onError: (err: ErrorResponse<LoginErrorCode>) => {
      open({
        content: LoginErrorMessage[err.response.data.message[0]],
      });
    },
  });
};
