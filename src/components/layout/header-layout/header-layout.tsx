import ChevronLeftIcon from '@/assets/svg/ChevronLeftIcon';
import { ReactNode } from 'react';
import Link from 'next/link';
import { styles } from './styles.css';

export default function HeaderLayout({
  children,
  title,
  previousPageLink,
}: {
  children: ReactNode;
  title: string;
  previousPageLink?: string;
}) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {previousPageLink && (
          <Link href={previousPageLink}>
            <button type="button">
              <ChevronLeftIcon />
            </button>
          </Link>
        )}
        <strong>{title}</strong>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
