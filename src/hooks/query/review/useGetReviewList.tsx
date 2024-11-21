import { Review } from '@/hooks/api/review';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useGetReviewList = ({
  storeId,
  size,
  sortedByRecentDate,
}: {
  storeId: number;
  size: number;
  sortedByRecentDate: boolean;
}) =>
  useInfiniteQuery({
    queryKey: ['review-list'],
    queryFn: ({ pageParam: pageNum }) =>
      Review.getInfiniteList(storeId, sortedByRecentDate, {
        page: pageNum,
        size,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length ? allPages.length : undefined,
    gcTime: 0,
  });
