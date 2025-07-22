import { OAuthProviderType } from '@/types/oauth';
import {
  APPLE_OAUTH_CLIENT_ID,
  BASE_URL,
  GOOGLE_OAUTH_CLIENT_ID,
  KAKAO_OAUTH_REST_API_KEY,
  NAVER_OAUTH_CLIENT_ID,
} from '@/constant';

interface OAuthConfig {
  oauth_base_uri: Record<OAuthProviderType, string>;
  oauth_params: Record<OAuthProviderType, Record<string, string>>;
}

export default function getOAuthLink(
  provider: OAuthProviderType,
  options?: {
    action?: 'login' | 'delete';
  },
): string {
  const action = options?.action || 'login';
  const REDIRECT_BASE_URI = BASE_URL;

  const REDIRECT_URL_PATH = {
    login: 'login/verify',
    delete: 'delete',
  };

  const config: OAuthConfig = {
    oauth_base_uri: {
      KAKAO: 'https://kauth.kakao.com/oauth/authorize?',
      GOOGLE: 'https://accounts.google.com/o/oauth2/v2/auth?',
      NAVER: 'https://nid.naver.com/oauth2.0/authorize?',
      APPLE: 'https://appleid.apple.com/auth/authorize?',
    },
    oauth_params: {
      KAKAO: {
        client_id: KAKAO_OAUTH_REST_API_KEY!,
      },
      GOOGLE: {
        client_id: GOOGLE_OAUTH_CLIENT_ID!,
        scope: `${encodeURIComponent('openid email profile')}`,
      },
      NAVER: {
        client_id: NAVER_OAUTH_CLIENT_ID!,
        state: crypto.randomUUID(),
      },
      APPLE: {
        client_id: APPLE_OAUTH_CLIENT_ID!,
        scope: `${encodeURIComponent('name email')}`,
        state: crypto.randomUUID(),
        response_mode: 'form_post',
      },
    },
  };

  const COMMON_PARAMS = {
    response_type: 'code',
    redirect_uri: `${REDIRECT_BASE_URI}/${REDIRECT_URL_PATH[action]}/${provider}`,
  };

  const BASE_URI = config.oauth_base_uri[provider as OAuthProviderType];
  const OAUTH_PARAMS = config.oauth_params[provider];
  const OAUTH_PARAMS_STRING = Object.entries({
    ...OAUTH_PARAMS,
    ...COMMON_PARAMS,
  })
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  const OAUTH_LINK = `${BASE_URI}${OAUTH_PARAMS_STRING}`;

  return OAUTH_LINK;
}
