import { NextResponse } from 'next/server';
import { OAuthAccessTokenResponse } from '@/types/oauth';
import { generateAppleClientSecret } from '@/utils/generateAppleClientSecret';

export async function POST(request: Request) {
  const { code, action } = await request.json();
  const clientId = process.env.APPLE_CLIENT_ID;
  const { token: clientSecret } = generateAppleClientSecret();
  const redirectUri = `https://magambell.com/api/login/oauth/apple/callback/${action}`;

  const res = await fetch(`https://appleid.apple.com/auth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: clientId!,
      client_secret: clientSecret,
      code: code!,
      grant_type: 'authorization_code',
      redirect_uri: redirectUri,
    }),
  });

  if (!res.ok) {
    const errorText = await res.text();

    let errorResponse;
    try {
      errorResponse = JSON.parse(errorText);
    } catch {
      errorResponse = { error: errorText };
    }

    return NextResponse.json(
      {
        error: 'Failed to fetch data from Apple',
        details: errorResponse,
        status: res.status,
      },
      { status: res.status },
    );
  }
  const data = (await res.json()) as OAuthAccessTokenResponse;
  return NextResponse.json(data);
}
