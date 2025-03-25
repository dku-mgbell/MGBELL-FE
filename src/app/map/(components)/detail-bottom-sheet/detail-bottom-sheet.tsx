import Link from 'next/link';
import BottomSheet from '@/components/bottom-sheet/bottom-sheet';
import ProductInfoContainer from '@/components/product/product-info-container/product-info-container';
import { BagInfoResponse } from '@/types/bag';

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
    id,
    reviewCnt,
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
        <Link href={`/bag/${id}`}>
          <ProductInfoContainer
            info={{
              storeName,
              onSale,
              amount,
              address,
              salePrice,
              costPrice,
              startAt,
              endAt,
            }}
            isPadding
            reviewButton={{ reviewCnt }}
          />
        </Link>
      }
    />
  );
}
