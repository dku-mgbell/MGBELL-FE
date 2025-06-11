import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export default function HeaderContainer({ children }: { children: ReactNode }) {
  return (
    <header
      className={cn(
        'w-full flex flex-col gap-[8px]',
        'bg-primary',
        'px-[20px] py-[16px]',
      )}
    >
      {children}
    </header>
  );
}
