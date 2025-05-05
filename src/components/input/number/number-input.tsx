import { MouseEvent } from 'react';
import * as styles from './styles.css';

export default function NumberInput({
  className,
  maxSize,
  number,
  setNumber,
}: {
  className?: string;
  maxSize?: number;
  number: number;
  setNumber: (number: number) => void;
}) {
  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement;
    if (name === 'minus' && number === 0) return;
    if (name === 'plus' && number === maxSize) return;
    setNumber(name === 'minus' ? number - 1 : number + 1);
  };

  return (
    <div className={`${styles.buttonWrapper} ${className}`}>
      <div className={styles.buttonContainer}>
        <button type="button" name="minus" onClick={handleButtonClick}>
          −
        </button>
        <span>{number}</span>
        <button type="button" name="plus" onClick={handleButtonClick}>
          +
        </button>
      </div>
    </div>
  );
}
