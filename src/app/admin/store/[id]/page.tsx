'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { BagContent } from '@/app/bag/[storeId]/_components/content/components';
import ReviewList from '@/app/bag/[storeId]/_components/review-list';
import SkeletonContent from '@/app/bag/[storeId]/_components/skeleton-content';
import { useStoreDetailStore } from '@/app/bag/[storeId]/_stores/useStoreDetailStore';
import BackButton from '@/components/button/back-button';
import { Button } from '@/components/ui/button';
import { useGetStoreDetailWithBag } from '@/hooks/query/store/useGetStoreDetailWithBag';
import { useUserHistoryStore } from '@/hooks/stores/useUserHistoryStore';

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  const { id } = params;
  const { data: storeDetail, isFetched: isStoreDetailFetched } =
    useGetStoreDetailWithBag(id);
  const { setStoreId, setIsStoreDetailFetched, setStoreDetail } =
    useStoreDetailStore();
  const { addRecentViewedStoreList } = useUserHistoryStore();
  const router = useRouter();

  useEffect(() => {
    setStoreId(id);
  }, [id]);

  useEffect(() => {
    setIsStoreDetailFetched(isStoreDetailFetched);
    if (storeDetail) {
      setStoreDetail(storeDetail);
      addRecentViewedStoreList(storeDetail);
    }
  }, [isStoreDetailFetched]);

  const handleImageEditButtonClick = () => {
    router.push(`/admin/store/${id}/image`);
  };

  if (!isStoreDetailFetched) return <SkeletonContent />;

  return (
    <>
      <div className="w-full max-w-[450px] relative">
        <BackButton />
      </div>
      <BagContent.Container>
        <BagContent.Images />
        <div className="flex justify-end px-[20px]">
          <Button onClick={handleImageEditButtonClick}>이미지 수정</Button>
        </div>
        <BagContent.StoreInfo />
        <BagContent.Divider />
        <ReviewList />
        <BagContent.Description />
      </BagContent.Container>
    </>
  );
}
