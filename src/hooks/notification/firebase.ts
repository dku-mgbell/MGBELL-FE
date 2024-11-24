import { initializeApp } from 'firebase/app';
import {
  getToken,
  getMessaging,
  Messaging,
  onMessage,
} from 'firebase/messaging';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FCM_API_KEY,
  authDomain: 'magambell-88230.firebaseapp.com',
  projectId: 'magambell-88230',
  storageBucket: 'magambell-88230.firebasestorage.app',
  messagingSenderId: '459965392168',
  appId: '1:459965392168:web:0109921de31a2caa7e9c1d',
  measurementId: 'G-WBEKHDM6YF',
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
