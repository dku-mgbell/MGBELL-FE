'use client';

import { useRouter } from 'next/navigation';
import HeaderLayout from '@/components/layout/header-layout/header-layout';
import { useGetStoreInfo } from '@/hooks/query/store/useGetStoreInfo';
import ScoreSection from './(components)/score-section/score-section/score-section';
import ReviewSection from './(components)/score-section/review-section/review-section';
import * as styles from './styles.css';

export default function Page({
  searchParams: { storeId },
}: {
  searchParams: { storeId: string; bagId: string };
}) {
  const route = useRouter();
  const { data, isLoading } = useGetStoreInfo(Number(storeId));

  if (isLoading) return <> </>;
  return (
    <HeaderLayout
      title={data!.storeName ?? ''}
      previousButtonClickEvent={() => {
        route.back();
      }}
      paddingBottom={false}
    >
      <div className={styles.container}>
        <ScoreSection storeId={Number(storeId)} />
        <hr className={styles.hr} />
        <ReviewSection storeId={Number(storeId)} />
      </div>
    </HeaderLayout>
  );
}
