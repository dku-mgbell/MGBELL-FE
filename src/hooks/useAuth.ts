import { useRouter } from 'next/navigation';
import useModal from './useModal';

export const useAuth = () => {
  const route = useRouter();
  const { open } = useModal();

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

  const openRequireLoginModal = () => {
    open({
      title: '로그인이 필요해요!',
      description: '서비스 이용을 위해 로그인이 필요해요.',
      confirmEvent: () => {
        route.push('/login');
      },
      confirmButtonText: '로그인',
    });
  };

  return {
    logout,
    redirectLoginPage,
    isLoggedIn,
    setToken,
    setTokenResponse,
    openRequireLoginModal,
  };
};
