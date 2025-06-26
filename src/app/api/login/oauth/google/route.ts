import { NextResponse } from 'next/server';
import { OAuthAccessTokenResponse } from '@/types/oauth';
import { BASE_URL, GOOGLE_OAUTH_CLIENT_ID } from '@/constant';

export async function POST(request: Request) {
  const { code } = await request.json();

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      code,
      client_id: GOOGLE_OAUTH_CLIENT_ID!,
      client_secret: process.env.GOOGLE_OAUTH_CLIENT_SECRET!,
      redirect_uri: `${BASE_URL}/login/verify/GOOGLE`,
      grant_type: 'authorization_code',
    }).toString(),
  });

  if (!tokenRes.ok) {
    return NextResponse.json(
      { error: 'Failed to get access token from Google' },
      { status: tokenRes.status },
    );
  }

  const tokenData = (await tokenRes.json()) as OAuthAccessTokenResponse;
  return NextResponse.json(tokenData);
}
