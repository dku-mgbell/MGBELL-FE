import { ReactNode } from 'react';
import LogoIcon from '@/assets/svg/LogoIcon';
import Navigation from './(components)/navigation/navigation';
import * as styles from './styles.css';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <LogoIcon />
        <p className={styles.headerMessage}>
          오늘도 마감벨과 함께 Zero Food Waste를 실천해주셔서 감사합니다.
        </p>
      </header>
      <main className={styles.main}>{children}</main>
      <Navigation />
    </div>
  );
}
