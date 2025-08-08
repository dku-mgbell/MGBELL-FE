'use client';

/* eslint-disable no-console */

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onMessage, Unsubscribe } from 'firebase/messaging';
import { fetchToken, messaging } from '@/firebase';

async function getNotificationPermissionAndToken() {
  if (!('Notification' in window)) {
    console.info('This browser does not support desktop notification');
    return null;
  }

  if (Notification.permission === 'granted') {
    return fetchToken();
  }

  if (Notification.permission !== 'denied') {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      return fetchToken();
    }
  }

  console.log('Notification permission not granted.');
  return null;
}

const useFcmToken = () => {
  const router = useRouter();
  const [notificationPermissionStatus, setNotificationPermissionStatus] =
    useState<NotificationPermission | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const retryLoadToken = useRef(0);
  const isLoading = useRef(false);

  const loadToken = async () => {
    if (isLoading.current) return;

    isLoading.current = true;
    const fcmToken = await getNotificationPermissionAndToken();

    localStorage.setItem('fcmToken', fcmToken ?? '');

    if (Notification.permission === 'denied') {
      setNotificationPermissionStatus('denied');
      console.info(
        '%cPush Notifications issue - permission denied',
        'color: green; background: #c7c7c7; padding: 8px; font-size: 20px',
      );
      isLoading.current = false;
      return;
    }

    if (!fcmToken) {
      if (retryLoadToken.current >= 3) {
        console.info(
          '%cPush Notifications issue - unable to load token after 3 retries',
          'color: green; background: #c7c7c7; padding: 8px; font-size: 20px',
        );
        isLoading.current = false;
        return;
      }

      retryLoadToken.current += 1;
      console.error('An error occurred while retrieving token. Retrying...');
      isLoading.current = false;
      await loadToken();
      return;
    }

    setNotificationPermissionStatus(Notification.permission);
    setToken(fcmToken);
    isLoading.current = false;
  };

  useEffect(() => {
    if ('Notification' in window) {
      loadToken();
    }
  }, []);

  useEffect(() => {
    const setupListener = async () => {
      if (!token) return;

      console.log(`onMessage registered with token ${token}`);
      const m = await messaging();
      if (!m) return;

      const unsubscribe = onMessage(m, (payload) => {
        if (Notification.permission !== 'granted') return;

        console.log('Foreground push notification received:', payload);
        const link = payload.fcmOptions?.link || payload.data?.link;

        if (link) {
          console.log(
            `${payload.notification?.title}: ${payload.notification?.body}`,
          );
        } else {
          console.log(
            `${payload.notification?.title}: ${payload.notification?.body}`,
          );
        }

        const n = new Notification(
          payload.notification?.title || 'New message',
          {
            body: payload.notification?.body || 'This is a new message',
            data: link ? { url: link } : undefined,
          },
        );

        n.onclick = (event) => {
          event.preventDefault();
          const redirectLink = (event.target as any)?.data?.url;
          if (redirectLink) {
            router.push(redirectLink);
          } else {
            console.log('No link found in the notification payload');
          }
        };
      });

      return unsubscribe; // eslint-disable-line consistent-return
    };

    let unsubscribe: Unsubscribe | null = null;

    setupListener().then((unsub) => {
      if (unsub) {
        unsubscribe = unsub;
      }
    });

    return () => unsubscribe?.();
  }, [token, router]);

  const requestNotificationPermission = async () => {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      loadToken();
      return true;
    }
    alert('알림 권한 허용 후 사용 가능합니다.');
    return false;
  };

  return {
    token,
    notificationPermissionStatus,
    loadToken,
    requestNotificationPermission,
  };
};

export default useFcmToken;
