import { Review } from '@/hooks/api/review';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useGetReviewList = ({
  storeId,
  size,
}: {
  storeId: number;
  size: number;
}) =>
  useInfiniteQuery({
    queryKey: ['review-list'],
    queryFn: ({ pageParam: pageNum }) =>
      Review.getInfiniteList(storeId, { page: pageNum, size }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length ? allPages.length : undefined,
    gcTime: 0,
  });
