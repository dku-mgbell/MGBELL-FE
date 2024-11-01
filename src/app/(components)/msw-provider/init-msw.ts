export const initMSW = async () => {
  if (
    typeof window !== 'undefined' &&
    process.env.NEXT_PUBLIC_API_MOCKING === 'enabled'
  ) {
    const { worker } = await import('@/mocks/browser');
    return { worker };
  }
  return undefined;
};
