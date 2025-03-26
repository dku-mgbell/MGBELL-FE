'use client';

import { useRouter } from 'next/navigation';
import { common } from '@/styles/common.css';
import { buttonList } from './button-list';
import * as styles from './styles.css';

export default function SortContainer({ state }: { state: string }) {
  const route = useRouter();

  return (
    <nav className={styles.nav}>
      {buttonList.map(({ name, sortValue }, index) => (
        <label className={styles.button} key={name}>
          <input
            type="radio"
            name="sort"
            value={sortValue}
            checked={state ? sortValue === state : index === 0}
            className={common.hidden}
            onChange={() => route.push(`?sort=${sortValue}`)}
          />
          {name}
        </label>
      ))}
    </nav>
  );
}
