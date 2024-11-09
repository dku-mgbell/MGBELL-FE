import React, { InputHTMLAttributes } from 'react';
import ChevronRightIcon from '@/assets/svg/ChevronRightIcon';

import * as styles from './styles.css';

type InputProps = InputHTMLAttributes<HTMLInputElement>;
type Color = 'primary' | 'secondary' | 'gray';

export default function Input({
  theme,
  className,
  onClick,
  ...props
}: {
  theme?: 'default' | 'error' | `outline-${Color}`;
  className?: string;
  onClick?: () => void;
} & InputProps) {
  return (
    <label
      className={styles.inputContainer({
        theme: theme ?? 'default',
        onClick: !!onClick,
      })}
      role="presentation"
      onClick={onClick}
      onKeyDown={onClick}
    >
      <input
        className={`${styles.input} ${className}`}
        onClick={onClick}
        style={onClick && { cursor: 'pointer' }}
        {...props}
      />
      {onClick && <ChevronRightIcon />}
    </label>
  );
}
