import { useQuery } from '@tanstack/react-query';
import { Store } from '@/hooks/api/store';

export const useGetStoreDetailWithBag = (id: string | null) => {
  return useQuery({
    queryKey: ['store-detail-with-bag', id],
    queryFn: () => Store.getDetailWithBag(id as string),
    enabled: !!id,
  });
};
