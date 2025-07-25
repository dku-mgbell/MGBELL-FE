import { useQuery } from '@tanstack/react-query';
import { Store } from '@/hooks/api/store';
import { useAuth } from '@/hooks/useAuth';

export const useGetStoreSubscriptionStatus = (storeId: string) => {
  const { isLoggedIn } = useAuth();
  return useQuery({
    queryKey: ['store-subscription-status', storeId],
    queryFn: () => Store.getSubscriptionStatus(storeId),
    enabled: !!isLoggedIn && !!storeId,
  });
};
