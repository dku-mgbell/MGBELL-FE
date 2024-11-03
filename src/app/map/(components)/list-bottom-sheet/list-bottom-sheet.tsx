'use client';

import { useState } from 'react';
import BottomSheet from '@/components/bottom-sheet/bottom-sheet';
import { Intersection } from '@/components/intersection/intersection';
import { BagInfoResponse as StoreInfoResponse } from '@/types/bag';
import { useGetBagInfiniteList } from '@/hooks/query/bag/useGetBagInfiniteList';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import ProductInfoThumbContainer from '@/components/product/product-info-thumb-container/product-info-thumb-container';
import ListShowButton from '../list-show-button/list-show-button';
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
  const { list, isLoading, intersection } = useInfiniteScroll(bagListState);
  return (
    list && (
      <>
        <ListShowButton
          onClick={() => {
            setOpen(true);
          }}
        />
        <BottomSheet
          isOpen={isOpen}
          setOpen={setOpen}
          height={350}
          content={
            <div className={styles.modal}>
              {isLoading ? (
                <>Loading ...</>
              ) : (
                list.map((store) => {
                  const { latitude, longitude } = store;
                  return (
                    <ProductInfoThumbContainer
                      key={store.id}
                      info={store}
                      onClick={() => {
                        map.morph(
                          new naver.maps.LatLng(+latitude - 0.001, +longitude),
                        );
                        setOpen(false);
                        setSelectedStore(store);
                      }}
                    />
                  );
                })
              )}
              <Intersection ref={intersection} />
            </div>
          }
        />
      </>
    )
  );
}
