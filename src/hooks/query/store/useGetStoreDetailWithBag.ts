import { useQuery } from '@tanstack/react-query';
import { Store } from '@/hooks/api/store';

export const useGetStoreDetailWithBag = (id: string) => {
  return useQuery({
    queryKey: ['store-detail-with-bag', id],
    queryFn: () => Store.getDetailWithBag(id),
    enabled: !!id,
  });
};
