import { ChangeEvent } from 'react';
import { useBagInfoStateStore } from '@/hooks/stores/useBagInfoStore';
import { common } from '@/styles/common.css';
import { styles } from './styles.css';

export default function PriceButton({
  price,
  desc,
}: {
  price: number;
  desc: string;
}) {
  const { bagInfoState, setBagInfoState } = useBagInfoStateStore();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBagInfoState({ ...bagInfoState, [name]: value });
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
      <p className={styles.priceDesc}>{desc}</p>
    </label>
  );
}
