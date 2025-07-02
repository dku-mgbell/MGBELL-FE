import { create } from 'zustand';
import { SignUpData as SignUpInfo } from '@/types/sign-up';

type SignUpState = {
  signUpInfo: SignUpInfo;
  setSignUpInfo: (state: SignUpInfo) => void;
  updateSignUpInfo: (field: keyof SignUpInfo, value: string) => void;
  resetSignUpInfo: () => void;
};

export const signUpInfoDefaultValue = {
  userRole: null,
  nickName: '',
  providerType: null,
  authCode: '',
};

export const useSignUpStore = create<SignUpState>((set) => ({
  signUpInfo: signUpInfoDefaultValue,
  setSignUpInfo: (state: SignUpInfo) => set({ signUpInfo: state }),
  updateSignUpInfo: (field: keyof SignUpInfo, value: string) =>
    set((state) => ({
      signUpInfo: { ...state.signUpInfo, [field]: value },
    })),
  resetSignUpInfo: () => set({ signUpInfo: signUpInfoDefaultValue }),
}));
