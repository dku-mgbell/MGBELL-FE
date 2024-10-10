import { ReactNode } from 'react';
import { commaizeNumber } from '@/utils/commaizeNumber';
import * as styles from './styles.css';

export default function ProductInfoContainer({
  costPrice,
  salePrice,
  firstRow,
  secondRow,
  rowGap,
}: {
  costPrice: number;
  salePrice: number;
  firstRow: {
    icon: ReactNode;
    text: string;
    color?: 'black';
  };
  secondRow: {
    icon: ReactNode;
    text: string;
    color?: 'black';
  };
  rowGap?: number;
}) {
  return (
    <div className={styles.infoContainer} style={{ gap: rowGap }}>
      <div className={styles.flexRowBetween}>
        <p className={styles.text({ color: firstRow.color ?? 'gray' })}>
          {firstRow.icon}
          {firstRow.text}
        </p>
        <s className={styles.text({ color: 'gray' })}>
          ₩ {commaizeNumber(costPrice!)}원
        </s>
      </div>
      <div className={styles.flexRowBetween}>
        <p className={styles.text({ color: 'gray' })}>
          {secondRow.icon}
          {secondRow.text}
        </p>
        <p className={styles.text({ color: 'red' })}>
          ₩ {commaizeNumber(salePrice!)}원
        </p>
      </div>
    </div>
  );
}
