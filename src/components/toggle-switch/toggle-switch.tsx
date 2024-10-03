// ToggleSwitch.tsx
import React, { ChangeEvent } from 'react';
import * as styles from './styles.css';

export default function ToggleSwitch({
  onChange,
  value,
}: {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: boolean;
}) {
  return (
    <label className={styles.container}>
      <input
        type="checkbox"
        className={styles.input}
        onChange={onChange}
        checked={value}
      />
      <span className={styles.slider} />
    </label>
  );
}
