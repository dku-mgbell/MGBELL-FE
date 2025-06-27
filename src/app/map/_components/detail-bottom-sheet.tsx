import { useEffect, useState } from 'react';
import BottomSheet from '@/components/bottom-sheet/index';
import BackButton from '@/components/button/back-button';
import { StoreList } from '@/components/store/list';
import { DEFAULT_COORD } from '../_constant/map';
import { useMapStore } from '../_stores/useMapStore';

export default function DetailBottomSheet({ map }: { map: naver.maps.Map }) {
  const [isDetailBottomSheetOpen, setIsDetailBottomSheetOpen] = useState(false);
  const { selectedStore, setSelectedStore, setIsListSheetHidden } =
    useMapStore();

  const resetMapView = () => {
    const position = new naver.maps.LatLng(DEFAULT_COORD[0], DEFAULT_COORD[1]);
    map.morph(position, 7);
  };

  const handleBackButtonClick = () => {
    setIsDetailBottomSheetOpen(false);
    setIsListSheetHidden(false);
    resetMapView();
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
                window.open(`/bag/${selectedStore.storeId}`, '_blank');
              }}
            />
          </StoreList.Container>
        </BottomSheet>
      </>
    )
  );
}
