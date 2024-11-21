import { MouseEvent } from 'react';
import { useBagInfoStateStore } from '@/hooks/stores/useBagInfoStore';
import { styles } from './styles.css';

export default function AmountSection() {
  const { bagInfoState, setBagInfoState } = useBagInfoStateStore();
  const { amount } = bagInfoState;

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement;
    if (name === 'minus' && amount === 0) return;
    setBagInfoState({
      ...bagInfoState,
      amount: name === 'minus' ? amount - 1 : amount + 1,
    });
  };

  return (
    <div className={styles.container}>
      <span>마감백 개수</span>
      <div className={styles.buttonContainer}>
        <button type="button" name="minus" onClick={handleButtonClick}>
          −
        </button>
        <span>{amount}</span>
        <button type="button" name="plus" onClick={handleButtonClick}>
          +
        </button>
      </div>
    </div>
  );
}
