import { useRouter } from 'next/navigation';
import { useAuthStore } from './stores/useAuthStore';

export const useAuth = () => {
  const { setIsLoggedIn, setUserRole } = useAuthStore();
  const route = useRouter();

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setIsLoggedIn(false);
    setUserRole(null);
    route.push('/login');
  };

  return { logout };
};
