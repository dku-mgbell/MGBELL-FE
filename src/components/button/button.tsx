import React, { HTMLAttributes } from 'react';

import { button } from './styles.css';

type ButtonProps = HTMLAttributes<HTMLButtonElement>;

export default function Button({
  value,
  theme,
  size,
  ...props
}: {
  value: string;
  theme?:
    | 'primary'
    | 'secondary'
    | 'inactive-primary'
    | 'inactive-secondary'
    | 'light-yellow';
  size?: 'full' | 'fit';
} & ButtonProps) {
  return (
    <button className={button({ theme, size })} type="button" {...props}>
      {value}
    </button>
  );
}
