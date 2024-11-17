import { ReactNode } from 'react';
import * as styles from './styles.css';

export default function Layout({ children }: { children: ReactNode }) {
  return <div className={styles.container}>{children}</div>;
}
