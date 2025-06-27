import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const chipVariants = cva(
  'rounded-full px-[12px] py-[9px] text-b3 bg-white w-fit border-[1px] border-gray7 font-bold text-gray4',
  {
    variants: {
      variant: {
        default: '',
        primary: 'border-primary',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export type ChipProps = React.ComponentProps<'div'> &
  VariantProps<typeof chipVariants>;

export default function Chip({
  children,
  className,
  variant,
  ...props
}: ChipProps) {
  return (
    <div className={cn(chipVariants({ variant }), className)} {...props}>
      {children}
    </div>
  );
}
