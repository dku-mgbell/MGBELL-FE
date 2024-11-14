import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import localFont from 'next/font/local';
import ReactQueryProviders from '@/hooks/query/useReactQuery';
import ModalProvider from '@/components/modal/modal-provider';
import Navigation from '@/components/navigation/navigation';
import { styles } from './styles.css';
import '../styles/globals.css';
import MSWProvider from './(components)/msw-provider/msw-provider';

const notoSans = localFont({
  src: '../assets/fonts/NotoSansKRVF.woff2',
  variable: '--font-noto-sans',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: '마감벨',
  description: '단국대 인근, 보정동 카페거리 마감할인 상품을 한눈에! 🔔',
};

export const viewport: Viewport = {
  initialScale: 1,
  viewportFit: 'cover',
  width: 'device-width',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="manifest" href="/manifest.json" />
      <body className={`${notoSans.variable} ${styles.body}`}>
        <Script
          strategy="afterInteractive"
          src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
        />
        <ReactQueryProviders>
          <ModalProvider>
            <MSWProvider />
            {children}
            <Navigation />
          </ModalProvider>
          <div id="modal-root" />
        </ReactQueryProviders>
      </body>
    </html>
  );
}
