import { ReactNode } from 'react';
import * as styles from './styles.css';

export default function IconButton({ icon }: { icon: ReactNode }) {
  return (
    <button type="button" className={styles.button}>
      {icon}
    </button>
  );
}
