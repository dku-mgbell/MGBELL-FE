import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export default function IconButton({
  icon,
  className,
  ...props
}: { icon: ReactNode } & HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={cn(
        'w-[42px] h-[42px] bg-white rounded-full flex justify-center items-center drop-shadow-md clickable',
        className,
      )}
      {...props}
    >
      {icon}
    </button>
  );
}
