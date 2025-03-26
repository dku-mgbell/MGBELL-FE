import { useQuery } from '@tanstack/react-query';
import { Store } from '@/hooks/api/store';

export const useGetStoreInfo = (id: number) =>
  useQuery({
    queryFn: () => Store.getInfo(id),
    queryKey: ['store-info'],
    gcTime: 0,
  });
