import { cn } from '@/lib/utils';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main
      className={cn(
        'flex flex-col gap-[20px] w-full justify-center',
        'pt-[calc(env(safe-area-inset-top)+30px)] px-[20px]',
      )}
    >
      {children}
    </main>
  );
}
