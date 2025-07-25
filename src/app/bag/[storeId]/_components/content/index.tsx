'use client';

import { useEffect } from 'react';
import { useGetStoreDetailWithBag } from '@/hooks/query/store/useGetStoreDetailWithBag';
import { useUserHistoryStore } from '@/hooks/stores/useUserHistoryStore';
import { useStoreDetailStore } from '../../_stores/useStoreDetailStore';
import Footer from '../footer';
import ReviewList from '../review-list';
import SkeletonContent from '../skeleton-content';
import { BagContent } from './components';

interface Props {
  storeId: string;
}

export default function BagDetailContent({ storeId }: Props) {
  const { data: storeDetail, isFetched: isStoreDetailFetched } =
    useGetStoreDetailWithBag(storeId);
  const { setStoreId, setIsStoreDetailFetched, setStoreDetail } =
    useStoreDetailStore();
  const { addRecentViewedStoreList } = useUserHistoryStore();

  useEffect(() => {
    setStoreId(storeId);
  }, [storeId]);

  useEffect(() => {
    setIsStoreDetailFetched(isStoreDetailFetched);
    if (storeDetail) {
      setStoreDetail(storeDetail);
      addRecentViewedStoreList(storeDetail);
    }
  }, [isStoreDetailFetched]);

  if (!isStoreDetailFetched) return <SkeletonContent />;

  return (
    <>
      <BagContent.Container>
        <BagContent.Images />
        <BagContent.StoreInfo />
        <BagContent.Divider />
        <ReviewList />
        <BagContent.Description />
      </BagContent.Container>
      <Footer />
    </>
  );
}
