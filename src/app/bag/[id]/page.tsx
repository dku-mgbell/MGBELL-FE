'use client';

import { useEffect } from 'react';
import { useGetBagDetail } from '@/hooks/query/bag/useGetBagDetail';
import { useParams, useRouter } from 'next/navigation';
import BackButton from '@/components/button/back-button/back-button';
import Button from '@/components/button/text-button/button';
import BagIcon from '@/assets/svg/BagIcon';
import ProductInfoContainer from '@/components/product/product-info-container/product-info-container';
import Carousel from '@/components/carousel/carousel';
import { useBagOrderState } from '@/hooks/stores/useBagOrderStateStore';
import NumberInput from '@/components/input/number/number-input';
import useModal from '@/hooks/useModal';
import { useNumberInputStore } from '@/hooks/stores/useNumberInputStore';
import { useAuthStore } from '@/hooks/stores/useAuthStore';
import { useBagHistoryStore } from '@/hooks/stores/useBagHistoryStore';
import FavoriteButton from './(componets)/favorite-button/favorite-button';
import * as styles from './styles.css';

export default function Page() {
  const params = useParams();
  const route = useRouter();
  const bagId = Number(params.id);
  const { isLoggedIn } = useAuthStore();
  const { data, isLoading } = useGetBagDetail({ id: bagId, isLoggedIn });
  const { number: numberInputData } = useNumberInputStore();
  const { bagAmount, setBagAmount } = useBagOrderState();
  const { open } = useModal();
  const { bagHistory, setBagHistory } = useBagHistoryStore();

  useEffect(() => {
    setBagAmount(numberInputData);
  }, [numberInputData]);

  useEffect(() => {
    if (!isLoading) {
      setBagHistory([
        data!,
        ...bagHistory.filter((history) => history.storeId !== data!.storeId),
      ]);
    }
  }, [isLoading]);

  if (isLoading) return <> </>;

  const {
    storeName,
    bagName,
    description,
    onSale,
    amount,
    address,
    salePrice,
    costPrice,
    startAt,
    endAt,
    images,
    favorite,
    reviewCnt,
    storeId,
  } = data!;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <BackButton />
        {isLoggedIn && <FavoriteButton isActive={favorite} storeId={storeId} />}
      </header>
      <div className={styles.carousel}>
        <Carousel images={images} />
      </div>
      <div className={styles.sheet}>
        <ProductInfoContainer
          info={{
            storeName,
            onSale,
            amount,
            address,
            salePrice,
            costPrice,
            startAt,
            endAt,
          }}
          reviewButton={{ bagId, storeId, reviewCnt }}
        />
        <div className={styles.descriptionSection}>
          <h2 className={styles.descriptionHeader}>
            <BagIcon />
            {bagName}
          </h2>
          <p className={styles.description}>{description}</p>
          <p className={styles.description}>
            *위 정보를 바탕으로 주문하기를 누르면 예약이 진행됩니다.
          </p>
        </div>

        <footer className={styles.footer}>
          <NumberInput className={styles.numberInput} maxSize={amount} />
          <Button
            value="주문하기"
            onClick={() => {
              if (!isLoggedIn) {
                open({ content: '로그인 후 이용 가능합니다.' });
                return;
              }
              if (data!.amount > 0 && bagAmount > 0) {
                route.push(`order/${storeId}`);
              } else {
                open({ content: '수량을 선택해주세요' });
              }
            }}
            className={styles.orderButton}
          />
        </footer>
      </div>
    </div>
  );
}
