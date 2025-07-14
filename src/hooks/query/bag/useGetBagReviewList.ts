import { useInfiniteQuery } from '@tanstack/react-query';
import { Review } from '@/hooks/api/review';

export const useGetBagReviewList = ({
  goodsId,
  imageCheck,
  size,
}: {
  goodsId: string;
  imageCheck: boolean;
  size: number;
}) =>
  useInfiniteQuery({
    queryKey: ['bag-review-list', goodsId, imageCheck],
    queryFn: ({ pageParam: pageNum }) =>
      Review.getInfiniteList({
        goodsId,
        imageCheck,
        page: pageNum,
        size,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length ? allPages.length : undefined,
    gcTime: 0,
    staleTime: 0,
  });
