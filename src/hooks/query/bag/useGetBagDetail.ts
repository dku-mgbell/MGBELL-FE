import { Bag } from '@/hooks/api/bag';
import { useQuery } from '@tanstack/react-query';

export const useGetBagDetail = ({
  id,
  isLoggedIn,
}: {
  id: number;
  isLoggedIn?: boolean;
}) =>
  useQuery({
    queryFn: () => Bag.getDetail({ id, isLoggedIn }),
    queryKey: ['bag-detail'],
    gcTime: 0,
  });
