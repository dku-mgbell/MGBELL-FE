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
import FavoriteButton from './(componets)/favorite-button/favorite-button';
import * as styles from './styles.css';

export default function Page() {
  const params = useParams();
  const route = useRouter();
  const bagId = Number(params.id);
  const { data, isLoading } = useGetBagDetail(bagId);
  const { number: numberInputData } = useNumberInputStore();
  const { bagAmount, setBagAmount } = useBagOrderState();
  const { open } = useModal();

  useEffect(() => {
    setBagAmount(numberInputData);
  }, [numberInputData]);

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
  } = data!;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <BackButton />
        <FavoriteButton isActive={favorite} />
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
          reviewButton={{ bagId, reviewCnt }}
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
              if (data!.amount > 0 && bagAmount > 0) {
                route.push(`order/${bagId}`);
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
