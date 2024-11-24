importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: 'AIzaSyDZAUUTIDkUTqtAQX5stZ_mz7Rx0mHMnOw',
  authDomain: 'magambell-88230.firebaseapp.com',
  projectId: 'magambell-88230',
  storageBucket: 'magambell-88230.firebasestorage.app',
  messagingSenderId: '459965392168',
  appId: '1:459965392168:web:0109921de31a2caa7e9c1d',
  measurementId: 'G-WBEKHDM6YF',
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
