import { useQuery } from '@tanstack/react-query';
import { Favorite } from '@/hooks/api/favorite';
import { useAuth } from '@/hooks/useAuth';

export const useGetStoreFavorite = (storeId: string) => {
  const { isLoggedIn } = useAuth();
  return useQuery({
    queryKey: ['store-favorite', storeId],
    queryFn: () => Favorite.handleStatus({ type: 'get', storeId }),
    enabled: isLoggedIn && !!storeId,
  });
};
