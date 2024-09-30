import { SignUpInfo } from '@/types/sign-up';
import { create } from 'zustand';

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
