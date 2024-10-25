'use client';

import { useState } from 'react';
import BottomSheet from '@/components/bottom-sheet/bottom-sheet';
import { Intersection } from '@/components/intersection/intersection';
import Thumbnail from '@/mocks/thumbnail.png';
import { useGetBagInfiniteList } from '@/hooks/query/bag/useGetBagInfiniteList';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import * as styles from './styles.css';
import MapProductInfoContainer from '../map-product-info-container/map-product-info-container';
import TagContainer from '../tag-container/tag-container';
import ListShowButton from '../list-show-button/list-show-button';

export default function ListBottomSheet() {
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
          height={400}
          content={
            <div className={styles.modal}>
              {isLoading ? (
                <>Loading ...</>
              ) : (
                list.map(
                  ({
                    id,
                    storeName,
                    address,
                    onSale,
                    amount,
                    salePrice,
                    costPrice,
                    startAt,
                    endAt,
                  }) => (
                    <li key={id} className={styles.listItem}>
                      <div key={id} className={styles.contentContainer}>
                        <div className={styles.bagInfoContainer}>
                          <TagContainer info={{ onSale, amount }} />
                          <strong>{storeName}</strong>
                          <p className={styles.address}>{address}</p>
                        </div>
                        <div
                          className={styles.imageWrapper}
                          style={{
                            backgroundImage: `url('${Thumbnail.src}')`,
                          }}
                        />
                      </div>
                      <MapProductInfoContainer
                        info={{
                          salePrice,
                          costPrice,
                          startAt,
                          endAt,
                        }}
                      />
                    </li>
                  ),
                )
              )}
              <Intersection ref={intersection} />
            </div>
          }
        />
      </>
    )
  );
}
