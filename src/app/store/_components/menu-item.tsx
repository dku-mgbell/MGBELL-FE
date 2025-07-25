import { cn } from '@/lib/utils';

export function MenuItem({
  children,
  className,
  name,
}: {
  children: React.ReactNode;
  className?: string;
  name: string;
}) {
  return (
    <div
      className={cn(
        'flex justify-between',
        'bg-white p-[20px] rounded-[10px]',
        className,
      )}
    >
      <p className="text-gray3 font-bold">{name}</p>
      {children}
    </div>
  );
}
