import { UserRole } from '@/types/user';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AuthState = {
  isLoggedIn: boolean;
  setIsLoggedIn: (state: boolean) => void;
  userRole: UserRole | null;
  setUserRole: (state: UserRole | null) => void;
  isOAuth: boolean;
  setIsOAuth: (state: boolean) => void;
};

export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      isLoggedIn: false,
      setIsLoggedIn: (state: boolean) => {
        set({ isLoggedIn: state });
      },
      isOAuth: false,
      setIsOAuth: (state: boolean) => {
        set({ isOAuth: state });
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
