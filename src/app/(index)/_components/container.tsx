import { cn } from '@/lib/utils';

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        'w-full bg-white px-[20px] overflow-hidden rounded-t-[15px]',
        'mb-[80px] mt-[calc(env(safe-area-inset-top)+158px)]',
      )}
    >
      {children}
    </div>
  );
}
