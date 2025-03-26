import { useInfiniteQuery } from '@tanstack/react-query';
import { Review } from '@/hooks/api/review';

export const useGetReviewList = ({
  storeId,
  size,
  sortedByRecentDate,
  isOnlyPhoto,
}: {
  storeId: number;
  size: number;
  sortedByRecentDate: boolean;
  isOnlyPhoto: boolean;
}) =>
  useInfiniteQuery({
    queryKey: ['review-list'],
    queryFn: ({ pageParam: pageNum }) =>
      Review.getInfiniteList(storeId, sortedByRecentDate, isOnlyPhoto, {
        page: pageNum,
        size,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length ? allPages.length : undefined,
    gcTime: 0,
  });
