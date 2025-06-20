'use client';

import { useCallback, useState } from 'react';
import BottomSheet from '@/components/bottom-sheet/index';
import { Intersection } from '@/components/intersection/intersection';
import { StoreList } from '@/components/store/list';
import { useGetBagInfiniteList } from '@/hooks/query/bag/useGetBagInfiniteList';
import { BagInfoResponse as StoreInfoResponse } from '@/types/bag';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import ListShowButton from '../list-show-button';

export default function ListBottomSheet({
  map,
  setSelectedStore,
}: {
  map: naver.maps.Map;
  setSelectedStore: React.Dispatch<
    React.SetStateAction<StoreInfoResponse | undefined>
  >;
}) {
  const [isOpen, setOpen] = useState(true);
  const bagListState = useGetBagInfiniteList({ size: 5 });
  const { list, intersection, isFetched } = useInfiniteScroll(bagListState);

  const handleListShowButtonClick = () => {
    setOpen(true);
  };

  const handleStoreItemClick = useCallback(
    (store: StoreInfoResponse) => {
      const position = new naver.maps.LatLng(
        Number(store.latitude),
        Number(store.longitude),
      );
      map.morph(position, 18);
      setOpen(false);
      setSelectedStore(store);
    },
    [map],
  );

  return (
    <>
      <ListShowButton onClick={handleListShowButtonClick} />
      {isOpen && isFetched && (
        <BottomSheet
          isOpen={isOpen}
          setOpen={setOpen}
          height={600}
          content={
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
          }
        />
      )}
    </>
  );
}
