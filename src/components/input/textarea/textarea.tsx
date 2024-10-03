import React, { TextareaHTMLAttributes } from 'react';

import { textarea } from './styles.css';

type InputProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea({
  theme,
  className,
  ...props
}: {
  theme?: 'default' | 'error' | 'outline-secondary';
  className?: string;
} & InputProps) {
  return (
    <textarea
      className={`${textarea({ theme: theme ?? 'default' })} ${className}`}
      {...props}
    />
  );
}
