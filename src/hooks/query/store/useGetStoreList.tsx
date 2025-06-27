import { useQuery } from '@tanstack/react-query';
import { Store } from '@/hooks/api/store';
import { StoreListRequestParams } from '@/types/store';

export const useGetStoreList = ({
  size,
  sortType,
}: Omit<StoreListRequestParams, 'page'>) =>
  useQuery({
    queryFn: () => Store.getInfiniteList({ page: 0, size, sortType }),
    queryKey: ['store-list', size, sortType],
    gcTime: 0,
  });
