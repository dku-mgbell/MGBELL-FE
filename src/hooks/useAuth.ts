import { useRouter } from 'next/navigation';
import { useAuthStore } from './stores/useAuthStore';

export const useAuth = () => {
  const { setIsLoggedIn, setUserRole } = useAuthStore();
  const route = useRouter();

  const isLoggedIn = !!localStorage.getItem('accessToken');

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setIsLoggedIn(false);
    setUserRole(null);
    route.push('/login');
  };

  const redirectLoginPage = () => {
    // TODO 안내 매시지 토스트로 표시
    if (!isLoggedIn) route.push('/login');
  };

  return { logout, redirectLoginPage, isLoggedIn };
};
