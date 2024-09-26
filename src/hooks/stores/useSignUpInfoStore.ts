import { UserRole } from '@/types/user';
import { create } from 'zustand';

interface SignUpInfo {
  name: string;
  phoneNumber: string;
  email?: string;
  userRole: UserRole | null;
  password: string;
}

type SignUpInfoState = {
  signUpInfo: SignUpInfo;
  setSignUpInfo: (state: SignUpInfo) => void;
};

export const signUpInfoDefaultValue = {
  name: '',
  phoneNumber: '',
  email: '',
  userRole: null,
  password: '',
};

export const useSignUpInfoStore = create<SignUpInfoState>((set) => ({
  signUpInfo: signUpInfoDefaultValue,
  setSignUpInfo: (state: SignUpInfo) => set({ signUpInfo: state }),
}));
