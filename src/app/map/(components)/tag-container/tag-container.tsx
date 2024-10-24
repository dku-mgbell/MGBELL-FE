import Tag from '@/components/text/tag/tag';
import { BagInfoResponse } from '@/types/bag';
import * as styles from './styles.css';

export default function TagContainer({
  info: { onSale, amount },
}: {
  info: Pick<BagInfoResponse, 'onSale' | 'amount'>;
}) {
  return (
    <div className={styles.tagContainer}>
      <Tag
        content={onSale ? '영업 중' : '영업 종료'}
        theme={onSale ? 'primary' : 'gray'}
      />
      <Tag
        content={amount ? `${amount}개 남음` : '재고 없음'}
        theme={amount ? 'default' : 'gray'}
      />
    </div>
  );
}
