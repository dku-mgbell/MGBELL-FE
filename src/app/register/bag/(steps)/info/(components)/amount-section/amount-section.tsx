import { MouseEvent, useState } from 'react';
import { styles } from './styles.css';

export default function AmountSection() {
  const [number, setNumber] = useState(0);
  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement;
    if (name === 'minus' && number === 0) return;
    setNumber((prev) => (name === 'minus' ? prev - 1 : prev + 1));
  };

  return (
    <div className={styles.container}>
      <span>마감백 개수</span>
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
