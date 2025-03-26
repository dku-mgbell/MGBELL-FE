import { useQuery } from '@tanstack/react-query';
import { Store } from '@/hooks/api/store';

export const useGetMyStoreInfo = () =>
  useQuery({
    queryFn: () => Store.getMyStoreInfo(),
    queryKey: ['my-store-info'],
    gcTime: 0,
  });
