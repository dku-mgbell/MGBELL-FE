import { Bag } from '@/hooks/api/bag';
import { useQuery } from '@tanstack/react-query';

export const useGetBagInfoByOwner = () =>
  useQuery({
    queryFn: () => Bag.getInfoByOwner(),
    queryKey: ['owner-bag-info'],
    gcTime: 0,
  });
