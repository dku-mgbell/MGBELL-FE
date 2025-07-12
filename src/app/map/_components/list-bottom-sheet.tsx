'use client';

import { useCallback, useEffect, useState } from 'react';
import BottomSheet from '@/components/bottom-sheet/index';
import { Intersection } from '@/components/intersection/intersection';
import { StoreList } from '@/components/store/list';
import { useGetStoreInfiniteList } from '@/hooks/query/user/useGetStoreInfiniteList';
import { StoreListItemResponse } from '@/types/store';
import { useSuspenseInfiniteScroll } from '@/hooks/useSuspenseInfiniteScroll';
import { useMapStore } from '../_stores/useMapStore';
import ListShowButton from './list-show-button';

export default function ListBottomSheet({
  map,
  locationButton,
}: {
  map: naver.maps.Map;
  locationButton: React.ReactNode;
}) {
  const [isListSheetOpen, setIsListSheetOpen] = useState(true);
  const [initialSnap, setInitialSnap] = useState(1);
  const storeListState = useGetStoreInfiniteList({
    size: 5,
    sortType: 'DISTANCE_ASC',
  });
  const { list, intersection, isSuccess } =
    useSuspenseInfiniteScroll<StoreListItemResponse>(storeListState);
  const {
    selectedStore,
    setSelectedStore,
    isListSheetHidden,
    setIsListSheetHidden,
  } = useMapStore();

  const handleListShowButtonClick = () => {
    setIsListSheetOpen(true);
    setInitialSnap(0);
    setIsListSheetHidden(false);
  };

  useEffect(() => {
    if (!selectedStore) {
      setIsListSheetHidden(false);
    }
  }, [selectedStore]);

  const handleStoreItemClick = useCallback(
    (store: StoreListItemResponse) => {
      const [lat, lng] = [store.latitude, store.longitude];
      const position = new naver.maps.LatLng(lat - 0.0005, lng);
      map.morph(position, 18);
      setSelectedStore(store);
      setIsListSheetHidden(true);
    },
    [map],
  );

  return (
    <>
      <ListShowButton onClick={handleListShowButtonClick} />
      {isListSheetOpen && isSuccess && (
        <BottomSheet
          isOpen={isListSheetOpen}
          setOpen={setIsListSheetOpen}
          snapPoints={[600, 150, 0]}
          initialSnap={initialSnap}
          isHidden={isListSheetHidden}
          onClose={() => {
            setInitialSnap(1);
          }}
          preHeaderContent={locationButton}
        >
          <div className="flex flex-col gap-[15px] px-[23px]">
            <StoreList.Container className="pb-[50px]">
              {list!.map((store) => (
                <StoreList.Item
                  key={store.storeId}
                  data={store}
                  onClick={() => {
                    handleStoreItemClick(store);
                  }}
                />
              ))}
            </StoreList.Container>
            <Intersection ref={intersection} />
          </div>
        </BottomSheet>
      )}
    </>
  );
}
