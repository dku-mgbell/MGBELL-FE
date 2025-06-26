import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export default function SortWrapper({ children }: { children: ReactNode }) {
  return (
    <nav
      className={cn(
        'flex max-w-[450px] w-full ml-[-20px] gap-[6px]',
        'z-[9999] overflow-x-auto',
        'bg-white p-[20px] py-[10px]',
        'fixed top-[calc(env(safe-area-inset-top)+100px)]',
      )}
    >
      {children}
    </nav>
  );
}
