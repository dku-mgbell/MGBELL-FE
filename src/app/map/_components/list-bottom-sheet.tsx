'use client';

import { useCallback, useEffect, useState } from 'react';
import BottomSheet from '@/components/bottom-sheet/index';
import { Intersection } from '@/components/intersection/intersection';
import { StoreList } from '@/components/store/list';
import { useGetBagInfiniteList } from '@/hooks/query/bag/useGetBagInfiniteList';
import { BagInfoResponse as StoreInfoResponse } from '@/types/bag';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { useMapStore } from '../_stores/useMapStore';
import ListShowButton from './list-show-button';

export default function ListBottomSheet({ map }: { map: naver.maps.Map }) {
  const [isListSheetOpen, setIsListSheetOpen] = useState(true);
  const bagListState = useGetBagInfiniteList({ size: 5 });
  const { list, intersection, isFetched } = useInfiniteScroll(bagListState);
  const [initialSnap, setInitialSnap] = useState(1);
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
    (store: StoreInfoResponse) => {
      const [lat, lng] = [Number(store.latitude), Number(store.longitude)];
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
      {isListSheetOpen && isFetched && (
        <BottomSheet
          isOpen={isListSheetOpen}
          setOpen={setIsListSheetOpen}
          snapPoints={[600, 150, 0]}
          initialSnap={initialSnap}
          isHidden={isListSheetHidden}
          onClose={() => {
            setInitialSnap(1);
          }}
        >
          <div className="flex flex-col gap-[15px] px-[23px]">
            <StoreList.Container className="pb-[50px]">
              {list!.map((store) => (
                <StoreList.Item
                  key={store.id}
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
