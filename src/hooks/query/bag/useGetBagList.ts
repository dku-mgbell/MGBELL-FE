import { useQuery } from '@tanstack/react-query';
import { Bag } from '@/hooks/api/bag';
import { PageParams } from '@/types/api';

export const useGetBagList = ({ page, size }: PageParams) =>
  useQuery({
    queryFn: () => Bag.getList({ page, size }),
    queryKey: ['bag-list'],
    gcTime: 0,
  });
