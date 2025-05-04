import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
  const body = await req.json();

  const response = await fetch(`${API_BASE_URL}user/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    return NextResponse.json({ error: response }, { status: response.status });
  }

  const data = await response.json();

  const res = NextResponse.json(data);
  res.cookies.set('accessToken', data.accessToken, {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });
  res.cookies.set('refreshToken', data.refreshToken, {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });

  return res;
}
