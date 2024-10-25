import BottomSheet from '@/components/bottom-sheet/bottom-sheet';
import { BagInfoResponse } from '@/types/bag';
import MapProductInfoContainer from '../map-product-info-container/map-product-info-container';
import TagContainer from '../tag-container/tag-container';
import * as styles from './styles.css';

export default function DetailBottomSheet({
  info: {
    storeName,
    address,
    salePrice,
    costPrice,
    startAt,
    endAt,
    onSale,
    amount,
  },
  isOpen,
  setOpen,
}: {
  info: BagInfoResponse;
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <BottomSheet
      isOpen={isOpen}
      setOpen={setOpen}
      content={
        <div className={styles.modalContainer}>
          <header className={styles.modalHeader}>
            <strong>{storeName}</strong>
            <TagContainer info={{ onSale, amount }} />
          </header>
          <p className={styles.address}>{address}</p>
          <MapProductInfoContainer
            info={{
              salePrice,
              costPrice,
              startAt,
              endAt,
            }}
          />
        </div>
      }
    />
  );
}
