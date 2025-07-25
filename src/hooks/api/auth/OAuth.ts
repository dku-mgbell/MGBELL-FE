import { OAuthAccessTokenResponse, OAuthProviderType } from '@/types/oauth';
import {
  OAuthLoginRequest,
  SignUpData,
  VerifyAlreadySignedUpRequest,
} from '@/types/sign-up';
import { WIP_API_BASE_URL } from '@/constant';
// eslint-disable-next-line import/no-cycle
import { API } from '..';

export const OAuth = {
  async login(data: SignUpData | OAuthLoginRequest) {
    const response = await API.post(
      `${WIP_API_BASE_URL}/auth/oauth/login`,
      data,
    );
    return response;
  },
  async verifyAlreadySignedUp(
    data: VerifyAlreadySignedUpRequest,
  ): Promise<boolean> {
    const response = await API.get(
      `${WIP_API_BASE_URL}/verify/social?providerType=${data.providerType}&authCode=${data.authCode}  `,
    );
    return response.data.data as boolean;
  },
  async postOAuthCode(data: {
    provider: OAuthProviderType;
    code: string;
    action: 'login' | 'delete';
    state?: string | null;
  }) {
    const requestData = { ...data };
    if (requestData.provider !== 'NAVER') {
      delete requestData.state;
    }

    const response = await fetch(
      `/api/login/oauth/${requestData.provider.toLowerCase()}`,
      {
        method: 'POST',
        body: JSON.stringify(requestData),
      },
    );
    const res = (await response.json()) as OAuthAccessTokenResponse;
    return res;
  },
};
