import WarningIcon from '@/assets/svg/WarningIcon';
import Carousel from '@/components/carousel/carousel';
import { Skeleton } from '@/components/ui/skeleton';
import { Store } from '@/components/store';
import { useGetBagDetailStore } from '../../_store/useGetBagDetailStore';

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-[20px] pb-[calc(env(safe-area-inset-bottom)+86px)]">
      {children}
    </div>
  );
}

function Images({ isLoading }: { isLoading?: boolean }) {
  const { bagDetail } = useGetBagDetailStore();
  const data = isLoading ? undefined : bagDetail;
  return (
    <div className="flex h-[320px]">
      <Carousel images={data?.images ?? []} />
    </div>
  );
}

function StoreInfo({ isLoading }: { isLoading?: boolean }) {
  const { bagDetail } = useGetBagDetailStore();
  const data = isLoading ? undefined : bagDetail;

  return (
    <div className="flex flex-col gap-[4px] px-[20px]">
      <Store.Title value={data?.storeName} />
      <Store.ReviewLink
        bagId={data?.id}
        storeId={data?.storeId}
        count={data?.reviewCnt}
        score={4}
      />
      <Store.OpenStatus
        startAt={data?.startAt}
        endAt={data?.endAt}
        amount={data?.amount}
        isOpen={data?.onSale}
        isOpenTextVisible
      />
      <Store.Address value={data?.address} />
      <Store.Price price={data?.salePrice} discount={50} />
    </div>
  );
}

function Description({ isLoading }: { isLoading?: boolean }) {
  const { bagDetail } = useGetBagDetailStore();
  const data = isLoading ? undefined : bagDetail;
  return (
    <div className="flex flex-col gap-[4px] px-[20px]">
      {data?.description ? (
        <>
          <p className="text-b2 font-bold">마감백 설명</p>
          <p className="text-b2">{data?.description}</p>
          <div className="p-[20px] bg-gray10 rounded-[10px] mt-[20px]">
            <p className="text-b2 font-bold flex items-center gap-[4px]">
              <WarningIcon />
              주문 전 확인해주세요!
            </p>
            <p className="text-b2 text-gray4 flex flex-col gap-[5px] ">
              마감백에는 식품이 랜덤으로 들어가 있습니다. <br />
              알레르기 성분은 요청사항에 작성 부탁드립니다. <br />
              가게 수락 시 취소는 불가능합니다. <br />
              ex. 새우 알러지가 있어요
            </p>
          </div>
        </>
      ) : (
        <>
          <Skeleton className="w-[100px] h-[21px]" />
          <Skeleton className="w-[full] h-[100px]" />
        </>
      )}
    </div>
  );
}

function Divider() {
  return <div className="w-[calc(100%-40px)] mx-auto h-[1px] bg-gray7" />;
}

export const BagContent = {
  Container,
  Images,
  StoreInfo,
  Description,
  Divider,
};
