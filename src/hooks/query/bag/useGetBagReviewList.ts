import { useQuery } from '@tanstack/react-query';
import { Review } from '@/hooks/api/review';

export const useGetBagReviewList = ({
  goodsId,
  imageCheck,
  size,
  page,
  enabled = true,
}: {
  goodsId: string;
  imageCheck: boolean;
  size: number;
  page?: number;
  enabled?: boolean;
}) =>
  useQuery({
    queryKey: ['bag-review-list', goodsId, enabled],
    queryFn: () =>
      Review.getList({
        goodsId,
        page: page ?? 1,
        size,
        imageCheck,
      }),
    enabled,
  });
