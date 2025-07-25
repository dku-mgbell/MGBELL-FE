import Image from 'next/image';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { useGetBagReviewList } from '@/hooks/query/bag/useGetBagReviewList';
import { ReviewResponse } from '@/types/review';
import StarScore from '@/components/star-score';
import { useStoreDetailStore } from '../../_stores/useStoreDetailStore';

export default function ReviewList() {
  const { storeDetail, isStoreDetailFetched } = useStoreDetailStore();
  const { data } = useGetBagReviewList({
    goodsId: storeDetail?.goodsId ?? '',
    imageCheck: true,
    size: 3,
    enabled: isStoreDetailFetched,
  });

  if (data && data.length === 0) return null;

  return (
    <ScrollArea className="whitespace-nowrap px-[20px]  h-[84px]">
      <div className="flex w-max space-x-[12px]">
        {data?.map((review: ReviewResponse) => (
          <div
            key={review.reviewId}
            className="bg-gray10 rounded-[10px] p-[10px] flex gap-[12px] w-[280px] h-[84px]"
          >
            <div className="overflow-hidden rounded-[10px] w-[60px] h-[60px]">
              <Image
                src={review.imageUrls[0]}
                alt={`review image ${review.imageUrls[0]}`}
                className="aspect-[1/1] h-fit w-fit object-cover"
                width={200}
                height={200}
              />
            </div>
            <div className="flex flex-col gap-[4px]">
              <StarScore score={review.rating} />
              <p className="text-b3 text-gray4 line-clamp-2 break-all whitespace-break-spaces">
                {review.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
