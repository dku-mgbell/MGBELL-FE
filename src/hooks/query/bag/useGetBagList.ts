import { Bag } from '@/hooks/api/bag';
import { PageParams } from '@/types/api';
import { useQuery } from '@tanstack/react-query';

export const useGetBagList = ({ page, size }: PageParams) =>
  useQuery({
    queryFn: () => Bag.getList({ page, size }),
    queryKey: ['bag-list'],
    gcTime: 0,
  });
