import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Favorite } from '@/hooks/api/favorite';
import { FavoriteRegistration } from '@/types/favorite';

export const usePostFavorite = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: FavoriteRegistration) => Favorite.register(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['bag-detail'],
      });
      await queryClient.invalidateQueries({
        queryKey: ['bag-list'],
      });
      await queryClient.invalidateQueries({
        queryKey: ['user-favorite-list'],
      });
    },
  });
};
