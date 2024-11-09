import { Review } from '@/hooks/api/review';
import { useQuery } from '@tanstack/react-query';

export const useGetReviewStatistic = ({ storeId }: { storeId: number }) =>
  useQuery({
    queryFn: () => Review.getStatistic({ storeId }),
    queryKey: ['review-statistic'],
    gcTime: 0,
  });
