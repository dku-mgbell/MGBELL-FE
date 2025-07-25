import { useEffect, useState } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import MinusIcon from '@/assets/svg/MinusIcon';
import PlusIcon from '@/assets/svg/PlusIcon';
import { cn } from '@/lib/utils';
import styles from './styles.module.css';

export const counterVariants = cva(
  cn(
    'flex items-center justify-between gap-[10px] px-[20px] py-[12px] rounded-[10px]',
  ),
  {
    variants: {
      theme: {
        default: 'bg-gray10',
        outline: 'border-[1px] border-gray7',
      },
    },
    defaultVariants: {
      theme: 'default',
    },
  },
);

export interface CounterProps
  extends React.ComponentProps<'input'>,
    VariantProps<typeof counterVariants> {
  defaultValue: number;
  setValue: (value: number) => void;
  maxCount?: number;
  minCount?: number;
}

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
  theme,
  className,
}: CounterProps) {
  const [count, setCount] = useState(defaultValue);

  const handleButtonClick = (type: 'minus' | 'plus') => {
    if (type === 'minus') {
      setCount((prev) => prev - 1);
    } else {
      setCount((prev) => prev + 1);
    }
  };

  useEffect(() => {
    setCount(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    setValue(count);
  }, [count]);

  return (
    <div className={cn(counterVariants({ theme }), className)}>
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
          'cursor-default text-center text-gray4 text-b1 w-[60px]',
        )}
        readOnly
      />
      <CounterButton
        type="plus"
        onClick={() => handleButtonClick('plus')}
        disabled={
          maxCount !== undefined
            ? maxCount === 0 || count >= maxCount
            : undefined
        }
      />
    </div>
  );
}
