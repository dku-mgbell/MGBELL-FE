'use client';

import { useState } from 'react';
import StarIcon from '@/assets/svg/StarIcon';
import TimeIcon from '@/assets/svg/TimeIcon';
import BottomSheet from '@/components/bottom-sheet/bottom-sheet';
import ProductInfoContainer from '@/components/product/info-container/ProductInfoContainer';
import Tag from '@/components/text/tag/tag';
import { Intersection } from '@/components/intersection/intersection';
import Thumbnail from '@/mocks/thumbnail.png';
import { useGetBagList } from '@/hooks/query/store/useGetBagList';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import * as styles from './styles.css';

export default function ListBottomSheet() {
  const [isOpen, setOpen] = useState(true);
  const bagListState = useGetBagList({ size: 5 });
  const { list, isLoading, intersection } = useInfiniteScroll(bagListState);
  return (
    list && (
      <BottomSheet
        isOpen={isOpen}
        setOpen={setOpen}
        height={400}
        content={
          <div className={styles.modal}>
            {isLoading ? (
              <>Loading ...</>
            ) : (
              list.map((item) => (
                <li key={item.id} className={styles.listItem}>
                  <div key={item.id} className={styles.contentContainer}>
                    <div className={styles.bagInfoContainer}>
                      <div className={styles.tagContainer}>
                        <Tag
                          content={item.onSale ? '영업 중' : '영업 종료'}
                          theme={item.onSale ? 'primary' : 'gray'}
                        />
                        <Tag
                          content={
                            item.amount ? `${item.amount}개 남음` : '재고 없음'
                          }
                          theme={item.amount ? 'default' : 'gray'}
                        />
                      </div>
                      <strong>{item.bagName}</strong>
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
                    salePrice={item.salePrice!}
                    costPrice={item.costPrice!}
                    firstRow={{
                      icon: <TimeIcon width={20} height={19.2} />,
                      text: `픽업 시간: ${item.startAt}~${item.endAt}`,
                    }}
                    secondRow={{ icon: <StarIcon theme="red" />, text: '4.9' }}
                    noPadding
                  />
                </li>
              ))
            )}
            <Intersection ref={intersection} />
          </div>
        }
      />
    )
  );
}
