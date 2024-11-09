import { useRouter } from 'next/navigation';
import { useAuthStore } from './stores/useAuthStore';

export const useAuth = () => {
  const { setIsLoggedIn, setUserRole, setOAuthState } = useAuthStore();
  const route = useRouter();

  const isLoggedIn =
    typeof window !== 'undefined'
      ? !!localStorage.getItem('accessToken')
      : null;

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setIsLoggedIn(false);
    setUserRole(null);
    setOAuthState({
      isOAuth: false,
      isNewUser: false,
    });
    route.push('/login');
  };

  const setToken = ({ accessToken }: { accessToken: string }) => {
    localStorage.setItem('accessToken', accessToken);
  };

  const oAuthLogin = ({ accessToken }: { accessToken?: string }) => {
    if (accessToken) setToken({ accessToken });
    setIsLoggedIn(true);
    route.push('/');
    // localStorage.setItem('refreshToken', refreshToken);
    // setUserRole(role);
  };

  const redirectLoginPage = () => {
    // TODO 안내 매시지 토스트로 표시
    if (!isLoggedIn) route.push('/login');
  };

  return { logout, oAuthLogin, redirectLoginPage, isLoggedIn, setToken };
};
