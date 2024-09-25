import React, { InputHTMLAttributes } from 'react';

import { input } from './styles.css';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  theme,
  ...props
}: { theme?: 'default' | 'error' } & InputProps) {
  return <input className={input({ theme: theme ?? 'default' })} {...props} />;
}
