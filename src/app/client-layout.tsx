'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import ModalProvider from '@/components/modal/modal-provider';
import Navigation from '@/components/navigation/navigation';
import {
  AppProgressProvider as ProgressProvider,
  useProgress,
} from '@bprogress/next';
import MSWProvider from './(index)/msw-provider/msw-provider';
import Providers from './(index)/query-provider';
import Container from './(layout)/container';

function RouteChangeProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { start, stop } = useProgress();

  useEffect(() => {
    start();
    const timeoutId = setTimeout(() => {
      stop();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [pathname, searchParams, start, stop]);

  return null;
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProgressProvider
      height="3px"
      color="#ffda91F1"
      options={{
        showSpinner: false,
        minimum: 0.3,
        easing: 'ease',
        speed: 200,
      }}
    >
      <RouteChangeProgress />
      <Script
        strategy="afterInteractive"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
      />
      <Script src="https://cdn.iamport.kr/v1/iamport.js" />
      <Providers>
        <ModalProvider>
          <MSWProvider />
          <div id="modal-root" />
          <Container>{children}</Container>
          <Navigation />
        </ModalProvider>
      </Providers>
    </ProgressProvider>
  );
}
