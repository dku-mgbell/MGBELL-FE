'use client';

import { useEffect } from 'react';
import {
  initializeMessaging,
  issueFcmToken,
  onMessageListener,
} from '@/hooks/notification/firebase';
import { useRegisterFCMToken } from '@/hooks/query/notification/useRegisterFCMToken';

export default function InitialSetter() {
  const { mutate: registerFCMToken } = useRegisterFCMToken();

  useEffect(() => {
    const messaging = initializeMessaging();
    const fcmToken =
      typeof window !== 'undefined' ? localStorage.getItem('fcmToken') : null;
    if (messaging) {
      issueFcmToken(messaging).then(() => {
        if (fcmToken) registerFCMToken(fcmToken);
      });
      onMessageListener(messaging).then((payload) => {
        // eslint-disable-next-line no-console
        console.log(payload);
      });
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker
          .register('/firebase-messaging-sw.js')
          .then((registration) => {
            // eslint-disable-next-line no-console
            console.log(
              'Service Worker registered with scope:',
              registration.scope,
            );
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.error('Service Worker registration failed:', error);
          });
      }
    }
  }, []);

  return <div> </div>;
}
