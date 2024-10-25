import React, { HTMLAttributes, ReactNode } from 'react';

import { button } from './styles.css';

type ButtonProps = HTMLAttributes<HTMLButtonElement>;

export default function Button({
  value,
  theme,
  size,
  className,
  rounded,
  shadow,
  ...props
}: {
  value: string | ReactNode;
  className?: string;
  theme?:
    | 'primary'
    | 'secondary'
    | 'inactive-primary'
    | 'inactive-secondary'
    | 'light-yellow';
  size?: 'full' | 'fit';
  rounded?: 'md' | 'lg';
  shadow?: boolean;
} & ButtonProps) {
  return (
    <button
      className={`${button({ theme, size, rounded, shadow })} ${className}`}
      type="button"
      {...props}
    >
      {value}
    </button>
  );
}
