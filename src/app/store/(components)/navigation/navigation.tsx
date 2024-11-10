'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as styles from './styles.css';

export default function Navigation() {
  const pathname = usePathname();
  const navContent = {
    order: {
      name: '주문',
    },
    sale: {
      name: '판매',
    },
    settings: {
      name: '설정',
    },
  };
  return (
    <nav className={styles.container}>
      {Object.entries(navContent).map(([id, nav]) => (
        <Link
          key={id}
          href={`/store/${id}`}
          className={styles.tab({ active: pathname.includes(id) })}
        >
          {nav.name}
        </Link>
      ))}
    </nav>
  );
}
