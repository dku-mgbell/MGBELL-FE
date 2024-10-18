import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { address: string } },
) {
  const { address } = params;

  const clientId = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID;
  const clientKey = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_KEY;

  if (!clientId || !clientKey) {
    return NextResponse.json(
      { error: 'Missing Naver Maps API credentials' },
      { status: 500 },
    );
  }

  const res = await fetch(
    `https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query=${encodeURIComponent(address)}`,
    {
      headers: {
        Accept: 'application/json',
        'X-NCP-APIGW-API-KEY-ID': clientId,
        'X-NCP-APIGW-API-KEY': clientKey,
      },
    },
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: 'Failed to fetch data from Naver Maps' },
      { status: res.status },
    );
  }

  const data = await res.json();
  return NextResponse.json(data);
}
