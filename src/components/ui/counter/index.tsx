import { useEffect, useState } from 'react';
import MinusIcon from '@/assets/svg/MinusIcon';
import PlusIcon from '@/assets/svg/PlusIcon';
import { cn } from '@/lib/utils';
import styles from './styles.module.css';

function CounterButton({
  type,
  onClick,
  disabled,
}: {
  type: 'minus' | 'plus';
  onClick: () => void;
  disabled?: boolean;
}) {
  const color = disabled ? '#D9D9D9' : 'black';
  return (
    <button
      type="button"
      className="clickable w-[24px] h-[24px]"
      onClick={onClick}
      disabled={disabled}
    >
      {type === 'minus' ? (
        <MinusIcon color={color} />
      ) : (
        <PlusIcon color={color} />
      )}
    </button>
  );
}

export default function Counter({
  defaultValue,
  setValue,
  maxCount,
  minCount,
}: {
  defaultValue?: number;
  setValue: (value: number) => void;
  maxCount?: number;
  minCount?: number;
}) {
  const [count, setCount] = useState(defaultValue ?? 0);

  const handleButtonClick = (type: 'minus' | 'plus') => {
    if (type === 'minus') {
      setCount((prev) => prev - 1);
    } else {
      setCount((prev) => prev + 1);
    }
  };

  useEffect(() => {
    setValue(count);
  }, [count]);

  return (
    <div
      className={cn(
        'flex items-center gap-[10px] justify-between px-[20px] py-[12px] border rounded-[10px] border-gray7',
      )}
    >
      <CounterButton
        type="minus"
        onClick={() => handleButtonClick('minus')}
        disabled={(minCount && count <= minCount) || count === 0}
      />
      <input
        type="number"
        value={count}
        onChange={(e) => setValue(Number(e.target.value))}
        className={cn(
          styles.counterInput,
          'cursor-default flex-1 text-center text-gray4 text-b1',
        )}
        readOnly
      />
      <CounterButton
        type="plus"
        onClick={() => handleButtonClick('plus')}
        disabled={maxCount ? count >= maxCount : undefined}
      />
    </div>
  );
}
