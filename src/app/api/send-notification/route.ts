import { NextRequest, NextResponse } from 'next/server';
import admin from 'firebase-admin';
import { Message } from 'firebase-admin/messaging';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(
      JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT!),
    ),
  });
}

export async function POST(request: NextRequest) {
  const { token, title, message, link } = await request.json();

  const payload: Message = {
    token,
    notification: {
      title,
      body: message,
    },
    webpush: link && {
      fcmOptions: {
        link,
      },
    },
  };

  try {
    await admin.messaging().send(payload);

    return NextResponse.json({ success: true, message: 'Notification sent!' });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
