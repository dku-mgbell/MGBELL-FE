import { Store } from '@/hooks/api/store';
import { useQuery } from '@tanstack/react-query';

export const useGetMyStoreInfo = () =>
  useQuery({
    queryFn: () => Store.getMyStoreInfo(),
    queryKey: ['my-store-info'],
    gcTime: 0,
  });
