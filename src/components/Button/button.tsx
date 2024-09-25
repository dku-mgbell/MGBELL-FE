import React from 'react';
import { button } from './styles.css';

export default function Button({
  value,
  theme,
  size,
}: {
  value: string;
  theme?: 'primary' | 'secondary';
  size?: 'full' | 'fit';
}) {
  return (
    <button className={button({ theme, size })} type="button">
      {value}
    </button>
  );
}
