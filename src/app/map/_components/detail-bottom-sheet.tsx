import { useEffect, useState } from 'react';
import BottomSheet from '@/components/bottom-sheet/index';
import BackButton from '@/components/button/back-button';
import { StoreList } from '@/components/store/list';
import { useMapStore } from '../_stores/useMapStore';

export default function DetailBottomSheet() {
  const [isDetailBottomSheetOpen, setIsDetailBottomSheetOpen] = useState(false);
  const { selectedStore, setSelectedStore, setIsListSheetHidden } =
    useMapStore();

  const handleBackButtonClick = () => {
    setIsDetailBottomSheetOpen(false);
    setIsListSheetHidden(false);
  };

  useEffect(() => {
    setIsDetailBottomSheetOpen(true);
  }, [selectedStore]);

  useEffect(() => {
    if (!isDetailBottomSheetOpen) {
      setSelectedStore(undefined);
    }
  }, [isDetailBottomSheetOpen]);

  return (
    selectedStore &&
    isDetailBottomSheetOpen && (
      <>
        <BackButton onClick={handleBackButtonClick} variant="white" />
        <BottomSheet
          isOpen={isDetailBottomSheetOpen}
          setOpen={setIsDetailBottomSheetOpen}
          height={300}
          disableDrag
        >
          <StoreList.Container className="px-[20px]">
            <StoreList.Item
              data={selectedStore}
              onClick={() => {
                window.open(`/bag/${selectedStore.id}`, '_blank');
              }}
            />
          </StoreList.Container>
        </BottomSheet>
      </>
    )
  );
}
