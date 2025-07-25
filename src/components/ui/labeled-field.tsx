import { cn } from '@/lib/utils';

export interface LabeledFieldProps {
  children: React.ReactNode;
  label: React.ReactNode;
  description?: string;
  isError?: boolean;
}

export default function LabeledField({
  children,
  label,
  description,
  isError,
}: LabeledFieldProps) {
  return (
    <div className="flex flex-col gap-[10px] w-full">
      <div className="flex flex-col gap-[4px]">
        <p className="text-h5 text-gray1">{label}</p>
        {description && (
          <p className={cn('text-b2 text-gray4', isError && 'text-error')}>
            {description}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}
