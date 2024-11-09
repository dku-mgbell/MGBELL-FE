'use client';

import HeaderLayout from '@/components/layout/header-layout/header-layout';

import * as styles from './(components)/score-section/score-section/styles.css';
import ScoreSection from './(components)/score-section/score-section/score-section';
import ReviewSection from './(components)/score-section/review-section/review-section';

export default function Page({
  searchParams: { storeId, bagId },
}: {
  searchParams: { storeId: string; bagId: string };
}) {
  return (
    <HeaderLayout
      title="달콤한 디저트"
      previousPageLink={`/bag/${bagId}?fromReview=true`}
    >
      <div className={styles.container}>
        <ScoreSection storeId={Number(storeId)} />
        <hr />
        <ReviewSection />
      </div>
    </HeaderLayout>
  );
}
