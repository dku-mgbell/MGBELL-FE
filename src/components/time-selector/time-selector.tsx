import React, { useState } from 'react';
import * as styles from './styles.css';
import { generateTimes } from './(utils)/generateTimes';

export default function TimeSelector() {
  const [selectedTime, setSelectedTime] = useState('12:00');
  const times = generateTimes();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <select
        value={selectedTime}
        onChange={handleChange}
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
