import { useQuery } from '@tanstack/react-query';
import { Store } from '@/hooks/api/store';
import { StoreListRequestParams } from '@/types/store';

export const useGetStoreList = ({
  page,
  size,
  sortType,
}: StoreListRequestParams) =>
  useQuery({
    queryFn: () => Store.getInfiniteList({ page, size, sortType }),
    queryKey: ['store-list', page, size, sortType],
    gcTime: 0,
  });
