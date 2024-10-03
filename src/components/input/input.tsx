import React, { InputHTMLAttributes } from 'react';

import { input } from './styles.css';

type InputProps = InputHTMLAttributes<HTMLInputElement>;
type Color = 'primary' | 'secondary' | 'gray';

export default function Input({
  theme,
  className,
  ...props
}: {
  theme?: 'default' | 'error' | `outline-${Color}`;
  className?: string;
} & InputProps) {
  return (
    <input
      className={`${input({ theme: theme ?? 'default' })} ${className}`}
      {...props}
    />
  );
}
