import { Intersection } from '@/components/intersection/intersection';
import { useGetBagReviewInfiniteList } from '@/hooks/query/bag/useGetBagReviewInfiniteList';
import getTimeDifference from '@/utils/getTimeDifference';
import HorizontalImageContainer from '@/components/horizontal-image-container';
import ReviewSatisfactionList from '@/components/review-satisfaction-list';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

export default function ReviewList({
  goodsId,
  imageCheck,
}: {
  goodsId: string;
  imageCheck: boolean;
}) {
  const reviewState = useGetBagReviewInfiniteList({
    goodsId,
    imageCheck,
    size: 10,
  });

  const { list, isLoading, intersection } = useInfiniteScroll(reviewState);
  if (isLoading) return null;
  return (
    <ul className="flex flex-col gap-[50px]">
      {list!.map((review) => (
        <li key={review.reviewId} className="flex flex-col gap-[10px]">
          <div className="flex items-center gap-2">
            <strong>{review.nickName}</strong>
            <span className="text-b3 text-gray4">
              {getTimeDifference(review.createdAt)}
            </span>
          </div>
          <p>{review.description}</p>
          <HorizontalImageContainer images={review.imageUrls} />
          <ReviewSatisfactionList satisfactions={review.satisfactionReasons} />
        </li>
      ))}
      <Intersection ref={intersection} />
    </ul>
  );
}
