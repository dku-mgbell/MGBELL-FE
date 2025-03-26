import { create } from 'zustand';
import { SignUpInfo } from '@/types/sign-up';

type SignUpInfoState = {
  signUpInfo: SignUpInfo;
  setSignUpInfo: (state: SignUpInfo) => void;
  token?: string;
  setToken: (state: string) => void;
};

export const signUpInfoDefaultValue = {
  name: '',
  phoneNumber: '',
  email: '',
  userRole: null,
  password: '',
  nickname: '',
};

export const useSignUpInfoStore = create<SignUpInfoState>((set) => ({
  signUpInfo: signUpInfoDefaultValue,
  setSignUpInfo: (state: SignUpInfo) => set({ signUpInfo: state }),
  token: undefined,
  setToken: (state: string) => set({ token: state }),
}));
