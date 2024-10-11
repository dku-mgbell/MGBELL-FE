import { HTMLAttributes, ReactNode } from 'react';
import * as styles from './styles.css';

export default function IconButton({
  icon,
  ...props
}: { icon: ReactNode } & HTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" className={styles.button} {...props}>
      {icon}
    </button>
  );
}
