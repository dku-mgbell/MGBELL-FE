import { cn } from '@/lib/utils';
import Chip from '../chip';

export function ChipCheckGroupItem({
  name,
  children,
  checked,
  onCheckedChange,
}: {
  name: string;
  children: React.ReactNode;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}) {
  return (
    <label>
      <input
        name={name}
        type="checkbox"
        className="peer hidden"
        checked={checked}
        onChange={(e) => onCheckedChange?.(e.target.checked)}
      />
      <Chip className="clickable peer-checked:bg-primary peer-checked:text-gray1 peer-checked:border-primary">
        {children}
      </Chip>
    </label>
  );
}

export default function ChipCheckGroup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('flex flex-wrap gap-[8px]', className)}>{children}</div>
  );
}
