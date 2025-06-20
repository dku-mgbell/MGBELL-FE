import BottomSheet from '@/components/bottom-sheet/index';
import { StoreList } from '@/components/store/list';
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
    <BottomSheet isOpen={isOpen} setOpen={setOpen} height={300} disableDrag>
      <StoreList.Container className="px-[20px]">
        <StoreList.Item
          data={info}
          onClick={() => {
            window.open(`/bag/${info.id}`, '_blank');
          }}
        />
      </StoreList.Container>
    </BottomSheet>
  );
}
