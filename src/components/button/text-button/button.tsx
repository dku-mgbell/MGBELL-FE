import React, { HTMLAttributes, ReactNode } from 'react';

import { button } from './styles.css';

type ButtonProps = HTMLAttributes<HTMLButtonElement>;

export default function Button({
  value,
  theme,
  size,
  height,
  className,
  rounded,
  shadow,
  padding,
  ...props
}: {
  value: string | ReactNode;
  className?: string;
  theme?:
    | 'primary'
    | 'secondary'
    | 'red'
    | 'gray'
    | 'inactive-primary'
    | 'inactive-secondary'
    | 'light-yellow'
    | 'outline-secondary'
    | 'outline-gray';
  size?: 'full' | 'fit';
  height?: 'small';
  rounded?: 'md' | 'lg';
  shadow?: boolean;
  padding?: boolean;
} & ButtonProps) {
  return (
    <button
      className={`${button({ theme, size, rounded, shadow, padding, height })} ${className}`}
      type="button"
      {...props}
    >
      {value}
    </button>
  );
}
