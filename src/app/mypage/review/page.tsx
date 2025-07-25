'use client';

import { ClipLoader } from 'react-spinners';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import MoreVerticalIcon from '@/assets/svg/MoreVerticalIcon';
import { Intersection } from '@/components/intersection/intersection';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useDeleteReview } from '@/hooks/query/user/review/useDeleteReview';
import { useGetMyReviewList } from '@/hooks/query/user/review/useGetMyReviewList';
import { MyReviewResponse } from '@/types/review';
import { colors } from '@/styles/constant';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import useModal from '@/hooks/useModal';
import HorizontalImageContainer from '@/components/horizontal-image-container';
import ReviewSatisfactionList from '@/components/review-satisfaction-list';

export default function Page() {
  const ReviewState = useGetMyReviewList({ size: 10 });
  const { list, isLoading, intersection } =
    useInfiniteScroll<MyReviewResponse>(ReviewState);
  const { open } = useModal();
  const { mutate: deleteReview } = useDeleteReview();

  if (isLoading)
    return <ClipLoader color={colors.primary} className="absolute-center" />;

  const handleDelete = (reviewId: string) => {
    open({
      title: '리뷰를 삭제하시겠습니까?',
      description: '리뷰를 삭제하면 복구할 수 없습니다.',
      confirmEvent: () => {
        deleteReview(reviewId);
      },
    });
  };

  return (
    <ul className="flex flex-col gap-[50px]">
      {list!.map((review) => (
        <li key={review.reviewId} className="flex flex-col gap-[10px]">
          <div className="flex justify-between">
            <Link
              href={`/bag/${review.storeId}`}
              className="flex gap-[4px] text-b1 font-bold"
            >
              {review.storeName} <ChevronRight />
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <MoreVerticalIcon />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  onClick={() => {
                    handleDelete(review.reviewId);
                  }}
                >
                  삭제하기
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <p>{review.description}</p>
          {review.imageUrls.length > 0 && (
            <HorizontalImageContainer images={review.imageUrls} />
          )}
          {review.satisfactionReasons.length > 0 && (
            <ReviewSatisfactionList
              satisfactions={review.satisfactionReasons}
            />
          )}
        </li>
      ))}
      <Intersection ref={intersection} />
    </ul>
  );
}
