import { initializeApp } from 'firebase/app';
import {
  getToken,
  getMessaging,
  Messaging,
  onMessage,
} from 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyD7w_zS1SR5ema9t65Df7gOxdU_PEhM1Uc',
  authDomain: 'magambell-93320.firebaseapp.com',
  projectId: 'magambell-93320',
  storageBucket: 'magambell-93320.firebasestorage.app',
  messagingSenderId: '766230300795',
  appId: '1:766230300795:web:357e334241b7c58743fade',
  measurementId: 'G-QNTGWEQ65E',
};

const firebaseApp = initializeApp(firebaseConfig);

export const initializeMessaging = () => {
  if (typeof window !== 'undefined') {
    try {
      const messaging = getMessaging(firebaseApp);
      return messaging;
    } catch (error) {
      // console.error('Firebase Messaging initialization failed:', error);
      return null;
    }
  }
  return null;
};

export const issueFcmToken = async (messaging: Messaging) => {
  return Notification.requestPermission()
    .then((permission) => {
      if (permission === 'granted') {
        getToken(messaging, {
          vapidKey: process.env.NEXT_PUBLIC_VAPID_KEY,
        }).then((token) => {
          localStorage.setItem('fcmToken', token);
          return token;
        });
      }
    })
    .catch((err) => {
      throw err;
    });
};

export const onMessageListener = (messaging: Messaging) =>
  new Promise((resolve) => {
    if (messaging) {
      onMessage(messaging, (payload) => {
        resolve(payload);
      });
    }
  });
