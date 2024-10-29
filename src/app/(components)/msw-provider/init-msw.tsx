export async function initMSW() {
  if (
    typeof window !== 'undefined' &&
    process.env.NEXT_PUBLIC_API_MOCKING === 'enabled'
  ) {
    const { worker } = await import('@/mocks/browser');
    worker.start();
  }
}
