'use client';

import { useEffect, useState } from 'react';
import { SetupWorker } from 'msw/browser';
import { initMSW } from './init-msw';

export default function MSWProvider() {
  const [worker, setWorker] = useState<SetupWorker | undefined>(undefined);

  useEffect(() => {
    const initWorker = async () => {
      const mswWorker = await initMSW();
      if (mswWorker) setWorker(mswWorker.worker);
    };

    initWorker();
  }, []);

  useEffect(() => {
    if (worker) {
      worker.start();
    }
  }, [worker]);

  return null;
}
