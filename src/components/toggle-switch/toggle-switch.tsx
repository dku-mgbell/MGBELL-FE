// ToggleSwitch.tsx
import React from 'react';
import * as styles from './styles.css';

export default function ToggleSwitch() {
  return (
    <label className={styles.container}>
      <input type="checkbox" className={styles.input} />
      <span className={styles.slider} />
    </label>
  );
}
