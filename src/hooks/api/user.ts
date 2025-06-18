import {
  KakaoAccessTokenResponse,
  LoginInfo,
  LoginResponse,
  DeleteOAuthAccountRequest,
} from '@/types/login';
import {
  OAuthLoginRequest,
  SignUpData,
  SignUpInfo,
  VerifyAlreadySignedUpRequest,
} from '@/types/sign-up';
import {
  AccountInfo,
  PasswordChange,
  UserActivity,
  UserInfoResponse,
} from '@/types/user';
import { WIP_API_BASE_URL } from '@/constant';
// eslint-disable-next-line import/no-cycle
import { API } from '.';

export const User = {
  async login(req: LoginInfo): Promise<LoginResponse> {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req),
    });
    if (!response.ok) {
      throw new Error('로그인 실패');
    }

    const data = await response.json();
    return data;
  },
  async reissueToken(token: string) {
    const response = await API.post('/user/reissue', { refreshToken: token });
    return response.data as Omit<LoginResponse, 'role'>;
  },
  async signUp(data: SignUpInfo, token: string) {
    const response = await API.post(`/user/signup/${token}`, data);
    return response.data;
  },

  async oAuthSignUp(data: Omit<SignUpInfo, 'email'>) {
    const response = await API.patch('/oauth/signup', data);
    return response.data;
  },
  async oAuthLogin(data: SignUpData | OAuthLoginRequest) {
    const response = await API.post(
      `${WIP_API_BASE_URL}/auth/oauth/login`,
      data,
    );
    return response;
  },
  async deleteAccount() {
    const response = await API.delete('/user/delete');
    return response.data;
  },
  async getInfo(): Promise<UserInfoResponse> {
    const response = await API.get('/user/whoAmI');
    return response.data;
  },
  async changePassword(data: PasswordChange) {
    const response = await API.patch('/user/password', data);
    return response.data;
  },
  async getActivity(): Promise<UserActivity> {
    const response = await API.get('/user/myPage');
    return response.data;
  },
  async sendFindPasswordCode(email: string) {
    const response = await API.post('/email/sendCode/password', { email });
    return response.data;
  },
  async verifyFindPasswordCode({
    email,
    code,
  }: {
    email: string;
    code: string;
  }) {
    const response = await API.post('/email/verifyCode/password', {
      email,
      token: code,
    });
    return response.data;
  },
  async resetPassword(data: {
    email: string;
    token: string;
    newPassword: string;
  }) {
    const response = await API.patch('/user/password/reset', data);
    return response.data;
  },
  async verifyAlreadySignedUp(data: VerifyAlreadySignedUpRequest) {
    const response = await API.post(`${WIP_API_BASE_URL}/verify/social`, data);
    return response.data;
  },
  async postKakaoAccessToken(data: {
    code: string;
    action: 'login' | 'delete';
  }) {
    const response = await fetch('/api/login/oauth/kakao', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    const res = (await response.json()) as KakaoAccessTokenResponse;
    return res;
  },
  async getAccountInfo(): Promise<AccountInfo> {
    const response = await API.post(`${WIP_API_BASE_URL}/user/me`);
    return response.data;
  },
  async deleteOAuthAccount(data: DeleteOAuthAccountRequest) {
    const response = await API.delete(`${WIP_API_BASE_URL}/auth/withdraw`, {
      data,
    });

    return response.data;
  },
};
