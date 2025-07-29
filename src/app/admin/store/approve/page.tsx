'use client';

import { Intersection } from '@/components/intersection/intersection';
import HeaderLayout from '@/components/layout/header-layout';
import Loader from '@/components/loader/loader';
import { StoreList, StoreListItem } from '@/components/store/list';
import { Button } from '@/components/ui/button';
import { usePostStoreApproval } from '@/hooks/query/bag/usePostStoreApproval';
import { useGetPendingStoreList } from '@/hooks/query/store/useGetPendingStoreList';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import useModal from '@/hooks/useModal';

export default function Page() {
  const { mutate: approve } = usePostStoreApproval();
  const PendingStoreListState = useGetPendingStoreList({ size: 10 });
  const { list, intersection, isLoading } = useInfiniteScroll(
    PendingStoreListState,
  );
  const { open } = useModal();

  const handleApproveButtonClick = (id: string) => {
    open({
      title: '가게를 승인하시겠습니까?',
      description: '승인 시 가게에서 판매 등록이 가능합니다.',
      confirmEvent: () => {
        approve(id);
      },
    });
  };

  if (isLoading) return <Loader />;
  return (
    <HeaderLayout title="가게 승인">
      <StoreList.Container>
        {list?.map((item) => (
          <div
            key={`pending-${item.storeId}`}
            className="flex w-full flex-col gap-[5px] [&:not(:last-child)]:border-b-[1px] border-gray7 pb-[25px]"
          >
            <StoreListItem
              data={item}
              className="cursor-default active:scale-100 [&:not(:last-child)]:border-b-0"
              onClick={() => {}}
            />
            <Button onClick={() => handleApproveButtonClick(item.storeId)}>
              승인
            </Button>
          </div>
        ))}
      </StoreList.Container>
      <Intersection ref={intersection} />
    </HeaderLayout>
  );
}
