import * as React from 'react';

import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const textFieldVariants = cva(
  cn(
    'w-full px-[14px] py-[12px] text-b1 rounded-[8px]',
    'bg-gray10 placeholder:text-gray4 focus:outline-none focus:ring-0',
    'disabled:placeholder:text-gray6',
    'border-[1px] border-gray10',
  ),
  {
    variants: {
      variant: {
        default: '',
        error: 'border-red-300 bg-red-50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

interface TextFieldProps
  extends React.ComponentProps<'input'>,
    VariantProps<typeof textFieldVariants> {}

export default function TextField({
  type = 'text',
  variant = 'default',
  className,
  ...props
}: TextFieldProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(textFieldVariants({ variant, className }))}
      {...props}
    />
  );
}
