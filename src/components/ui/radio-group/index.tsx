'use client';

import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { cn } from '@/lib/utils';
import RadioButton, { RadioButtonStyle } from './radio-button';

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn('grid gap-3', className)}
      {...props}
    />
  );
}

function RadioGroupItem({
  className,
  children,
  buttonPosition = 'left',
  buttonStyle = 'circle',
  textClassName,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item> & {
  children: React.ReactNode;
  buttonPosition?: 'left' | 'right';
  buttonStyle?: RadioButtonStyle;
  textClassName?: string;
}) {
  return (
    <label
      className={cn(
        'clickable flex items-center space-x-2',
        buttonPosition === 'right' && 'flex-row-reverse justify-between',
        className,
      )}
    >
      <RadioButton buttonStyle={buttonStyle} {...props} />
      <div className={cn('text-b1', textClassName)}>{children}</div>
    </label>
  );
}

export { RadioGroup, RadioGroupItem };
