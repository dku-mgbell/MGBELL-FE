import { Review } from '@/hooks/api/review';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDeleteReview = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => Review.deletePost(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['my-review-list'],
      });
    },
  });
};
