import Script from 'next/script';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/react';

import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import ModalProvider from '@/components/modal/modal-provider';
import Navigation from '@/components/navigation/navigation';
import { navigationTabList } from '@/components/navigation/navigation-tab-list';
import { cn } from '@/lib/utils';
import theme from '@/styles/theme';
import MSWProvider from './(index)/msw-provider/msw-provider';
import Providers from './(index)/query-provider';
import Container from './(layout)/container';
import type { Metadata, Viewport } from 'next';
import '../styles/index.css';
import '../styles/global.css';

const pretendard = localFont({
  src: '../assets/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: '마감벨',
  description: '오늘도 어김없이 마감벨이 울립니다🔔',
  icons: {
    icon: 'https://magambell.com/logo192.png',
    apple: 'https://magambell.com/logo192.png',
  },
  openGraph: {
    siteName: 'magambell',
    title: '마감벨',
    description: '오늘도 어김없이 마감벨이 울립니다🔔',
    type: 'website',
    url: 'https://magambell.com',
    images: [
      {
        url: 'https://magambell.com/og-img.png',
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
        <link rel="shortcut icon" href="https://magambell.com/favicon.ico" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </head>
      <body className={cn(pretendard.variable, 'bg-[#f5f6f8]')}>
        <Script
          strategy="afterInteractive"
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
        />
        <Script src="https://cdn.iamport.kr/v1/iamport.js" />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <Providers>
              <ModalProvider>
                <MSWProvider />
                <div id="modal-root" />
                <Container>{children}</Container>
                <Navigation navigationTabList={navigationTabList} />
              </ModalProvider>
            </Providers>
          </ThemeProvider>
        </AppRouterCacheProvider>
        <Analytics />
      </body>
    </html>
  );
}
