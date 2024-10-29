import { Bag } from '@/hooks/api/bag';
import { useQuery } from '@tanstack/react-query';

export const useGetBagDetail = (id: number) =>
  useQuery({
    queryFn: () => Bag.getDetail(id),
    queryKey: ['bag-detail'],
    gcTime: 0,
  });
