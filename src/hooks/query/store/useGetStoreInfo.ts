import { Store } from '@/hooks/api/store';
import { useQuery } from '@tanstack/react-query';

export const useGetStoreInfo = (id: number) =>
  useQuery({
    queryFn: () => Store.getInfo(id),
    queryKey: ['store-info'],
    gcTime: 0,
  });
