'use client';

export default async function MSWComponent() {
  if (typeof window !== 'undefined') {
    if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
      const { worker } = await import('@/mocks/browser');
      worker.start();
    }
  }
  return null;
}