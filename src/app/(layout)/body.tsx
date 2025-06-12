import { cn } from '@/lib/utils';

export default function Body({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn('max-w-[450px] flex flex-col min-h-[100dvh]', className)}
    >
      {children}
    </div>
  );
}
