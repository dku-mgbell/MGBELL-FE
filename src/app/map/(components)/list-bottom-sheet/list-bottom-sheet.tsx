'use client';

import { useState } from 'react';
import StarIcon from '@/assets/svg/StarIcon';
import TimeIcon from '@/assets/svg/TimeIcon';
import BottomSheet from '@/components/bottom-sheet/bottom-sheet';
import ProductInfoContainer from '@/components/product/info-container/ProductInfoContainer';
import Tag from '@/components/text/tag/tag';
import Thumbnail from '@/mocks/thumbnail.png';
import { useGetBagList } from '@/hooks/query/store/useGetBagList';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import * as styles from './styles.css';

export default function ListBottomSheet() {
  const [isOpen, setOpen] = useState(true);
  const bagListState = useGetBagList({ size: 5 });
  const { list, isLoading } = useInfiniteScroll(bagListState);
  return (
    list && (
      <BottomSheet
        isOpen={isOpen}
        setOpen={setOpen}
        content={
          <div className={styles.modal}>
            {isLoading ? (
              <>Loading ...</>
            ) : (
              list.map((item) => (
                <>
                  <div key={item.id} className={styles.contentContainer}>
                    <div className={styles.bagInfoContainer}>
                      <div className={styles.tagContainer}>
                        <Tag
                          content={item.onSale ? '영업 중' : '마감'}
                          theme="primary"
                        />
                        <Tag content={`${item.amount}개 남음`} />
                      </div>
                      <strong>{item?.bagName}</strong>
                      <p className={styles.address}>{item?.address}</p>
                    </div>
                    <div
                      className={styles.imageWrapper}
                      style={{
                        backgroundImage: `url('${Thumbnail.src}')`,
                      }}
                    />
                  </div>
                  <ProductInfoContainer
                    salePrice={100}
                    costPrice={100}
                    firstRow={{
                      icon: <TimeIcon width={20} height={19.2} />,
                      text: `마감 픽업 시간: ${item.startAt}~${item.endAt}`,
                    }}
                    secondRow={{ icon: <StarIcon theme="red" />, text: '4.9' }}
                    noPadding
                  />
                </>
              ))
            )}
          </div>
        }
      />
    )
  );
}
