export async function POST(request: Request): Promise<Response> {
  try {
    const formData = await request.formData();
    const code = formData.get('code') as string;
    const idToken = formData.get('id_token') as string;
    const state = formData.get('state') as string;

    const redirectUrl = new URL('/delete/APPLE', request.url);
    redirectUrl.searchParams.set('code', code);
    redirectUrl.searchParams.set('idToken', idToken);
    redirectUrl.searchParams.set('state', state);

    return Response.redirect(redirectUrl.toString(), 302);
  } catch (error) {
    return new Response('Bad Request', { status: 400 });
  }
}

// POST가 아닌 다른 메서드는 허용하지 않음
export async function GET(): Promise<Response> {
  return new Response('Method Not Allowed', { status: 405 });
}
