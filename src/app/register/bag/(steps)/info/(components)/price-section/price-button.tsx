import { ChangeEvent } from 'react';
import { useBagInfoStateStore } from '@/hooks/stores/useBagInfoStore';
import { common } from '@/styles/common.css';
import { commaizeNumber } from '@/utils/commaizeNumber';
import { styles } from './styles.css';

export default function PriceButton({
  price,
  desc,
  costPrice,
}: {
  price: number;
  desc: string;
  costPrice?: number;
}) {
  const { bagInfoState, setBagInfoState } = useBagInfoStateStore();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBagInfoState({
      ...bagInfoState,
      [name]: Number(value),
      costPrice: (Number(value) + 100) * 2,
    });
  };

  return (
    <label className={styles.priceButton}>
      <div className={common.flexBox({ direction: 'row', justify: 'between' })}>
        <span className={styles.price}>{price}원</span>
        <input
          type="radio"
          name="salePrice"
          value={price}
          onChange={handleInputChange}
          checked={price === Number(bagInfoState.salePrice)}
        />
      </div>
      <div>
        {costPrice && (
          <p className={styles.costPrice}>
            정가 약 {commaizeNumber(costPrice)}원
          </p>
        )}
        <p className={styles.priceDesc}>{desc}</p>
      </div>
    </label>
  );
}
