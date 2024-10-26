'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { mapButtonInfo, navigationTabList } from './navigation-tab-list';
import * as styles from './styles.css';

export default function Navigation() {
  const pathname = usePathname();
  const currentRoute = pathname.split('?')[0];

  return (
    navigationTabList.map(({ route }) => route).includes(currentRoute) && (
      <nav className={styles.wrapper}>
        <div className={styles.container}>
          {navigationTabList.map((tabInfo) => {
            const active = currentRoute === tabInfo.route;
            return (
              <Link
                key={tabInfo.id}
                href={tabInfo.route}
                style={tabInfo.margin}
              >
                <div>{tabInfo.icon(active)}</div>
                <p className={styles.tabName({ active })}>{tabInfo.name}</p>
              </Link>
            );
          })}
        </div>
        <Link className={styles.mapButton} href={mapButtonInfo.route}>
          {mapButtonInfo.icon}
        </Link>
      </nav>
    )
  );
}
