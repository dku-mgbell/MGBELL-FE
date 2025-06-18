import { NextResponse } from 'next/server';
import { KakaoAccessTokenResponse } from '@/types/login';

export async function POST(request: Request) {
  const { code, action } = await request.json();

  const clientId = process.env.KAKAO_OAUTH_REST_API_KEY;

  const redirectUri =
    action === 'login'
      ? 'http://localhost:3000/login/verify?type=KAKAO'
      : 'http://localhost:3000/delete?type=KAKAO';

  const res = await fetch(`https://kauth.kakao.com/oauth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: clientId!,
      code: code!,
      redirect_uri: redirectUri,
    }),
  });
  if (!res.ok) {
    return NextResponse.json(
      { error: 'Failed to fetch data from Kakao' },
      { status: res.status },
    );
  }
  const data = (await res.json()) as KakaoAccessTokenResponse;
  return NextResponse.json(data);
}
