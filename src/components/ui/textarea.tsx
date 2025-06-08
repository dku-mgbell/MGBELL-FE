import * as React from 'react';

import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const textAreaVariants = cva(
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
        error: 'border-[1px] border-error',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface TextAreaProps
  extends React.ComponentProps<'textarea'>,
    VariantProps<typeof textAreaVariants> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: FieldErrors<any>;
}

export default function TextArea({
  variant = 'default',
  className,
  register,
  errors,
  ...props
}: TextAreaProps) {
  const isError = errors && errors[props.name ?? ''];
  const errorMessage = errors && (errors[props.name ?? '']?.message as string);
  const isErrorMessage = !!errorMessage;

  return (
    <>
      <textarea
        data-slot="textarea"
        className={cn(
          textAreaVariants({
            variant: isError ? 'error' : variant,
            className,
          }),
        )}
        {...(register && register(props.name ?? ''))}
        {...props}
      />
      {isErrorMessage && (
        <p className="text-error text-b2 px-[14px]">{errorMessage}</p>
      )}
    </>
  );
}
