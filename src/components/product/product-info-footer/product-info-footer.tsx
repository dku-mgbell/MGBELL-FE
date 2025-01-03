import { ReactNode } from 'react';
import { commaizeNumber } from '@/utils/commaizeNumber';
import * as styles from './styles.css';

export default function ProductInfoFooter({
  costPrice,
  salePrice,
  firstRow,
  secondRow,
  rowGap,
  noPadding,
  priceStyle,
}: {
  costPrice?: number;
  salePrice: number;
  firstRow: {
    icon?: ReactNode;
    text: string | ReactNode;
    color?: 'black';
  };
  secondRow: {
    icon?: ReactNode;
    text: string | ReactNode;
    color?: 'black';
  };
  rowGap?: number;
  noPadding?: boolean;
  priceStyle?: React.CSSProperties;
}) {
  return (
    <div
      className={styles.infoContainer}
      style={{ gap: rowGap, padding: noPadding ? 0 : 8 }}
    >
      <div className={styles.flexRowBetween}>
        <p className={styles.text({ color: firstRow.color ?? 'gray' })}>
          {firstRow.icon}
          {firstRow.text}
        </p>
        <s className={styles.text({ color: 'gray' })}>
          {costPrice && `₩ ${commaizeNumber(costPrice!)}원`}
        </s>
      </div>
      <div className={styles.flexRowBetween}>
        <p className={styles.text({ color: 'gray' })}>
          {secondRow.icon}
          {secondRow.text}
        </p>
        <p className={styles.text({ color: 'red' })} style={priceStyle}>
          ₩ {commaizeNumber(salePrice!)}원
        </p>
      </div>
    </div>
  );
}
