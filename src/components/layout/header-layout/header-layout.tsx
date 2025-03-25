import { ReactNode } from 'react';
import Link from 'next/link';
import ChevronLeftIcon from '@/assets/svg/ChevronLeftIcon';
import { styles } from './styles.css';

export default function HeaderLayout({
  children,
  title,
  previousPageLink,
  previousButtonClickEvent,
  paddingBottom,
}: {
  children: ReactNode;
  title: string;
  previousPageLink?: string;
  previousButtonClickEvent?: () => void;
  paddingBottom?: boolean;
}) {
  return (
    <div className={styles.container({ paddingBottom })}>
      <header className={styles.header}>
        {previousButtonClickEvent && (
          <button type="button" onClick={previousButtonClickEvent}>
            <ChevronLeftIcon />
          </button>
        )}
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
