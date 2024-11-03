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
  padding,
  ...props
}: {
  value: string | ReactNode;
  className?: string;
  theme?:
    | 'primary'
    | 'secondary'
    | 'inactive-primary'
    | 'inactive-secondary'
    | 'light-yellow'
    | 'outline-secondary'
    | 'outline-gray';
  size?: 'full' | 'fit';
  rounded?: 'md' | 'lg';
  shadow?: boolean;
  padding?: boolean;
} & ButtonProps) {
  return (
    <button
      className={`${button({ theme, size, rounded, shadow, padding })} ${className}`}
      type="button"
      {...props}
    >
      {value}
    </button>
  );
}
