import { NextResponse } from 'next/server';
import { OAuthAccessTokenResponse } from '@/types/oauth';
import { NAVER_OAUTH_CLIENT_ID } from '@/constant';

export async function POST(request: Request) {
  const { code, state } = await request.json();
  const clientId = NAVER_OAUTH_CLIENT_ID;
  const res = await fetch(`https://nid.naver.com/oauth2.0/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: clientId!,
      client_secret: process.env.NAVER_OAUTH_CLIENT_SECRET!,
      code: code!,
      state: state!,
    }),
  });
  if (!res.ok) {
    return NextResponse.json(
      { error: 'Failed to fetch data from Kakao' },
      { status: res.status },
    );
  }
  const data = (await res.json()) as OAuthAccessTokenResponse;
  return NextResponse.json(data);
}
