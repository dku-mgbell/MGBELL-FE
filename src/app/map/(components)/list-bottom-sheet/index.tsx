'use client';

import { useState } from 'react';
import BottomSheet from '@/components/bottom-sheet/index';
import { Intersection } from '@/components/intersection/intersection';
import { StoreList } from '@/components/store/list';
import { useGetBagInfiniteList } from '@/hooks/query/bag/useGetBagInfiniteList';
import { BagInfoResponse as StoreInfoResponse } from '@/types/bag';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import ListShowButton from '../list-show-button';
import * as styles from './styles.css';

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
  const { list, intersection } = useInfiniteScroll(bagListState);

  const handleStoreItemClick = (store: StoreInfoResponse) => {
    map.morph(new naver.maps.LatLng(+store.latitude - 0.001, +store.longitude));
    setOpen(false);
    setSelectedStore(store);
  };

  return (
    <>
      <ListShowButton
        onClick={() => {
          setOpen(true);
        }}
      />
      {list && isOpen && (
        <BottomSheet
          isOpen={isOpen}
          setOpen={setOpen}
          height={600}
          content={
            <div className={styles.modal}>
              <StoreList.Container className="pb-[50px]">
                {list.map((store) => (
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
