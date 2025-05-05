'use client';

import { useEffect } from 'react';
import BagIcon from '@/assets/svg/BagIcon';
import Carousel from '@/components/carousel/carousel';
import NumberInput from '@/components/input/number/number-input';
import ProductInfoContainer from '@/components/product/product-info-container/product-info-container';
import { useGetBagDetail } from '@/hooks/query/bag/useGetBagDetail';
import { useBagHistoryStore } from '@/hooks/stores/useBagHistoryStore';
import { useBagOrderState } from '@/hooks/stores/useBagOrderStateStore';
import { useNumberInputStore } from '@/hooks/stores/useNumberInputStore';
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
  const { number: numberInputData, setNumber: setNumberInputData } =
    useNumberInputStore();
  const { setBagAmount } = useBagOrderState();
  const { setBagHistory } = useBagHistoryStore();
  const { setBagDetail } = useGetBagDetailStore();

  useEffect(() => {
    if (isBagDetailFetched && bagDetail) {
      setBagHistory(bagDetail);
      setBagDetail(isBagDetailFetched, bagDetail);
    }
  }, [isBagDetailFetched, bagDetail, setBagHistory, setBagDetail]);

  useEffect(() => {
    setNumberInputData(0);
  }, []);

  useEffect(() => {
    setBagAmount(numberInputData);
  }, [numberInputData, setBagAmount]);

  if (!bagDetail) return null;

  return (
    <>
      <div className={styles.carousel}>
        <Carousel images={bagDetail.images} />
      </div>
      <div className={styles.sheet}>
        <ProductInfoContainer
          info={{
            storeName: bagDetail.storeName,
            onSale: bagDetail.onSale,
            amount: bagDetail.amount,
            address: bagDetail.address,
            salePrice: bagDetail.salePrice,
            costPrice: bagDetail.costPrice,
            startAt: bagDetail.startAt,
            endAt: bagDetail.endAt,
          }}
          reviewButton={{
            bagId,
            storeId: bagDetail.storeId,
            reviewCnt: bagDetail.reviewCnt,
          }}
        />
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
          />
          <OrderButton />
        </footer>
      </div>
    </>
  );
}
