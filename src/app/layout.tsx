import Script from 'next/script';
import localFont from 'next/font/local';
import ModalProvider from '@/components/modal/modal-provider';
import Navigation from '@/components/navigation/navigation';
import MSWProvider from './(index)/msw-provider/msw-provider';
import Providers from './(index)/provider';
import * as styles from './(index)/styles.css';
import type { Metadata, Viewport } from 'next';
import '../styles/index.css';
import '../styles/global.css';

const pretendard = localFont({
  src: '../assets/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: '마감벨: 마감할인 상품을 한눈에! 🔔',
  description: '단국대 인근, 보정동 카페거리 마감할인 상품을 한눈에! 🔔',
  icons: {
    icon: '/logo192.png',
    apple: '/logo192.png',
  },
  openGraph: {
    images: [
      {
        url: '/og-img.png',
        alt: '마감벨 대표 이미지',
      },
    ],
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  viewportFit: 'cover',
  width: 'device-width',
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </head>
      <body className={`${pretendard.variable} ${styles.body}`}>
        <Script
          strategy="afterInteractive"
          src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
        />
        <Providers>
          <ModalProvider>
            <MSWProvider />
            <div id="modal-root" />
            <div className={styles.wrapper}>{children}</div>
            <Navigation />
          </ModalProvider>
        </Providers>
      </body>
    </html>
  );
}
