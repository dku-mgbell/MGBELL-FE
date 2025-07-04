import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex text-b1 py-[12px] text-gray9 font-bold items-center clickable justify-center gap-2 whitespace-nowrap rounded-[8px] transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        primary: 'bg-primary text-gray11',
        'primary-inactive':
          'bg-[#F6F6F6] border-[1px] border-primary text-primary',
        secondary: 'bg-secondary text-white',
        'secondary-outline':
          'bg-white border-[1px] border-secondary text-secondary ',
        'gray-outline': 'bg-white border-[1px] border-gray6 text-gray4',
        'primary-light-outline':
          'bg-[#FFF0D1] text-gray12 border-[1px] border-primary [&:has(input:not(:checked))]:bg-white [&:has(input:not(:checked))]:border-[#D9D9D9]',
        'primary-light': 'bg-[#FFF8EB] text-gray4 border-primary',
        red: 'bg-red text-white ',
      },
      size: {
        full: 'w-full',
        fit: 'w-fit px-[12px]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'full',
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
