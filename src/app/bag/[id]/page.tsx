'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import BagIcon from '@/assets/svg/BagIcon';
import Carousel from '@/components/carousel/carousel';
import NumberInput from '@/components/input/number/number-input';
import ProductInfoContainer from '@/components/product/product-info-container/product-info-container';
import { useGetBagDetail } from '@/hooks/query/bag/useGetBagDetail';
import { useAuthStore } from '@/hooks/stores/useAuthStore';
import { useBagHistoryStore } from '@/hooks/stores/useBagHistoryStore';
import { useBagOrderState } from '@/hooks/stores/useBagOrderStateStore';
import { useNumberInputStore } from '@/hooks/stores/useNumberInputStore';
import Header from './(componets)/header';
import OrderButton from './(componets)/order-button';
import { useGetBagDetailStore } from './(stores)/useGetBagDetailStore';
import * as styles from './styles.css';

export default function Page() {
  const params = useParams();
  const bagId = Number(params.id);
  const { isLoggedIn } = useAuthStore();
  const {
    data: bagDetail,
    isLoading,
    isFetched: isBagDetailFetched,
  } = useGetBagDetail({
    id: bagId,
    isLoggedIn,
  });
  const { number: numberInputData } = useNumberInputStore();
  const { setBagAmount } = useBagOrderState();
  const { setBagHistory } = useBagHistoryStore();
  const { setBagDetail } = useGetBagDetailStore();

  useEffect(() => {
    if (isBagDetailFetched) {
      setBagHistory(bagDetail!);
      setBagDetail(isBagDetailFetched, bagDetail!);
    }
  }, [isBagDetailFetched, bagDetail, setBagHistory, setBagDetail]);

  useEffect(() => {
    setBagAmount(numberInputData);
  }, [numberInputData]);

  if (isLoading) return <> </>;

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.carousel}>
        <Carousel images={bagDetail!.images} />
      </div>
      <div className={styles.sheet}>
        <ProductInfoContainer
          info={bagDetail!}
          reviewButton={{
            bagId,
            storeId: bagDetail!.storeId,
            reviewCnt: bagDetail!.reviewCnt,
          }}
        />
        <div className={styles.descriptionSection}>
          <h2 className={styles.descriptionHeader}>
            <BagIcon />
            {bagDetail!.bagName}
          </h2>
          <p className={styles.description}>{bagDetail!.description}</p>
          <p className={styles.description}>
            *위 정보를 바탕으로 주문하기를 누르면 예약이 진행됩니다.
          </p>
        </div>

        <footer className={styles.footer}>
          <NumberInput
            className={styles.numberInput}
            maxSize={bagDetail!.amount}
          />
          <OrderButton />
        </footer>
      </div>
    </div>
  );
}
