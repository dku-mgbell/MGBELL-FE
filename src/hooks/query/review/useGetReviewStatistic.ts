import { useQuery } from '@tanstack/react-query';
import { Review } from '@/hooks/api/review';

export const useGetReviewStatistic = ({ storeId }: { storeId: number }) =>
  useQuery({
    queryFn: () => Review.getStatistic({ storeId }),
    queryKey: ['review-statistic'],
    gcTime: 0,
  });
