import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Favorite } from '@/hooks/api/favorite';

export const usePatchStoreFavorite = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      storeId,
      type,
    }: {
      storeId: string;
      type: 'post' | 'delete';
    }) => Favorite.handleStatus({ type, storeId }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['user-favorite-list'],
      });
      await queryClient.invalidateQueries({
        queryKey: ['store-favorite'],
      });
    },
  });
};
