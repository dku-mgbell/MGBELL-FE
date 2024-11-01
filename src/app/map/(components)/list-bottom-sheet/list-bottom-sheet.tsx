'use client';

import { useState } from 'react';
import BottomSheet from '@/components/bottom-sheet/bottom-sheet';
import { Intersection } from '@/components/intersection/intersection';
import Thumbnail from '@/mocks/thumbnail.png';
import { BagInfoResponse as StoreInfoResponse } from '@/types/bag';
import { useGetBagInfiniteList } from '@/hooks/query/bag/useGetBagInfiniteList';
import ProductInfoFooter from '@/components/product/product-info-container/(components)/footer';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import * as styles from './styles.css';
import TagContainer from '../tag-container/tag-container';
import ListShowButton from '../list-show-button/list-show-button';

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
                  const {
                    storeName,
                    onSale,
                    amount,
                    salePrice,
                    costPrice,
                    startAt,
                    endAt,
                    latitude,
                    longitude,
                  } = store;

                  return (
                    <div
                      key={store.id}
                      role="button"
                      className={styles.listItem}
                      onClick={() => {
                        map.morph(
                          new naver.maps.LatLng(+latitude - 0.001, +longitude),
                        );
                        setOpen(false);
                        setSelectedStore(store);
                      }}
                      tabIndex={0}
                      aria-hidden="true"
                    >
                      <div className={styles.contentContainer}>
                        <div className={styles.bagInfoContainer}>
                          <TagContainer info={{ onSale, amount }} />
                          <strong>{storeName}</strong>
                          <p className={styles.address}>{store.address}</p>
                        </div>
                        <div
                          className={styles.imageWrapper}
                          style={{
                            backgroundImage: `url('${Thumbnail.src}')`,
                          }}
                        />
                      </div>
                      <ProductInfoFooter
                        info={{
                          salePrice,
                          costPrice,
                          startAt,
                          endAt,
                        }}
                      />
                    </div>
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
