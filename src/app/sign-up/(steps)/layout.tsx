import ChevronLeftIcon from '@/assets/svg/ChevronLeftIcon';
import { ReactNode } from 'react';
import { styles } from './styles.css';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <ChevronLeftIcon />
        <strong>회원가입</strong>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}