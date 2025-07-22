importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: 'AIzaSyD7w_zS1SR5ema9t65Df7gOxdU_PEhM1Uc',
  authDomain: 'magambell-93320.firebaseapp.com',
  projectId: 'magambell-93320',
  storageBucket: 'magambell-93320.firebasestorage.app',
  messagingSenderId: '766230300795',
  appId: '1:766230300795:web:357e334241b7c58743fade',
  measurementId: 'G-QNTGWEQ65E',
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  // eslint-disable-next-line no-console
  console.log(payload);
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: payload.data.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
