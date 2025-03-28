import React, { ChangeEvent } from 'react';
import { generateTimes } from './(utils)/generateTimes';
import * as styles from './styles.css';

export default function TimeSelector({
  onChange,
  value,
  name,
}: {
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  name: string;
}) {
  const times = generateTimes();

  return (
    <div className={styles.wrapper}>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={styles.selector}
      >
        {times.map((time) => (
          <option key={time.value} value={time.value}>
            {time.display}
          </option>
        ))}
      </select>
      <span className={styles.icon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.chevron}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </span>
    </div>
  );
}
