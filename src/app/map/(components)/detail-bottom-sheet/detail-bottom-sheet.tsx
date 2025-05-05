import Link from 'next/link';
import BottomSheet from '@/components/bottom-sheet/bottom-sheet';
import ProductInfoContainer from '@/components/product/product-info-container/product-info-container';
import { BagInfoResponse } from '@/types/bag';

export default function DetailBottomSheet({
  info,
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
        <Link href={`/bag/${info.id}`}>
          <ProductInfoContainer
            info={info}
            isPadding
            reviewButton={{ reviewCnt: info.reviewCnt }}
          />
        </Link>
      }
    />
  );
}
