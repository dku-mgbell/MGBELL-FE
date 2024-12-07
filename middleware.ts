import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const hostname = req.headers.get('host') || '';

  if (hostname.startsWith('about.')) {
    url.pathname = '/about';
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
