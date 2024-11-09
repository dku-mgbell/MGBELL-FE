import { UserRole } from '@/types/user';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface OAuthState {
  isOAuth: boolean;
  isNewUser: boolean;
}

type AuthState = {
  isLoggedIn: boolean | undefined;
  setIsLoggedIn: (state: boolean | undefined) => void;
  userRole: UserRole | null;
  setUserRole: (state: UserRole | null) => void;
  OAuthState: OAuthState;
  setOAuthState: (state: OAuthState) => void;
};

export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      isLoggedIn: undefined,
      setIsLoggedIn: (state: boolean | undefined) => {
        set({ isLoggedIn: state });
      },
      OAuthState: {
        isOAuth: false,
        isNewUser: false,
      },
      setOAuthState: (state: OAuthState) => {
        set({ OAuthState: state });
      },
      userRole: null,
      setUserRole: (state: UserRole | null) => {
        set({ userRole: state });
      },
    }),
    {
      name: 'auth',
    },
  ),
);
