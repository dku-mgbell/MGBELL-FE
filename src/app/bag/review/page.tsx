'use client';

import { useRouter } from 'next/navigation';
import HeaderLayout from '@/components/layout/header-layout/header-layout';
import { useGetStoreInfo } from '@/hooks/query/store/useGetStoreInfo';
import { useGetReviewStatistic } from '@/hooks/query/review/useGetReviewStatistic';
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
  const { data: reviewStatistic, isLoading: isStatisticLoading } =
    useGetReviewStatistic({
      storeId: Number(storeId),
    });

  if (isLoading || isStatisticLoading) return <> </>;
  return (
    <HeaderLayout
      title={data!.storeName ?? ''}
      previousButtonClickEvent={() => {
        route.back();
      }}
      paddingBottom={false}
    >
      <div className={styles.container}>
        <ScoreSection reviewStatistic={reviewStatistic!} />
        <hr className={styles.hr} />
        <ReviewSection
          storeId={Number(storeId)}
          reviewCount={reviewStatistic!.totalReviewCount}
        />
      </div>
    </HeaderLayout>
  );
}
