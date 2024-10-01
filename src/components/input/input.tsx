import React, { InputHTMLAttributes } from 'react';

import { input } from './styles.css';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  theme,
  className,
  ...props
}: { theme?: 'default' | 'error'; className?: string } & InputProps) {
  return (
    <input
      className={`${input({ theme: theme ?? 'default' })} ${className}`}
      {...props}
    />
  );
}
