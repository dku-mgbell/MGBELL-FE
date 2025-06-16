'use client';

import { useEffect } from 'react';
import { useGetBagDetail } from '@/hooks/query/bag/useGetBagDetail';
import { useAuthStore } from '@/hooks/stores/useAuthStore';
import { useBagHistoryStore } from '@/hooks/stores/useBagHistoryStore';
import { useGetBagDetailStore } from '../../_store/useGetBagDetailStore';
import Footer from '../footer';
import SkeletonContent from '../skeleton-content';
import { BagContent } from './components';

interface Props {
  bagId: number;
}

export default function BagDetailContent({ bagId }: Props) {
  const { isLoggedIn } = useAuthStore();
  const { data: bagDetail, isFetched: isBagDetailFetched } = useGetBagDetail({
    id: bagId,
    isLoggedIn,
  });
  const { setBagHistory } = useBagHistoryStore();
  const { bagDetail: bagDetailStore, setBagDetail } = useGetBagDetailStore();

  useEffect(() => {
    if (isBagDetailFetched) {
      setBagHistory(bagDetail);
      setBagDetail(isBagDetailFetched, bagDetail);
    }
  }, [isBagDetailFetched, bagDetail, setBagHistory, setBagDetail]);

  if (bagId !== bagDetailStore?.id) return <SkeletonContent />;

  return (
    <>
      <BagContent.Container>
        <BagContent.Images />
        <BagContent.StoreInfo />
        <BagContent.Divider />
        <BagContent.Description />
      </BagContent.Container>
      <Footer />
    </>
  );
}
