import { useQuery } from '@tanstack/react-query';
import { Review } from '@/hooks/api/review';

export const useGetBagRating = ({ goodsId }: { goodsId: string }) =>
  useQuery({
    queryKey: ['bag-rating', goodsId],
    queryFn: () => Review.getRating({ goodsId }),
  });
