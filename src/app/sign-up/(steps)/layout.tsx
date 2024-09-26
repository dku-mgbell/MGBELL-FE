import ChevronLeftIcon from '@/assets/svg/ChevronLeftIcon';
import { ReactNode } from 'react';
import Link from 'next/link';
import { styles } from './styles.css';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/login">
          <button type="button">
            <ChevronLeftIcon />
          </button>
        </Link>
        <strong>회원가입</strong>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
