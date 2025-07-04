import Link, { LinkProps } from 'next/link';
import { cn } from '@/lib/utils';

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed left-0 flex flex-col h-[calc(100dvh-120px)] w-[100px] justify-between items-center bg-white">
      {children}
    </div>
  );
}

export function TabLink({
  children,
  active,
  ...props
}: LinkProps & { children: React.ReactNode; active: boolean }) {
  return (
    <Link
      className={cn(
        'clickable flex flex-1 items-center border-b border-gray-200 w-full justify-center text-gray-500 font-bold text-lg',
        active && 'text-primary',
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
