'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  initializeMessaging,
  issueFcmToken,
  onMessageListener,
} from '@/hooks/notification/firebase';
import { useRegisterFCMToken } from '@/hooks/query/notification/useRegisterFCMToken';
import { useAuthStore } from '@/hooks/stores/useAuthStore';
import { useAuth } from '@/hooks/useAuth';
import { IndexPageSearchParams } from '../types';

export default function InitialSetter({
  searchParams,
}: {
  searchParams: IndexPageSearchParams;
}) {
  const { setUserRole, setOAuthState, userRole } = useAuthStore();
  const { setToken, oAuthLogin } = useAuth();
  const route = useRouter();
  const { mutate: registerFCMToken } = useRegisterFCMToken();

  useEffect(() => {
    const messaging = initializeMessaging();
    const fcmToken = localStorage.getItem('fcmToken');
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

  useEffect(() => {
    if (searchParams.userRole) setUserRole(searchParams.userRole);
    if (searchParams.isNewUser === 'true') {
      route.push('/sign-up?oAuth=true');
      setOAuthState({
        isOAuth: true,
        isNewUser: true,
      });
      setToken({ accessToken: searchParams.accessToken });
    } else if (searchParams.isNewUser === 'false') {
      oAuthLogin({ accessToken: searchParams.accessToken });
      setOAuthState({
        isOAuth: true,
        isNewUser: false,
      });
    }
  }, [searchParams]);

  useEffect(() => {
    if (userRole === 'OWNER') route.push('/store/order');
  }, [userRole]);

  return <div> </div>;
}
