import { useRouter } from 'next/navigation';

export const useAuth = () => {
  const route = useRouter();

  const setTokenResponse = ({
    accessToken,
    refreshToken,
  }: {
    accessToken: string;
    refreshToken: string;
  }) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  };

  const isLoggedIn =
    typeof window !== 'undefined'
      ? !!localStorage.getItem('accessToken')
      : false;

  const logout = (option?: { withoutRedirect?: boolean }) => {
    if (typeof window !== 'undefined') {
      Object.keys(localStorage).forEach((key) => {
        if (key?.includes('accessToken') || key?.includes('refreshToken')) {
          localStorage.removeItem(key);
        }
      });
      if (!option?.withoutRedirect) {
        route.push('/login');
      }
    }
  };

  const setToken = ({ accessToken }: { accessToken: string }) => {
    localStorage.setItem('accessToken', accessToken);
  };

  const redirectLoginPage = () => {
    // TODO 안내 매시지 토스트로 표시
    if (!isLoggedIn) route.push('/login');
  };

  return { logout, redirectLoginPage, isLoggedIn, setToken, setTokenResponse };
};
