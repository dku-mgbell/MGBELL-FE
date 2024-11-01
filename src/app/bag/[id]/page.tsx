'use client';

import { useGetBagDetail } from '@/hooks/query/bag/useGetBagDetail';
import { useParams, useRouter } from 'next/navigation';
import BackButton from '@/components/button/back-button/back-button';
import Button from '@/components/button/text-button/button';
import BagIcon from '@/assets/svg/BagIcon';
import ProductInfoContainer from '@/components/product/product-info-container/product-info-container';
import Carousel from '@/components/carousel/carousel';
import NumberInput from '@/components/input/number/number-input';
import FavoriteButton from './(componets)/favorite-button/favorite-button';
import * as styles from './styles.css';

export default function Page() {
  const params = useParams();
  const route = useRouter();
  const bagId = Number(params.id);
  const { data, isLoading } = useGetBagDetail(bagId);

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
          <NumberInput className={styles.numberInput} />
          <Button
            value="주문하기"
            onClick={() => {
              route.push(`order/${bagId}`);
            }}
            className={styles.orderButton}
          />
        </footer>
      </div>
    </div>
  );
}
