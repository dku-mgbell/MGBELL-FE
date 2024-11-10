import { Review } from '@/hooks/api/review';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useGetMyReview = ({ size }: { size: number }) =>
  useInfiniteQuery({
    queryKey: ['my-review-list'],
    queryFn: ({ pageParam: pageNum }) =>
      Review.getMyList({ page: pageNum, size }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length ? allPages.length : undefined,
    gcTime: 0,
  });
