import * as React from 'react';

import { FieldErrors, UseFormRegister } from 'react-hook-form';
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
        error: 'border-[1px] border-error',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface TextFieldProps
  extends React.ComponentProps<'input'>,
    VariantProps<typeof textFieldVariants> {
  register?: UseFormRegister<any>;
  errors?: FieldErrors<any>;
}

export default function TextField({
  type = 'text',
  variant = 'default',
  className,
  register,
  errors,
  ...props
}: TextFieldProps) {
  const isError = errors && errors[props.name ?? ''];
  const errorMessage = errors && (errors[props.name ?? '']?.message as string);
  const isErrorMessage = !!errorMessage;
  return (
    <>
      <input
        type={type}
        data-slot="input"
        className={cn(
          textFieldVariants({
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
