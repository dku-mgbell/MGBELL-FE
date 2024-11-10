import React, { InputHTMLAttributes, RefObject } from 'react';
import ChevronRightIcon from '@/assets/svg/ChevronRightIcon';

import * as styles from './styles.css';

type InputProps = InputHTMLAttributes<HTMLInputElement>;
type Color = 'primary' | 'secondary' | 'gray';

export default function Input({
  theme,
  className,
  onClick,
  ref,
  ...props
}: {
  theme?: 'default' | 'error' | `outline-${Color}`;
  className?: string;
  onClick?: () => void;
  ref?: RefObject<HTMLInputElement>;
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
        ref={ref}
        {...props}
      />
      {onClick && <ChevronRightIcon />}
    </label>
  );
}
