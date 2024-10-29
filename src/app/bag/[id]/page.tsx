'use client';

import { useGetBagDetail } from '@/hooks/query/bag/useGetBagDetail';
import { useParams, useRouter } from 'next/navigation';
import BackButton from '@/components/button/back-button/back-button';
import Button from '@/components/button/text-button/button';
import BagIcon from '@/assets/svg/BagIcon';

import * as styles from './styles.css';

export default function Page() {
  const params = useParams();
  const route = useRouter();
  const bagId = Number(params.id);
  const { data, isLoading } = useGetBagDetail(bagId);

  if (isLoading) return <> </>;

  const { storeName, bagName, description } = data!;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <BackButton />
        <button type="button">favorite</button>
      </header>
      <div className={styles.carousel}>carousel</div>
      <div className={styles.sheet}>
        <div>
          [{storeName}] {bagName}
        </div>
        <div className={styles.descriptionSection}>
          <h2 className={styles.descriptionHeader}>
            <BagIcon />[{storeName}] 마감백 설명
          </h2>
          <p className={styles.description}>{description}</p>
          <br />
        </div>
        <p className={styles.description}>
          *위 정보를 바탕으로 주문하기를 누르면 예약이 진행됩니다.
        </p>

        <footer className={styles.footer}>
          <div>수량 선택</div>
          <Button
            value="주문하기"
            onClick={() => {
              route.push(`order/${bagId}`);
            }}
          />
        </footer>
      </div>
    </div>
  );
}
