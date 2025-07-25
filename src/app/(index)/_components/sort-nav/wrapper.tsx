import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export default function SortWrapper({ children }: { children: ReactNode }) {
  return (
    <nav
      className={cn(
        'flex max-w-[450px] w-full gap-[6px]',
        'z-[9999] overflow-x-auto',
        'bg-white p-[20px] py-[10px]',
      )}
    >
      {children}
    </nav>
  );
}
