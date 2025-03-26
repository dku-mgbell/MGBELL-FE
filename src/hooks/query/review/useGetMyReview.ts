import { useInfiniteQuery } from '@tanstack/react-query';
import { Review } from '@/hooks/api/review';

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
