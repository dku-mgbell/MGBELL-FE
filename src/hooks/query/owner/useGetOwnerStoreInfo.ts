import { useQuery } from '@tanstack/react-query';
import { Owner } from '@/hooks/api/order/owner';

export const useGetOwnerStoreInfo = () => {
  return useQuery({
    queryKey: ['owner-store-info'],
    queryFn: Owner.getStoreInfo,
  });
};
