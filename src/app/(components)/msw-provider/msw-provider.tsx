'use client';

import { useEffect } from 'react';
import { initMSW } from './init-msw';

export default function MSWProvider() {
  useEffect(() => {
    initMSW();
  }, []);

  return null;
}
