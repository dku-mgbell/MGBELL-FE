import { User } from '@/hooks/api/user';
import { useAuthStore } from '@/hooks/stores/useAuthStore';
import { LoginInfo, LoginResponse } from '@/types/login';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const usePostLogin = () => {
  const route = useRouter();
  const { setIsLoggedIn, setUserRole } = useAuthStore();

  return useMutation({
    mutationFn: (data: LoginInfo) => User.login(data),
    onSuccess: ({ accessToken, refreshToken, role }: LoginResponse) => {
      route.push('/');
      localStorage.setItem(accessToken, accessToken);
      localStorage.setItem(refreshToken, refreshToken);
      setIsLoggedIn(true);
      setUserRole(role);
    },
  });
};
