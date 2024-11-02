import { Favorite } from '@/hooks/api/favorite';
import { FavoriteRegistration } from '@/types/favorite';
import { useMutation, useQueryClient } from '@tanstack/react-query';

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
    },
  });
};
