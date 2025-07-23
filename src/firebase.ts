import { getToken } from 'firebase/messaging';
import { initializeMessaging } from '@/hooks/notification/firebase';

export const messaging = async () => {
  return initializeMessaging();
};

export const fetchToken = async () => {
  const messagingInstance = initializeMessaging();
  if (!messagingInstance) return null;

  try {
    const token = await getToken(messagingInstance, {
      vapidKey: process.env.NEXT_PUBLIC_VAPID_KEY,
    });
    return token;
  } catch (error) {
    return null;
  }
};
