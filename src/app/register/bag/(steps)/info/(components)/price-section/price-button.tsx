import { common } from '@/styles/common.css';
import { styles } from './styles.css';

export default function PriceButton({
  price,
  desc,
}: {
  price: number;
  desc: string;
}) {
  return (
    <label className={styles.priceButton}>
      <div className={common.flexBox({ direction: 'row', justify: 'between' })}>
        <span className={styles.price}>{price}원</span>
        <input type="radio" name="price" value={price} />
      </div>
      <p className={styles.priceDesc}>{desc}</p>
    </label>
  );
}
