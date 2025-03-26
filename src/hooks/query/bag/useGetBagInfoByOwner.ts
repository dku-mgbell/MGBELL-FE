import { useQuery } from '@tanstack/react-query';
import { Bag } from '@/hooks/api/bag';

export const useGetBagInfoByOwner = () =>
  useQuery({
    queryFn: () => Bag.getInfoByOwner(),
    queryKey: ['owner-bag-info'],
    gcTime: 0,
  });
