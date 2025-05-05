'use client';

import { useEffect } from 'react';
import BagIcon from '@/assets/svg/BagIcon';
import Carousel from '@/components/carousel/carousel';
import NumberInput from '@/components/input/number/number-input';
import ProductInfoContainer from '@/components/product/product-info-container/product-info-container';
import { useGetBagDetail } from '@/hooks/query/bag/useGetBagDetail';
import { useBagHistoryStore } from '@/hooks/stores/useBagHistoryStore';
import { useBagOrderState } from '@/hooks/stores/useBagOrderStateStore';
import OrderButton from './(componets)/order-button';
import { useGetBagDetailStore } from './(stores)/useGetBagDetailStore';
import * as styles from './styles.css';

interface Props {
  bagId: number;
  isLoggedIn: boolean;
}

export default function BagDetailContent({ bagId, isLoggedIn }: Props) {
  const { data: bagDetail, isFetched: isBagDetailFetched } = useGetBagDetail({
    id: bagId,
    isLoggedIn,
  });
  const { bagAmount, setBagAmount } = useBagOrderState();
  const { setBagHistory } = useBagHistoryStore();
  const { setBagDetail } = useGetBagDetailStore();

  useEffect(() => {
    if (isBagDetailFetched && bagDetail) {
      setBagHistory(bagDetail);
      setBagDetail(isBagDetailFetched, bagDetail);
    }
  }, [isBagDetailFetched, bagDetail, setBagHistory, setBagDetail]);

  useEffect(() => {
    setBagAmount(0);
  }, []);

  if (!bagDetail) return null;

  return (
    <>
      <div className={styles.carousel}>
        <Carousel images={bagDetail.images} />
      </div>
      <div className={styles.sheet}>
        <ProductInfoContainer info={bagDetail} reviewButton={bagDetail} />
        <div className={styles.descriptionSection}>
          <h2 className={styles.descriptionHeader}>
            <BagIcon />
            {bagDetail.bagName}
          </h2>
          <p className={styles.description}>{bagDetail.description}</p>
          <p className={styles.description}>
            *위 정보를 바탕으로 주문하기를 누르면 예약이 진행됩니다.
          </p>
        </div>
        <footer className={styles.footer}>
          <NumberInput
            className={styles.numberInput}
            maxSize={bagDetail.amount}
            number={bagAmount}
            setNumber={setBagAmount}
          />
          <OrderButton />
        </footer>
      </div>
    </>
  );
}
