import { cn } from '@/lib/utils';

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        'w-full bg-white px-[20px] overflow-hidden',
        'mt-[calc(env(safe-area-inset-top)+162px)]',
        'flex flex-col gap-[20px] mb-[100px]',
      )}
    >
      {children}
    </div>
  );
}
